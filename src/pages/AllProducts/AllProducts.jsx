import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash/MainDash'

const AllProducts = () => {
  return (
    <div className="AppGlass">
        <Sidebar/>
        <MainDash heading="All Products"/>
        {/* <RightSide/> */}
      </div>
  )
}

export default AllProducts
