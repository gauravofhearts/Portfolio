import React from 'react'
import './SubTitle.css';

const SubTitle = (props) => {
  return (
    <>
        <h1 className="subtitle-text">{props.text}</h1>
    </>
  )
}

export default SubTitle