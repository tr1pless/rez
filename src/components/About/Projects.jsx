import date from './projects.json'
import React, { useEffect, useState } from 'react'
import s from './about.module.css'

export const Projects = () => {
  const [project, setProject] = useState([])
  const projects = [...date.projects]
  const [active, setActive] = useState(false)
  let i = 0

  const findProject = (e) => {
    const result = projects.filter((item) => +item.id === +e.target.id)
    setProject([result])
    setActive(true)
    console.log(active)
  }
  return (
    <div className={s.projectContainer}>
      <div className={s.projectsNav}>
        {projects.map((item) => (
          <button
            key={i++}
            onClick={(e) => findProject(e)}
            id={`${item.id}`}
            className={s.projectsNavBtn}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div
        className={
          active !== true
            ? `${s.projectItemWrp} ${s.hidden}`
            : `${s.projectItemWrp} ${s.active}`
        }
      >
        {project.length !== 0
          ? project.map((item) => {
              return (
                <div className={s.projectItem} key={i + 100}>
                  <h2 className={s.projectItemTitle}>{item[0].title}</h2>
                  <img
                    className={s.projectItemImg}
                    width='300px'
                    height='130px'
                    src={item[0].img}
                    alt={item[0].title}
                  />
                  <p className={s.projectItemText}>{item[0].description}</p>
                  <p className={s.projectItemText}>Stack:{item[0].stack}</p>
                  <a className={s.projectItemLink} href={item[0].url}>
                    {item[0].title}
                  </a>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}
