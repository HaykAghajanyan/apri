import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from "react";

import {setUserName, userNameSelector} from '../../redux/slices/userProfileSlice'
import {userProfileThunk} from "../../redux/thunks/userProfileThunk";

const UserProfile = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(userNameSelector)

  useEffect(() => {
    dispatch(userProfileThunk())
  }, [dispatch])


  return (
    <div>
      <input value={userInfo} onChange={e => dispatch(setUserName(e.target.value))} type="text"/>
      <div>{userInfo}</div>
    </div>
  )
}

export default UserProfile
