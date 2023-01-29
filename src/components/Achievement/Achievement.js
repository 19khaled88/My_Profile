import React from 'react'
import '../../CSS/achievement.css'
const Achievement = () => {
  const linkedIn = [
    {
      id: 1,
      title: 'Git',
      link: 'https://www.linkedin.com/skill-assessments/Git/report/',
      image: '/assessment/github.png',
    },
    {
      id: 2,
      title: 'Node.js',
      link: 'https://www.linkedin.com/skill-assessments/Node.js/report/',
      image: '/assessment/nodejs.png',
    },
    {
      id: 3,
      title: 'Front-End Development',
      link:
        'https://www.linkedin.com/skill-assessments/Front-End%20Development/report/',
      image: '/assessment/frontend.jpg',
    },
    {
      id: 4,
      title: 'CSS',
      link:
        'https://www.linkedin.com/skill-assessments/Cascading%20Style%20Sheets%20(CSS)/report/',
      image: '/assessment/css.png',
    },
    {
      id: 5,
      title: 'HTML',
      link: 'https://www.linkedin.com/skill-assessments/HTML/report/',
      image: '/assessment/html.png',
    },
    {
      id: 6,
      title: 'Javascript',
      link: 'https://www.linkedin.com/skill-assessments/JavaScript/report/',
      image: '/assessment/javascript.png',
    },
    {
      id: 7,
      title: 'React.js',
      link: 'https://www.linkedin.com/skill-assessments/React.js/report/',
      image: '/assessment/reactjs.png',
    },
  ]

  const linkedInSkill = (data) => {
    const array = []
    data.map((item) =>
      array.push(
        <span key={item.id}>
          <h4>
            <img src={item.image} alt="no image" width="20px" height="20px" />
            {item.title}
          </h4>
          <a href={item.link}> <button className="bubbly-button">Visit the link</button></a>
        </span>,
      ),
    )
    return array
  }

 


  return (
    <div className="achievement-container">
      <h1>My achievements</h1>

      <div className="certifications">
        <div className="cert">
          <h3>Microsoft certifications</h3>
          <span>
            <img src="/achievement/MCP.jpg" alt="No Image" />
          </span>
        </div>
        <div className="cert">
          <h3>Microsoft certifications</h3>
          <span>
            <img src="/achievement/MCSA.jpg" alt="No Image" />
          </span>
        </div>
      </div>


      <div className="linkedin-skills">
        <h5>Linked assessments tests(Achieved badges)</h5>
        <div>{linkedInSkill(linkedIn)}</div>
      </div>
    </div>
  )
}

export default Achievement
