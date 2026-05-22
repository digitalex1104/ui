import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Heading',
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
  },
  
  args: {  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Level1: Story = {
  args: {
    label: 'Heading',
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    label: 'Heading',
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    label: 'Heading',
    level: 3,
  },
};

export const Level4: Story = {
  args: {
    label: 'Heading',
    level: 4,
  },
};

export const Level5: Story = {
  args: {
    label: 'Heading',
    level: 5,
  },
};

export const Level6: Story = {
  args: {
    label: 'Heading',
    level: 6,
  },
};
