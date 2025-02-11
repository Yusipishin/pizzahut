import { useMask } from '@react-input/mask';
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '../Stack';
import cls from './Input.module.scss';

type InputTheme = 'outline';
type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    id: string;
    square?: boolean;
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    theme?: InputTheme;
    label?: string;
    phoneMask?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        id,
        className,
        value = '',
        onChange,
        autofocus,
        type = 'text',
        placeholder,
        readonly,
        theme = 'outline',
        label,
        square,
        phoneMask,
        ...otherProps
    } = props;

    const [inputValue, setInputValue] = useState(value);

    const ref = useRef<HTMLInputElement>(null);
    const phoneMaskRef = useMask({
        showMask: true,
        mask: '+7 (___) ___-__-__',
        replacement: { _: /\d/ },
    });

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }

        if (phoneMask) {
            setInputValue(value || '+7 (___) ___-__-__');
        } else {
            setInputValue(value);
        }
    }, [autofocus, phoneMask, value]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onChange?.(newValue);
    };

    return (
        <VStack
            max
            gap="8"
            className={classNames(
                cls.InputWrapper,
                { [cls.readonly]: readonly },
                [className, cls[theme]],
            )}
            data-testid="Input.div"
        >
            {label && (
                <label
                    htmlFor={id}
                    className={cls.label}
                    data-testid="Input.label"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                value={inputValue}
                readOnly={readonly}
                placeholder={placeholder}
                data-testid="Input.input"
                onChange={onChangeHandler}
                ref={phoneMask ? phoneMaskRef : ref}
                className={classNames(cls.input, { [cls.square]: square })}
                {...otherProps}
            />
        </VStack>
    );
});
