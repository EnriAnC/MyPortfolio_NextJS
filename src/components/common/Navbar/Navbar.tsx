import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Navbar.module.css'

const Navbar: React.FC = (props) => {
    const router = useRouter();
  
    return (
      <nav className={ styles.nav }>         
        <Link className={ styles.Link } href="/Home/Home" as={`/`}>Home
          {/* <a className={router.pathname === "/" ? "active" : ""}>Home</a> */}
        </Link>
      
      
        <Link className={ styles.Link } href="/About/About" as={`/about`}>About
          {/* <a className={router.pathname === "/about" ? "active" : ""}>About</a> */}
        </Link>
      
      
        <Link className={ styles.Link } href="/Projects/Projects" as={`/projects`}>Projects
          {/* <a className={router.pathname === "/projects" ? "active" : ""}>Projects</a> */}
        </Link>        
      </nav>
    );
  };
  
export default Navbar