import React from 'react'
import '../../CSS/home.css'
import Hero from '../Hero/Hero'
import Layout from '../Layout/Layout'

import Projects from '../Projects/projects'
import Skill from '../Skills/Skill'
const Home = () => {
  return (
    <div className="Home">
      <Layout>
        <Hero />
        <Skill />
        <Projects />
      </Layout>
    </div>
  )
}

export default Home
