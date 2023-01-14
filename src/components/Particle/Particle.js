import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'
import { TypeAnimation } from 'react-type-animation'
import '../../CSS/particle.css'
const Particle = () => {
  const settings = {
    particle: {
      particleCount: 50,
      color: '#fff',
      minSize: 1,
      maxSize: 4,
    },
    velocity: {
      minSpeed: 0.2,
      maxSpeed: 0.4,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000,
    },
  }
  return (
    <div className="Particle">
      <div>
        <div>
          <h3>Hello,</h3>
          <p>
          This is Md. Khaled Ahasan,a wanderful and commited full stack
          developer (MERN Stack)
          </p>
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'self-start',
            }}
          >
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                'Javascript',
                1000,
                'HTML',
                1000,
                'CSS',
                1000,
                'ReactJS',
                1000,
                'NodeJS',
                1000,
                'MongoDB',
                1000,
                'Redux-toolkit',
                1000,
                'GraphQL',
                1000,
              ]}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: '2em', fontWeight: 700, color: '#0daee4' }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </span>
          <p>
            Javascirpt is my favourit language for developing web application. I
            feel that Node.js is the best match with ReactJS. I love to develope
            web application with ReactJS in front end and Node js for back end.
          </p>
          <div>
            <input type="text" className='text' placeholder="Type your email address"></input>
            <button>Mail Me</button>
          </div>
        </div>
        <div>
          <div className="icons">
            <img  src="/programming.png" alt="No Image" />
            <img  src="/code.png" alt="No Image" />
          </div>
          <img src="/hero.png" alt="No image" />

          <div className="circular3">
            <img src="/circle.png" alt="No image" />
          </div>
          <div className="circular2">
            <img src="/circle.png" alt="No image" />
          </div>
        </div>
      </div>

      <ParticleBackground settings={settings} />
    </div>
  )
}

export default Particle
