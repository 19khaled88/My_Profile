import React from 'react'
import '../../CSS/project.css'
import { projects } from '../../data/data'
const Projects = () => {
  return (
    <div className="projectContainer">
      <h1>My Projects</h1>

      <div className="projects">
        {projects.map((item) => (
          <div
            key={item.id}
            className="card w-auto h-auto bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                height="100%"
              />
            </figure>
            <div className="card_body">
              <h1>
                <span>Project</span> : {item.name}
              </h1>
              <h1>
                <span className="technologies">Technologies</span> :{' '}
                {item.technologies.map((e, index) => (
                  <p key={index}>{e}</p>
                ))}
              </h1>

              <div className="link-btn">
                <span className="card-link">
                  <a href={item.live} className="badge badge-secondary cta">
                    <span className="live">Live</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                  <a href={item.ui_github} className="badge badge-secondary">
                    <img
                      src="/github.png"
                      alt="no image"
                      width="20px"
                      height="20px"
                    />
                    -UI
                  </a>
                  <a
                    href={item.server_github}
                    className="badge badge-secondary"
                  >
                    <img
                      src="/github.png"
                      alt="no image"
                      width="20px"
                      height="20px"
                    />
                    -Server
                  </a>
                </span>

                <button className="card-actions readbutton justify-end">
                  <p className="">Read More</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
