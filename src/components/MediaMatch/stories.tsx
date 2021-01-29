import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch, { MediaMatchProps } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story<MediaMatchProps> = (args) => (
  <MediaMatch {...args} greaterThan="medium">
    Only on Desktop
  </MediaMatch>
)

export const Mobile: Story<MediaMatchProps> = (args) => (
  <MediaMatch {...args} lessThan="medium">
    Only on Mobile
  </MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
