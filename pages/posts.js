import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPlaceholder from '../public/images/placeholder.jpg'

// const Posts = () => (
//   <Layout title="Posts">
//     <Container>
//       <Heading as="h3" fontSize={20} mb={4}>
//         Posts
//       </Heading>

//       <Section delay={0.1}>
//         <SimpleGrid columns={[1, 2, 2]} gap={6}>
//           <GridItem
//             title="Placeholder"
//             thumbnail={thumbPlaceholder}
//             href="404"
//           />
//           <GridItem
//             title="Placeholder"
//             thumbnail={thumbPlaceholder}
//             href="404"
//           />
//         </SimpleGrid>
//       </Section>
//     </Container>
//   </Layout>
// )

const Posts = () => {
  return (
    <Container>
      <Heading as="h1">Page does not exist... yet.</Heading>
      <Text>The page you are looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="green">
          Return home
        </Button>
      </Box>
    </Container>
  )
}

export default Posts
