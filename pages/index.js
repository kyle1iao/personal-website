import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import React from 'react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I am a student interested in data and applications of tech!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kyle Liao
            </Heading>
            <p>Student ( CS & Bio )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/profile.png"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am currently a student at the University of Pennsylvania pursuing
            an undergraduate degree in computer science and biology as well as
            an accelerated masters in data science. This summer, I am working as
            a data science intern at AstraZeneca, developing NLP models.
          </Paragraph>

          <Box align="center" my={6}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in New Jersey
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Moved to Maryland
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated from Richard Montgomery High School and started studying
            biology at the University of Pennsylvania
          </BioSection>

          <BioSection>
            <BioYear>2022</BioYear>
            Began learning computer science and data science through coursework,
            extracurriculars, and online courses like CS50 and the Odin Project
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Submatriculated into the Master's Program in Data Science in Penn's
            School of Engineering and Applied Sciences
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Games, thrifting, volleyball/sports, data science, AI/ML, learning
            and trying new things
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/kyle1iao" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @kyle1iao
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.instagram.com/kyle1iao/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @kyle1iao
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/kyle-liao/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @kyle-liao
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
