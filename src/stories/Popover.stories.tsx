import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Popover } from 'ui';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text' },
    open: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  //args: { children: 'Button', onClick: fn() },
  //args: {  onClick: fn() },

} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const Controlled: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    open: false,
    children: 'Label',
  },
  render: function Render(args) {
    const [opened, setOpened] = useState(args.open ?? false);

    return (
      <div style={{padding: "32px"}}>
        <div style={{marginBottom: "16px"}}>
            This is some text outside of the popover. Click the button below to open the popover.
        </div>
        <Button onClick={() => setOpened(true)}>Open Popover</Button>
        <Popover open={opened} onOpenChange={setOpened}>
            <div>
                 <div style={{marginBottom: "16px"}}>
                    This is the content of the popover.
                </div>
                <Button onClick={() => setOpened(false)}>Close Popover</Button>
            </div>
        </Popover>    
      </div>
       
        
    );
  },
};



