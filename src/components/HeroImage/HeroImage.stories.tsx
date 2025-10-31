import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    disabled: false,
    src: 'https://placehold.co/1200x400',
    alt: 'Hero Image',
    title: 'Welcome!',
    subtitle: 'This is the way',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    src: 'https://placehold.co/1200x400',
    alt: 'Disabled Hero Image',
    title: 'Disabled Welcome!',
    subtitle: 'Disabled This is the way',
  },
};

export const WithoutText: Story = {
  args: {
    disabled: false,
    src: 'https://placehold.co/1200x400',
    alt: 'Hero Image With no Text',
  },
};
