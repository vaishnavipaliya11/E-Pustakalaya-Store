import React from 'react'
import { useAuth } from '../../Context/authContext'

export const UserProfile = () => {
    const {authUser,auth}= useAuth()
    console.log(authUser);
  return (
    <div>UserProfile</div>
  )
}
