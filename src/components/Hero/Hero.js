import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import '../../CSS/hero.css'
const Hero = () => {
  return (
    <div className="Hero">
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
          Javascirpt is my favourite language when it comes to develope web
          applications. I have strong fascination with React.js and Node.js when
          I use to implement mongodb database for my projects. My next goal is
          to get skilled in web3 technology and wordpress.
        </p>
        <div>
          <input type="text" placeholder="Type your email address"></input>
          <button>Mail Me</button>
        </div>
      </div>
      <div>
        <div className="circle">
          <img src="/hero.png" alt="No image" width="200px" height="200px" />
          <img src="/programming.png" alt="No Image" />
          <img src="/code.png" alt="No Image" />
          <img src="/binary-code.png" alt="No Image" />
          <img src="/cloud.jpg" alt="No Image" />
        </div>
        {/*<div>
          <img src="/reactjs.jpg" alt="No Image" />
          <img src="/nodejs.png" alt="No Image" />
          <img src="/redux.jpg" alt="No Image" />
          <img src="/graphql.png" alt="No Image" />
          </div>*/}
      </div>
    </div>
  )
}

export default Hero
