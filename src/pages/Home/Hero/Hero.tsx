import styles from './Hero.module.css'

const Hero: React.FC = (props) => {

    return (
        <div className={styles.hero}>
            <h1>Enrique Ansa</h1>
            <h2><span>Desarrollador</span><br /><span>Full Stack</span><br /><span>JavaScript</span><br /><>Trainee</></h2>
        </div>
    )
}

export default Hero