import React from 'react'
import {connect} from 'react-redux'

import { ProfileLoadAction } from '../actions/profile'
import { Profile } from '../pages/Profile'

class ProfileContainerClass extends React.Component{
  componentDidMount(){
    this.props.ProfileLoadAction()
  }

  render(){
    const {profile} = this.props
    return <Profile data={profile}/>
  }
}

function mapStateToProps(state){
  const profile = state.profile.entries
  return {
    profile
  }
}

function mapDispatchToProps(dispatch){
  return {
    ProfileLoadAction: () => dispatch(ProfileLoadAction()),
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass)