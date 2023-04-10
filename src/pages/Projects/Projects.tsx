import ProjectCard from "./ProjectCard/ProjectCard"
import styles from './Projects.module.css'

const Projects: React.FC = ()=>{
    return (
        <div className={ styles.projects }>
            <h2>from Projects</h2>
            <ProjectCard />
        </div>
    )
}

export default Projects