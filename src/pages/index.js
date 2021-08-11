import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Button } from 'gatsby-theme-material-ui'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Paper>
      <SEO title="Home" keywords={['Podcast', 'Bunch of Emmas']} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h1">Site Under Construction</Typography>
        <Typography variant="subtitle1">Come Back Later!</Typography>
        <Button color="primary" to="/404" aria-label="Go Home">
          Go Home
        </Button>
      </Box>
    </Paper>
  )
}

export default IndexPage
