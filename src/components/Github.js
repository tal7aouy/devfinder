import React, { useContext } from 'react'
import GithubContext from '../store/index'
import {
  Image,
  Grid,
  Container,
  Heading,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Link,
} from '@chakra-ui/react'
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa'
import { AiOutlineLink, AiOutlineTwitter } from 'react-icons/ai'
function Github() {
  const { userInfo } = useContext(GithubContext)
  if (Object.keys(userInfo).length === 0) {
    return (
      <Heading mt={4} as='h5' size='sm' color='blue.500'>
        Search for a github user!!
      </Heading>
    )
  }
  return (
    <Container my={6} p={6} rounded='lg'>
      <Grid
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={1}>
          <Image borderRadius='full' boxSize='80px' src={userInfo.avatar_url} />
        </GridItem>
        <GridItem
          colSpan={2}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='flex-start'
        >
          <Heading textAlign='left' as='h5' size='sm'>
            {userInfo.name}
          </Heading>
          <Heading color='blue.500' as='h6' size=''>
            @{userInfo.login}
          </Heading>
        </GridItem>
        <GridItem
          colSpan={2}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <p>Joined {userInfo.created_at?.split('T')[0]}</p>
        </GridItem>
        <GridItem colSpan={4}>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Repos</Th>
                <Th>Followers</Th>
                <Th>Following</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{userInfo.public_repos}</Td>
                <Td>{userInfo.followers}</Td>
                <Td>{userInfo.following}</Td>
              </Tr>
            </Tbody>
          </Table>
        </GridItem>
        <GridItem
          colSpan={2}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Box fontSize='.8rem' mb={2} display='flex' width='100%'>
            <FaMapMarkerAlt />
            &nbsp;&nbsp;<p>{userInfo.location}</p>
          </Box>
          <Box mt={2} display='flex' width='100%'>
            <AiOutlineLink />
            &nbsp;&nbsp;
            <Link fontSize='.8rem' href={userInfo.blog} isExternal>
              {userInfo.blog}
            </Link>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          display='flex'
          flexDirection='column'
          justifyContent='flex-end'
          alignItems='center'
        >
          <Box fontSize='.8rem' mb={2} display='flex' width='100%'>
            <FaBuilding />
            &nbsp;&nbsp;<p>{userInfo.company}</p>
          </Box>
          <Box mt={2} display='flex' width='100%'>
            <AiOutlineTwitter />
            &nbsp;&nbsp;
            <Link fontSize='.8rem' href={userInfo.twitter_username} isExternal>
              {userInfo.twitter_username}
            </Link>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Github
