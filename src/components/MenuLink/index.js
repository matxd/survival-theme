import styles from './MenuLink.module.css';
import { useLocation, Link } from 'react-router-dom';

const MenuLink = ({ children, to }) => {
  const localizacao = useLocation();

  return (
    <Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkSublinhado : ''}`} to={to}>
      {children}
    </Link>
  )
};

export default MenuLink;