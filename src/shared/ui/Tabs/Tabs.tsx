import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, onTabClick, tabs, value } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div
            data-testid="Tabs.div"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? 'outline' : null}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandle(tab)}
                    data-testid="Tabs.Card"
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
