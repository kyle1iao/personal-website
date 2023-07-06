import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbPokemon from '../public/images/pokemon-wallpaper.jpg'
import thumbSketch from '../public/images/etchasketch.jpg'
import thumbSpotify from '../public/images/spotify.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="pokemon-models"
              title="Pokemon Models"
              thumbnail={thumbPokemon}
            >
              Deep learning models for classification on Pokemon images
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="spotify-clone"
              title="Full Stack Spotify Clone"
              thumbnail={thumbSpotify}
            >
              Fully functional app for storing and playing your favorite songs
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="etch-a-sketch"
              title="Etch A Sketch"
              thumbnail={thumbSketch}
            >
              Digital app for drawing 2D pixel images in browser
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
