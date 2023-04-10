import styles from './Hero.module.css'

const Hero: React.FC = (props) => {

    return (
        <div className={styles.hero}>
            <h1>Enrique Ansa</h1>
            <h2><span>Full Stack Web</span><br /><span>Developer</span><br /><span> </span><br /><span> </span></h2>
        </div>
    )
}

export default Hero