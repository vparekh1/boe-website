// src/gatsby-theme-material-ui-top-layout/theme.js

import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      light: '#494949',
      main: '#222222',
      dark: '#000000',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff5db8',
      main: '#ff0088',
      dark: '#c6005b',
      contrastText: '#000'
    }
  }
})

export default theme
