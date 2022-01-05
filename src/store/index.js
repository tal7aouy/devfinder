import { createContext, useState } from 'react'
import axios from 'axios'
const GithubContext = createContext({
  userInfo: {},
  searchGithubUser: (username) => {},
})

export const GithubContextProvider = ({ children }) => {
  const [info, setInfo] = useState({})

  const searchGithubUser = (username) => {
    try {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.status === 200) setInfo(response.data)
          else alert("you've unsuccess request")
        })
        .catch((err) => console.log(err))
    } catch (error) {
      console.error(error)
    }
  }

  const context = {
    userInfo: info,
    searchGithubUser: searchGithubUser,
  }
  return (
    <GithubContext.Provider value={context}>{children}</GithubContext.Provider>
  )
}

export default GithubContext
