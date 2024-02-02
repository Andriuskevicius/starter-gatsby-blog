import React from 'react'
import { Link } from 'gatsby'
import * as styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer} as="footer">
    <div className={styles.container}>
      <div className={styles.footerTop}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logoTextWrap}><span className={styles.footerLogo}>CYBER</span><span>Scalps</span></div>
        </Link>
        <div className={styles.subscription}>
          <input type="email" placeholder="Suvesk email, vistiek negausi nieko" />
          <button>Prenumeruok naujienlaiškį</button>
        </div>
      </div>
      <div className={styles.footerMiddle}>
        <ul>
          <h3 className={styles.title}>Kategorijos:</h3>
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
        <ul>
          <h3 className={styles.title}>Sekite:</h3>
          <li>
            <Link to="/">
              <span>Threads</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Facebook</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        Pagaminta Lietuvoje. Varoma nežabota AI galia.
      </div>
    </div>
  </footer>
)

export default Footer
