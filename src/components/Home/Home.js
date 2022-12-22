import React from 'react'
import '../../CSS/home.css'
import Hero from '../Hero/Hero'
import Layout from '../Layout/Layout'
import Skill from '../Skills/Skill'
const Home = () => {
  return (
    <div className="Home">
      <Layout>
        <Hero />
        <Skill />
      </Layout>
    </div>
  )
}

export default Home
