import React, { useState, useContext } from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import GithubContext from '../store/index'
function Search() {
  const { searchGithubUser } = useContext(GithubContext)
  const [search, setSearch] = useState('')
  const searchHandler = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = () => {
    if (search !== '') {
      searchGithubUser(search)
    } else {
      alert('Input is empty !!')
    }
  }
  return (
    <Box mt={4} p={2} display='flex'>
      <InputGroup size='lg' shadow='lg'>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          size='lg'
          border='none'
          fontSize={{ base: '0.89rem', md: '1.2rem', lg: '1.5rem' }}
          placeholder='Search github username ..'
          onChange={(e) => searchHandler(e)}
        />
        <InputRightElement width='auto'>
          <Button
            fontSize={{ base: '1rem', md: '1.2rem', lg: '1.5rem' }}
            fontWeight={500}
            mr={1}
            px='4'
            size='md'
            onClick={() => handleSubmit()}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default Search
