import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from '@storybook/test';
import Hero from '../components/hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main heading text for the hero section',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle text describing the company or service',
    },
    ctaText: {
      control: 'text',
      description: 'Text for the call-to-action button',
    },
    onCtaClick: {
      action: 'clicked',
      description: 'Function called when the CTA button is clicked',
    },
  },
  args: {
    onCtaClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    title: "Invest in Your Future",
    subtitle: "Build wealth with our proven investment strategies and expert financial guidance. Start your journey to financial freedom today.",
    ctaText: "Start Investing",
  },
};

export const ShortContent: Story = {
  args: {
    title: "Lumen Capital",
    subtitle: "Smart investments, brighter future.",
    ctaText: "Learn More",
  },
};

export const AlternativeAction: Story = {
  args: {
    title: "Ready to Get Started?",
    subtitle: "Join thousands of satisfied clients who trust Lumen Capital with their financial future.",
    ctaText: "Schedule Consultation",
  },
};
