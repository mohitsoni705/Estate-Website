import React from 'react'
import projectCards from "../api/projectCards.json"
import ProjectCard from '../components/ProjectCard'
const Project = () => {
  return (
    <div className='container-project'>
           <div className="about">
            <div className='flex-row'>
            <h1>Projects</h1>
            <p className='underline'>Completed</p>
           </div>
           <div>
           <p className='about-para'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
        </div>
      </div>
      <div className="project-cards">
        {projectCards.map((curElem)=>{
          return(
            <ProjectCard key={curElem.id} {...curElem}/>
          )
        })}
      </div>
    </div>
  )
}

export default Project
