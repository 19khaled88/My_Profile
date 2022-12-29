import React from 'react'
import '../../CSS/project.css'
const Projects = () => {
  return (
    <div className="Projects">
      <h1>My Projects</h1>
      <div className="Mainproject">
        <div class="card w-auto h-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              height="100%"
            />
          </figure>
          <div class="card-body">
            <span>
              <p>#ReactJS #NodeJS</p>
              <p>Visited: 3 times</p>
            </span>
            <h1>Prject Name</h1>
            <div>
              <span class="card-actions justify-start">
                <p class="badge badge-secondary">NEW</p>
              </span>

              <span class="card-actions justify-end">
                <p class="badge badge-outline">Read More</p>
              </span>
            </div>
          </div>
        </div>
        <div class="card w-auto h-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              height="100%"
            />
          </figure>
          <div class="card-body">
            <span>
              <p>#ReactJS #NodeJS</p>
              <p>Visited: 3 times</p>
            </span>
            <h1>Prject Name</h1>
            <div>
              <span class="card-actions justify-start">
                <p class="badge badge-secondary">NEW</p>
              </span>

              <span class="card-actions justify-end">
                <p class="badge badge-outline">Read More</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="Secondaryproject">
        <div class="card w-64  bg-base-100 shadow-xl">
          <figure class="px-2 pt-2">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <span>
              <p>#ReactJS #NodeJS</p>
              <p>Visited: 3 times</p>
            </span>
            <h2 class="card-title">Project name</h2>
            <div class="card-actions">
              <img src="/icon.png" alt="No Image" width="30" height="30" />
              <button class="btn btn-sm btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div class="card w-64 bg-base-100 shadow-xl">
          <figure class="px-2 pt-2">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <span>
              <p>#ReactJS #NodeJS</p>
              <p>Visited: 3 times</p>
            </span>
            <h2 class="card-title">Project name</h2>
            <div class="card-actions">
              <img src="/icon.png" alt="No Image" width="30" height="30" />
              <button class="btn btn-sm btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div class="card w-64 bg-base-100 shadow-xl">
          <figure class="px-2 pt-2">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <span>
              <p>#ReactJS #NodeJS</p>
              <p>Visited: 3 times</p>
            </span>
            <h2 class="card-title">Project name</h2>
            <div class="card-actions">
              <img src="/icon.png" alt="No Image" width="30" height="30" />
              <button class="btn btn-sm btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
