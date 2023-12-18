import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash/MainDash'

const Home = () => {
  return (
    <div className="AppGlass">
        <Sidebar/>
        <MainDash heading="Home"/>
        {/* <RightSide/> */}
      </div>
  )
}

export default Home