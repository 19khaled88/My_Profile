import React from 'react';
import '../../CSS/skills.css'
import { skillSet,tools,design} from '../../data/data'
const Skills = () => {
  return (
    <div className='skillContainer'>
      <div className='coreSkill'>
        <h3>Core Skills</h3>
        <div>
          {
            skillSet.map((skills)=>(
                <span>
                <img src={skills.image} alt="No Image" width="30px" height="30px" />
                <p>{skills.name}</p>
                </span>
            ))
          }
        </div>
      </div>
      <div className='uiSkill'>
        <h3>UI Skills</h3>
        <div className='hexaContainer'>
            {
                design.map((design)=>(
                    <div className='hexagon'>
                        <p className='text'>{design.title}</p>
                        <div className='shape'>
                            
                            <img src={design.image} alt="No Image" width="100px" height="100px"/>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    
      <div className='Tools'>
        <h3>Tools</h3>
      </div>
    </div>
  );
}

export default Skills;
