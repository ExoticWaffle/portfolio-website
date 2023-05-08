import {React, useState} from 'react'
import {Stack, Button} from '@mui/material'
import './ProjectCard.css'

function ProjectCard(props) {
  const [hover, setHover] = useState(false);
  return (
    <div 
      style={{backgroundImage: `url(${props.image})`}} 
      className="card-container" 
      onClick={window.innerWidth <= 960 ? () => setHover(!hover) : ""} 
      onMouseOver={() => setHover(true)} 
      onMouseOut={() => setHover(false)}
    >
    <Stack className={hover ? "info-container" : "info-container hidden"} direction="column" justifyContent="space-between">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <Stack direction="row" justifyContent="center" spacing={5}>
              {props.codeLink!='' ? <a className="card-button" href={props.codeLink}>View Code</a> : ""}
              {props.liveLink!='' ? <a className="card-button" href={props.liveLink}>View Live Product</a> : ""}
              {props.pdfLink!='' ? <a className="card-button" href={props.pdfLink}>View PDF</a> : ""}
          </Stack>
      </Stack>
    </div>
  )
}

export default ProjectCard;