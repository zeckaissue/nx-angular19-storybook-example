import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Repro/HTML',
};

export default meta;
type Story = StoryObj;

export const Button: Story = {
  render: () => ({
    template: `
      <button class="bg-test p-2 text-white">
        plain angular button
      </button>
    `,
  }),
};
