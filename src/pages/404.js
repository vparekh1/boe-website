import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Button } from 'gatsby-theme-material-ui'
import SEO from '../components/seo'

const NotFoundPage = () => {
  return (
    <Paper>
      <SEO title="Page Not Found" keywords={['Podcast', 'Bunch of Emmas']} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4">Not Found</Typography>
        <Typography variant="subtitle1">Error 404</Typography>
        <Button color="secondary" to="/" aria-label="Go Home">
          Go Home
        </Button>
      </Box>
    </Paper>
  )
}

export default NotFoundPage
