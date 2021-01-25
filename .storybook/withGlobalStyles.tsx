import {StoryFn} from '@storybook/addons'
import GlobalStyles from '../src/styles/global'
import {ThemeProvider} from 'styled-components'
import theme from '../src/styles/theme'

const withGlobalStyles = (storyFn: StoryFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

export default withGlobalStyles
