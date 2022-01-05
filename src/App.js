import React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Main from './components/layout/Main'
import Header from './components/Header'
import Search from './components/Search'
import Github from './components/Github'

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW='container.md' align='center'>
        <Main>
          <Header />
          <Search />
          <Github />
        </Main>
      </Container>
    </ChakraProvider>
  )
}

export default App
