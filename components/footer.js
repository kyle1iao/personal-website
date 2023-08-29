import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {new Date().getFullYear()} Kyle Liao. Site inspired by{' '}
      <Link
        href="https://www.craftz.dog/"
        target="_blank"
        rel="noopener noreferrer"
        color="green"
      >
        craftzdog.
      </Link>
    </Box>
  )
}

export default Footer
