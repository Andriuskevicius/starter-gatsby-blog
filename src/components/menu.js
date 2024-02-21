import React, {useState} from 'react'
import { Link } from 'gatsby'
import * as styles from './menu.module.css'

const Menu = (props) => {

  const searchIcon = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M946.371 843.601l-125.379-125.44c43.643-65.925 65.495-142.1 65.475-218.040 0.051-101.069-38.676-202.588-115.835-279.706-77.117-77.148-178.606-115.948-279.644-115.886-101.079-0.061-202.557 38.738-279.665 115.876-77.169 77.128-115.937 178.627-115.907 279.716-0.031 101.069 38.728 202.588 115.907 279.665 77.117 77.117 178.616 115.825 279.665 115.804 75.94 0.020 152.136-21.862 218.061-65.495l125.348 125.46c30.915 30.904 81.029 30.904 111.954 0.020 30.915-30.935 30.915-81.029 0.020-111.974zM705.772 714.925c-59.443 59.341-136.899 88.842-214.784 88.924-77.896-0.082-155.341-29.583-214.784-88.924-59.443-59.484-88.975-136.919-89.037-214.804 0.061-77.885 29.604-155.372 89.037-214.825 59.464-59.443 136.878-88.945 214.784-89.016 77.865 0.082 155.3 29.583 214.784 89.016 59.361 59.464 88.914 136.919 88.945 214.825-0.041 77.885-29.583 155.361-88.945 214.804z"></path></svg>;
  const closeIcon = <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 4.08578L9.03553 0.550249C9.42606 0.159725 10.0592 0.159725 10.4497 0.550249C10.8403 0.940774 10.8403 1.57394 10.4497 1.96446L6.91421 5.5L10.4497 9.03553C10.8403 9.42605 10.8403 10.0592 10.4497 10.4497C10.0592 10.8403 9.42606 10.8403 9.03553 10.4497L5.5 6.91421L1.96447 10.4497C1.57394 10.8403 0.940777 10.8403 0.550253 10.4497C0.159728 10.0592 0.159729 9.42605 0.550253 9.03553L4.08579 5.5L0.550253 1.96446C0.159728 1.57394 0.159728 0.940774 0.550253 0.550249C0.940777 0.159725 1.57394 0.159725 1.96447 0.550249L5.5 4.08578Z" fill="white"/>
  </svg>
  const [open, setOpen] = useState(true);

  return (
  
  <div style={props.isToggleOn ? null : {display: 'none'}} className={styles.menu}>
    <div className={styles.close} onClick={props.handleClick}>{closeIcon}</div>
    <div className={styles.container}>
      <div className={styles.menuTop}>
        <Link to="/"><h2>Menu</h2></Link>
        <div className={styles.searchContainer}>
            <input type="search" placeholder="Kas ieško tas randa..." />
            <button>Ieškoti</button>
        </div>
      </div>
      <div className={styles.menuMiddle}>
        <ul>
          <h3>Kategorijos:</h3>
          <li>
            <Link to="/">
              <span>Robotika</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Kripto</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>APPS</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>AI</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Startuoliai</span>
            </Link>
          </li>
        </ul>
        <ul>
          <h3 className={styles.title}>Hot right now:</h3>
          <li>
            <Link to="/">
              <span>NFT</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>NFT</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>NFT</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>NFT</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>NFT</span>
            </Link>
          </li>
        </ul>
        <ul>
          <h3 className={styles.title}>Apie mus:</h3>
          <li>
            <Link to="/">
              <span>Kontaktai</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Apie mus</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Reklama</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Papildomos rankos</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.menuBottom}>
        <p>We participate in marketing programs, our editorial content is not influenced by any commissions. To find out more, please visit our Term and Conditions page.</p>
        <ul>
          <li>
            <Link to="/">
              <span>Kontaktai</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Apie mus</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Reklama</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Papildomos rankos</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Menu
