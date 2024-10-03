import React from 'react'
import SkillCard from '../components/Card/SkillCard'
import Title from '../components/Title/Title'
import SubTitle from '../components/Title/SubTitle'

const Skills = () => {
  return (
    <>
      <Title text="Welcome to Skills Page!"/>
      <SubTitle text="Skills are the expertise and knowledge required to perform tasks
                      effectively and efficiently in a specific domain or field."/>
      <SkillCard/>
    </>
  )
}

export default Skills