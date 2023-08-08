import date from './projects.json'
import React, { useState } from 'react'
import s from './about.module.css'

export const Projects = () => {
  //   const [projects, setProjects] = useState([date.projects])
  const projects = [...date.projects]
  let i = 0
  return (
    <div className={s.projectsNav}>
      {/* <div className={s.projectsNav}> */}
      {projects.map((item) => (
        <button className={s.projectsNavBtn}>{item.title}</button>
      ))}
      {/* </div> */}
      {/* {projects.map((item) => ( */}
      {/* <div className={s.projectItem} key={i++}> */}
      {/* <h2>{item.title}</h2> */}
      {/* <img */}
      {/* className={s.projectImage} */}
      {/* src={item.img} */}
      {/* width={'300px'} */}
      {/* height={'150px'} */}
      {/* alt={item.title} */}
      {/* ></img> */}
      {/* <p>{item.description}</p> */}
      {/* <p>Stack:{item.stack}</p> */}
      {/* <a */}
      {/* className={s.projectLink} */}
      {/* target='_blank' */}
      {/* href={item.url !== '' ? item.url : '#'} */}
      {/* > */}
      {/* {item.title} */}
      {/* </a> */}
      {/* </div> */}
      {/* ))} */}
    </div>
  )
}
