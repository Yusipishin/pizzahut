import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Tabs } from './Tabs';

const onTabClick = jest.fn();
const tabs = [
    { value: 'tab1', content: 'Tab 1' },
    { value: 'tab2', content: 'Tab 2' },
    { value: 'tab3', content: 'Tab 3' },
];

describe('shared/ui/Tabs.test', () => {
    test('Renders tabs with correct content', () => {
        render(
            <Tabs tabs={tabs} value={tabs[0].value} onTabClick={onTabClick} />,
        );
        tabs.forEach((tab) => {
            expect(screen.getByText(tab.content)).toBeInTheDocument();
        });
    });

    test('Renders active tab', () => {
        render(<Tabs tabs={tabs} value="tab2" onTabClick={onTabClick} />);
        expect(screen.getByText(tabs[1].content)).toBeInTheDocument();
        expect(screen.getByText(tabs[1].content)).toHaveClass('outline');
    });

    test('Calls onTabClick when a tab is clicked', () => {
        render(
            <Tabs tabs={tabs} value={tabs[0].value} onTabClick={onTabClick} />,
        );

        fireEvent.click(screen.getByText(tabs[1].content));
        expect(onTabClick).toHaveBeenCalledWith(tabs[1]);
    });

    test('Does not call onTabClick if the clicked tab is active', () => {
        render(
            <Tabs tabs={tabs} value={tabs[0].value} onTabClick={onTabClick} />,
        );

        waitFor(() => {
            fireEvent.click(screen.getByText(tabs[0].content));
            expect(onTabClick).not.toHaveBeenCalled();
        });
    });
});
