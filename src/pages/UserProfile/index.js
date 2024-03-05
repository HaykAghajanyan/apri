import { useDispatch, useSelector } from 'react-redux'
import {useState} from "react";

import {setUserName, userNameSelector} from '../../redux/slices/userProfileSlice'

const UserProfile = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(userNameSelector)


  return (
    <div>
      <input value={userInfo} onChange={e => dispatch(setUserName(e.target.value))} type="text"/>
      <div>{userInfo}</div>
    </div>
  )
}

export default UserProfile
