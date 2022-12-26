import React from 'react'
import '../../CSS/home.css'
import Hero from '../Hero/Hero'
import Layout from '../Layout/Layout'
import Particle from '../Particle/Particle'

import Projects from '../Projects/projects'
import Skill from '../Skills/Skill'
import Test from '../Test/test'
const Home = () => {
  return (
    <div className="Home">
      <Layout>
        <Hero />
        <Skill />
        <Projects />
        <Test />
        <Particle />
      </Layout>
    </div>
  )
}

export default Home
