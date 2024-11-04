import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button',
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: 'clear',
    },
};

export const Accent: Story = {
    args: {
        children: 'Text',
        theme: 'accent',
    },
};

export const Inverted: Story = {
    args: {
        children: 'Text',
        theme: 'inverted',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
    },
};

export const OutlineAccent: Story = {
    args: {
        children: 'Text',
        theme: 'outlineAccent',
    },
};

export const HalfRadiusOutline: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        radius: 'halfRadius',
    },
};

export const MRadiusOutline: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        radius: 'mRadius',
    },
};

export const LRadiusOutline: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        radius: 'lRadius',
    },
};

export const XSSize: Story = {
    args: {
        children: 'Text',
        size: 'size_xs',
    },
};

export const SSize: Story = {
    args: {
        children: 'Text',
        size: 'size_s',
    },
};

export const MSize: Story = {
    args: {
        children: 'Text',
        size: 'size_m',
    },
};

export const LSize: Story = {
    args: {
        children: 'Text',
        size: 'size_l',
    },
};

export const XLSize: Story = {
    args: {
        children: 'Text',
        size: 'size_xl',
    },
};

export const OpacityEffectAccent: Story = {
    args: {
        children: 'Text',
        theme: 'accent',
        effect: 'opacityEffect',
    },
};

export const ScaleEffectAccent: Story = {
    args: {
        children: 'Text',
        theme: 'accent',
        effect: 'scaleEffect',
    },
};

export const SquareAccentXL: Story = {
    args: {
        children: '<',
        theme: 'accent',
        size: 'size_xl',
        square: true,
    },
};

export const DisabledAccentXL: Story = {
    args: {
        children: 'Text',
        theme: 'accent',
        disabled: true,
        size: 'size_xl',
    },
};

export const MaxAccentXL: Story = {
    args: {
        children: 'Text',
        theme: 'accent',
        max: true,
        size: 'size_xl',
    },
};
