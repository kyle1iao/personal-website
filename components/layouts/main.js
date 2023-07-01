import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'
import Head from 'next/head'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'
import Loader from '../voxel-loader'
import Footer from '../footer.js'

const LazyVoxelArt = dynamic(() => import('../voxel-art.js'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children }) => {
  const router = useRouter()
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kyle Liao - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelArt />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
