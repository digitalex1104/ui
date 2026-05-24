import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Switch } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  //args: { children: 'Button', onClick: fn() },
  //args: {  onClick: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

/*
export const Active: Story = {
  args: {
    checked: true,
  },
};
*/

/*
export const Size: Story = {
  args: {
    
  },
   render: function Render(args) {
    return (
      <div style={{ display: 'grid', gap: '16px' }}>
        <Switch {...args} size="small">small</Switch>
        <Switch {...args} size="medium">medium</Switch>
        <Switch {...args} size="large">large</Switch>
   
        <Switch {...args} size="large"><span style={{fontSize: "32px"}}>large</span></Switch>
      </div>
    );
  },
};
*/

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledActive: Story = {
  args: {
    disabled: true,
    checked: true,  
  },
};

export const Controlled: Story = {
  args: {
    checked: false,
    children: 'Label',
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked ?? false);

    return (
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <Switch
          {...args}
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
        />
        <div>
          {checked ? 'checked' : 'not checked'}
         </div>
      </div>
    );
  },
};

