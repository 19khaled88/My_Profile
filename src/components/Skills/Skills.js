import React from 'react'
import '../../CSS/skills.css'

import { design, skillSet, tools } from '../../data/data'
const Skills = () => {
  return (
    <div className="skillContainer">
      <h1>Core Skills that I belong to</h1>
      <div className="coreSkill">
        <h3>Core Skills</h3>
        <div>
          {skillSet.map((skills) => (
            <span key={skills.id}>
              <img
                src={skills.image}
                alt="No Image"
                width="30px"
                height="30px"
              />
              <p>{skills.name}</p>
            </span>
          ))}
        </div>
      </div>
      <div className="uiSkill">
        <h3>UI Skills</h3>
        <div className="hexaContainer">
          {design.map((design) => (
            <div key={design.id} className="hexagon">
              <p className="text">{design.title}</p>
              <div className="shape">
                <img
                  src={design.image}
                  alt="No Image"
                  width="100px"
                  height="100px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Tools">
        <h3>Tools</h3>
        <ul className="item">
          {tools.map((item) => (
            <li key={item.id}>
              <p className="title">{item.title}</p>
              <span>
                <img
                  className="img"
                  src={item.image}
                  alt="No Image"
                  width="35px"
                  height="35px"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
