import React from 'react'
import '../../CSS/home.css'
import Achievement from '../Achievement/Achievement'
import Hero from '../Hero/Hero'
import Layout from '../Layout/Layout'
import Particle from '../Particle/Particle'

import Projects from '../Projects/projects'

import Skills from '../Skills/Skills'
import Test from '../Test/test'
const Home = () => {
  return (
    <div className="Home">
      <Layout>
        <Particle />
        <Skills />
        <Projects />
      { /* <Skill />
        <Projects /> */}
       <Achievement />
      
      </Layout>
    </div>
  )
}

export default Home
