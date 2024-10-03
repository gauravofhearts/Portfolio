import React from 'react'
import ProjectCard from '../components/Card/ProjectCard'
import Title from '../components/Title/Title'
import SubTitle from '../components/Title/SubTitle'

const Portfollio = () => {
  return (
    <>
      <Title text="Welcome to Portfollio Page!"/>
      <SubTitle text="A collection of projects I've worked on."/>
      <ProjectCard/>
    </>
  )
}

export default Portfollio