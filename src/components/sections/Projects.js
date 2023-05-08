import React from 'react';
import ProjectCard from '../ProjectCard';
import Data from '../../data/ProjectData'
import Stack from '@mui/material/Stack'

function Projects(props) {
  return (
    <div className="section-container">
        <h1 className="section-title">My projects</h1>
        <p style={{textAlign: "center"}}>Hover over an image to see more...</p>
        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          {Data.map((project) => (
              <ProjectCard image={project.image} title={project.title} desc={project.desc}  codeLink={project.codeLink} liveLink={project.liveLink} pdfLink={project.pdfLink} />
          ))}
        </Stack>
    </div>
  )
}

export default Projects