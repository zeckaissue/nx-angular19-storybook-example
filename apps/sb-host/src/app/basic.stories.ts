import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Repro/HTML',
};

export default meta;
type Story = StoryObj;

export const Button: Story = {
  render: () => ({
    template: `
      <button>
        plain angular button
      </button>
    `,
  }),
};
