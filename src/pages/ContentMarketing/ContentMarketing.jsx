import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash/MainDash'
import Calender from '../../components/Calender'

const ContentMarketing = () => {
  return (
    <div className='AppGlass'>
      <Sidebar/>
      <MainDash heading= "Content Mrketing"/>
      <Calender/>
    </div>
  )
}

export default ContentMarketing
