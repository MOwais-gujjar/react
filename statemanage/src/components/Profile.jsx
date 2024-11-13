import React, {useContext} from 'react'

import UserContext from '../context/UserContext'

const Profile = () => {

    const { data } = useContext(UserContext);

  if(!data) return <div> Login First </div>

  return (
    <>
    <h1>Welcome {data.username}</h1>
    <h2> Password {data.password}</h2>
    </>
  )
}

export default Profile