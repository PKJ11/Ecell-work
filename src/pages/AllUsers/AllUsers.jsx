import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash/MainDash'

const AllUsers = () => {
  return (
    <div className="AppGlass">
      <Sidebar/>
      <MainDash heading="All Users "></MainDash>
    </div>
  )
}

export default AllUsers
