import Link from "next/link";
import styles from './Navbar.module.css'

const Navbar: React.FC = (props) => {

  // Rutas para SPA
  const spaRoutes = [
    {text:"Home", href:"/Home/Home", as:"/"},
    {text:"About me", href:"/About/About", as:"/about"},
    {text:"Projects", href:"/Projects/Projects", as:"/projects"}
  ];
  
    return (
      <div className={ styles.nav }>         
        {
          spaRoutes.map(({text, href, as}) => (
            <Link key={href} className={styles.Link} href={href} as={as}>{text}</Link>
          ))
        }       
      </div>
    );
  };
  
export default Navbar