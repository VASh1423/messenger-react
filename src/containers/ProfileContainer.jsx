import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { profileLoadAction } from '../actions/profile'
import { Profile } from '../pages/Profile'

export const ProfileContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(profileLoadAction())
  }, [])
  
  const profile = useSelector((state) => state.profile.entries)
  const [isLoading,  isError] = useSelector((state) => [state.profile.loading, state.profile.error])

  return <Profile data={profile} isLoading={isLoading} isError={isError}/>

}