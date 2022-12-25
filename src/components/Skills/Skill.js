import React from 'react'
import '../../CSS/skill.css'
import { design, skillSet, tools } from '../../data/data.js'
const Skill = () => {
  return (
    <div className="skill">
      <h1>Core Skills that I belong to</h1>
      <div>
        <span>
          My expertise lies on Javascript, HTML, CSS, Reactjs, Nodejs, Redux,
          Graphql, Bootstrap, Tailwindcss, APIs,
        </span>
        <ul>
          {skillSet.map((e, index) => (
            <li key={index}>
              <img src={e.image} alt="No Image" width="100px" height="100px" />
              <p>{e.name}</p>
              <img src={e.logo} alt="No Image" />
            </li>
          ))}
        </ul>
      </div>

      <div>
        {design.map((e) => (
          <div className="card w-44 h-32 bg-primary text-primary-content">
            <div className="body">
              <h2 className="card-title">{e.title}</h2>
            </div>
            <img src={e.image} alt="No Image" width="40px" height="40px" />
          </div>
        ))}
      </div>
      <div>
        <p>I love to use them</p>
        <div>
          {tools.map((e) => (
            <div>
              <img src={e.image} alt="No Image" width="60%" height="40%" />
              <h3>{e.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
