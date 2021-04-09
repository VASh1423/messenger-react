import React from 'react'
import {connect} from 'react-redux'

import { profileLoadAction } from '../actions/profile'
import { Profile } from '../pages/Profile'

class ProfileContainerClass extends React.Component{
  componentDidMount(){
    this.props.profileLoadAction()
  }

  render(){
    const {profile, isLoading, isError} = this.props
    return <Profile data={profile} isLoading={isLoading} isError={isError}/>
  }
}

function mapStateToProps(state){
  const profile = state.profile.entries
  return {
    profile,
    isLoading: state.profile.loading,
    isError: state.profile.error,
  }
}

function mapDispatchToProps(dispatch){
  return {
    profileLoadAction: () => dispatch(profileLoadAction()),
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass)