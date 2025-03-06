import { Suspense, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { LoginCodeAsync } from '../LoginCode/LoginCode.async';
import { LoginPhoneAsync } from '../LoginPhone/LoginPhone.async';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '../../testing';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    const [isVerifyModal, setIsVerifyModal] = useState(false);

    return (
        <Modal
            lazy
            small
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <DynamicModuleLoader
                    removeAfterUnmount
                    reducers={initialReducers}
                >
                    {isVerifyModal ? (
                        <LoginCodeAsync
                            className={className}
                            setIsVerifyModal={setIsVerifyModal}
                            onSuccess={onClose}
                        />
                    ) : (
                        <LoginPhoneAsync
                            className={className}
                            setIsVerifyModal={setIsVerifyModal}
                        />
                    )}
                </DynamicModuleLoader>
            </Suspense>
        </Modal>
    );
};
