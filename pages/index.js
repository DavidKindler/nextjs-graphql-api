import React from 'react'
import axios from 'axios'

const query = `{ hello }`

const App = props => (
  <>
    <h1>Initial props returned from graphql server:</h1>
    <h2>{props.hello}</h2>
  </>
)

App.getInitialProps = async () => {
  const response = await axios.post(`${process.env.API_URL}/api/graphql`, {
    query
  })

  return { ...response.data.data }
}

export default App
