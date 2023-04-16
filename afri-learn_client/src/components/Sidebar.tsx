import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import SubjectsList from './SubjectList'

const Sidebar = () => {
    const isTablet = useMediaQuery(`(min-width: 728px)`)
    console.log(isTablet)
  return (
    <>
      <SubjectsList />
    </>
  )
}

export default Sidebar
