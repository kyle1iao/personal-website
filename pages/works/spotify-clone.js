import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Spotify Clone">
      <Container>
        <Title>
          Full Stack Spotify Clone <Badge>2023</Badge>
        </Title>
        <P>
          Fully functional app for storing and playing your favorite songs.
          Supports authentication, song upload, favorites, and more.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://spotify-clone-eta-murex.vercel.app/">
              https://spotify-clone-eta-murex.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Thumbnail</Meta>
            <Link href="https://open.spotify.com/">
              https://open.spotify.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Supabase, PostgreSQL, Tailwind CSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/spotify-clone-ss.png" alt="Code" />
      </Container>
    </Layout>
  )
}

export default Work
