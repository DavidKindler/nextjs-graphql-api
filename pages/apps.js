import React from 'react'
import axios from 'axios'

const query = `{ apps }`

const ListOfApps = props => (
  <>
    <h1>list of apps</h1>
    {props.apps.map(app => (
      <p key={app}>{app}</p>
    ))}
  </>
)

ListOfApps.getInitialProps = async () => {
  const response = await axios.post(`${process.env.API_URL}/api/graphql`, {
    query
  })

  return { ...response.data.data }
}

export default ListOfApps
