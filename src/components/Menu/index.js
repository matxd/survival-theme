import styles from './Menu.module.css';

import MenuLink from '../MenuLink';

const Menu = () => {
  return (
    <>
      <header>
        <nav className={styles.navegacao}>
          <MenuLink to='/' children={'Home'} />
          <MenuLink to='/sobre' children={'About'} />
        </nav>
      </header>
    </>
  )
}

export default Menu;