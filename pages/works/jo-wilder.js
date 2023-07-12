import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Jo Wilder">
      <Container>
        <Title>
          Jo Wilder Models <Badge>2023</Badge>
        </Title>
        <P>
          Machine learning models for predicting performance in the video game
          "Jo Wilder and the Capitol Chase." This was a final project completed
          for CIS 5450: Big Data Analytics at Penn. Models include logistic
          regression, random forest, and click-embedding XGBoost. See website
          for full notebook.{' '}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/kyle1iao/Jo-Wilder-Predictions">
              https://github.com/kyle1iao/Jo-Wilder-Predictions
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Thumbnail</Meta>
            <Link href="https://pbswisconsineducation.org/jowilder/play-the-game/">
              https://pbswisconsineducation.org/jowilder/play-the-game/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>N/A</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Scikit-Learn, PyTorch, Pandas, Matplotlib, Seaborn</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/jo-wilder-01.png" alt="Code" />
      </Container>
    </Layout>
  )
}

export default Work
