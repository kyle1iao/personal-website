import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Etch a Sketch">
      <Container>
        <Title>
          Etch a Sketch <Badge>2023</Badge>
        </Title>
        <P>Digital app for drawing 2D pixel images in browser.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://kyle7iao.github.io/Etch-a-sketch/">
              https://kyle7iao.github.io/Etch-a-sketch/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Thumbnail</Meta>
            <Link href="https://www.thisiswhyimbroke.com/famous-art-etch-a-sketch/">
              https://www.thisiswhyimbroke.com/famous-art-etch-a-sketch/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML/CSS/JavaScript</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/kirbyetch.png" alt="Code" />
      </Container>
    </Layout>
  )
}

export default Work
