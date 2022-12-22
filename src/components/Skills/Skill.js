import React from 'react'
import '../../CSS/skill.css'
const Skill = () => {
  const design = [
    {
      title: 'Bootstrap',
      image: '/skills/bootstrap.png',
    },
    {
      title: 'React Bootstrap',
      image: '/skills/react_bootstrap.png',
    },
    {
      title: 'Tailwind CSS',
      image: '/skills/tailwind_css.jpg',
    },
    {
      title: 'Material UI',
      image: '/skills/material_ui_icon.png',
    },
    {
      title: 'DaisyUI',
      image: '/skills/daisyUI.jpg',
    },
  ]
  return (
    <div className="skill">
      <h1>Core Skills that I belong to</h1>
      <div>
        <span>
          My expertise lies on Javascript, HTML, CSS, Reactjs, Nodejs, Redux,
          Graphql, Bootstrap, Tailwindcss, APIs,
        </span>
        <ul>
          <li>
            <img
              src="/skills/javascript_icon.png"
              alt="No Image"
              width="100px"
              height="100px"
            />

            <p>
              A lightweight, interpreted, or just-in-time compiled programming
              language.
            </p>
            <img src="/javascript.jpeg" alt="No Image" />
          </li>
          <li>
            <img
              src="/skills/node-js.png"
              alt="No Image"
              width="100px"
              height="100px"
            />
            <p>
              Node.js is an open-source and cross-platform JavaScript runtime
              environment.
            </p>
            <img src="/nodejs.png" alt="No Image" />
          </li>
          <li>
            <img
              src="/skills/react-js.png"
              alt="No Image"
              width="100px"
              height="100px"
            />
            <p>
              An open-source front-end JavaScript library for building user
              interfaces.
            </p>
            <img src="/reactjs.jpg" alt="No Image" />
          </li>
          <li>
            <img
              src="/skills/redux.png"
              alt="No Image"
              width="100px"
              height="100px"
            />
            <p>Redux is a predictable state container for JavaScript apps.</p>
            <img src="/redux.jpg" alt="No Image" />
          </li>
          <li>
            <img
              src="/skills/graphql.png"
              alt="No Image"
              width="100px"
              height="100px"
            />
            <p>GraphQL is a query language for APIs and a runtime.</p>
            <img src="/graphql.png" alt="No Image" />
          </li>
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
    </div>
  )
}

export default Skill
