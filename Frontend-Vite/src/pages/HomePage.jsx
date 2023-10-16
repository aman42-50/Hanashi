import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
  const {user, authTokens} = useContext(AuthContext)
  console.log(authTokens)
  return (
    <div>
      <h1>
        Hello, World
      </h1>
    </div>
  )
}

export default HomePage
