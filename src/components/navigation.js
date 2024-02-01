import React, {useState} from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const burger = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M945.172 561.724h-866.376c-22.364 0-40.55-18.196-40.55-40.591 0-22.385 18.186-40.581 40.55-40.581h866.365c22.385 0 40.561 18.196 40.561 40.581 0.010 22.395-18.176 40.591-40.55 40.591v0zM945.183 330.403h-866.386c-22.374 0-40.55-18.196-40.55-40.571 0-22.405 18.176-40.612 40.55-40.612h866.376c22.374 0 40.561 18.207 40.561 40.612 0.010 22.364-18.186 40.571-40.55 40.571v0zM945.172 793.066h-866.376c-22.374 0-40.55-18.196-40.55-40.602 0-22.385 18.176-40.581 40.55-40.581h866.365c22.385 0 40.581 18.196 40.581 40.581 0.010 22.395-18.196 40.602-40.571 40.602v0z"></path></svg>;
const search = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M946.371 843.601l-125.379-125.44c43.643-65.925 65.495-142.1 65.475-218.040 0.051-101.069-38.676-202.588-115.835-279.706-77.117-77.148-178.606-115.948-279.644-115.886-101.079-0.061-202.557 38.738-279.665 115.876-77.169 77.128-115.937 178.627-115.907 279.716-0.031 101.069 38.728 202.588 115.907 279.665 77.117 77.117 178.616 115.825 279.665 115.804 75.94 0.020 152.136-21.862 218.061-65.495l125.348 125.46c30.915 30.904 81.029 30.904 111.954 0.020 30.915-30.935 30.915-81.029 0.020-111.974zM705.772 714.925c-59.443 59.341-136.899 88.842-214.784 88.924-77.896-0.082-155.341-29.583-214.784-88.924-59.443-59.484-88.975-136.919-89.037-214.804 0.061-77.885 29.604-155.372 89.037-214.825 59.464-59.443 136.878-88.945 214.784-89.016 77.865 0.082 155.3 29.583 214.784 89.016 59.361 59.464 88.914 136.919 88.945 214.825-0.041 77.885-29.583 155.361-88.945 214.804z"></path></svg>;

const Navigation = () => {
  const [show, setShow] = useState(false);
  console.log(show)

  return (
    <div className={styles.header}>
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo} />
        <div className={styles.logoTextWrap}><span className={styles.navigationLogo}>CYBER</span><span>Scalps</span></div>
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <div to="/" activeClassName="active" className={styles.burger}>
            <span>Viskas</span>
            {burger}
          </div>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Robotika
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/kripto/" activeClassName="active">
            Kripto
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/ai/" activeClassName="active">
            AI
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/apps/" activeClassName="active">
            Apps
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/startuoliai/" activeClassName="active">
            Startuoliai
          </Link>
        </li>
      </ul>
      <div className={styles.social}>
          <span onClick={() => setShow(prevShow => !prevShow)} className={styles.search}>
            {search}
          </span>
          <div style={!show ? {display: 'none'} : null} className={styles.searchContainer}>
            <input type="search" placeholder="Kas ieško tas randa..." />
            <button>Ieškoti</button>
          </div>
      </div>
    </nav>
    </div>
  )
  
  }

export default Navigation
