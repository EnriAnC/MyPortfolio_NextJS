import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Navbar.module.css'

const Navbar: React.FC = (props) => {
    // const router = useRouter();
  
    return (
      <div className={ styles.nav }>         
        <Link className={ styles.Link } href="/Home/Home" as={`/`}>Home</Link>
      
        <Link className={ styles.Link } href="/About/About" as={`/about`}>About</Link>
      
        <Link className={ styles.Link } href="/Projects/Projects" as={`/projects`}>Projects</Link>        
      </div>
    );
  };
  
export default Navbar