import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Pokemon Models">
      <Container>
        <Title>
          Pokemon Models <Badge>2023</Badge>
        </Title>
        <P>Deep learning models for classification on Pokemon images.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/kyle1iao/Pokemon-Models">
              https://github.com/kyle1iao/Pokemon-Models
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Thumbnail</Meta>
            <Link href="https://www.pokebeach.com/2022/06/winners-announced-for-2022s-pokemon-tcg-illustration-contest">
              https://www.pokebeach.com/2022/06/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>N/A</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Tensorflow, Keras, Pandas, Matplotlib, Seaborn</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/pokemon-models_01.png" alt="Code" />
      </Container>
    </Layout>
  )
}

export default Work
