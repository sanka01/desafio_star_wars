import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/favorites" >Favoritos</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/" >Início</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/login" >Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#1e1e1e',
    padding: '10px 20px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Header;
