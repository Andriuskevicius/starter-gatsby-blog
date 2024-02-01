import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import * as styles from './us-block.module.css'

const UsBlock = () => {

  return (
    <Container>
      <div className={styles.containerWrap}>
        <StaticImage src="../images/who-we-are.jpeg" alt="We are you" />
        <div className={styles.infoBlock}>
          <h3>YOUR GO-TO NFT NEWS PLATFORM</h3>
          <h2>We are here to prove something!</h2>
          <p>Fresh news, accurate analysis and all the best artists, collections and technologies presented all in one place: NFT News online magazine.</p>
          <div className={styles.categories}>
            <div>
              <span>Market</span>
            </div>
            <div>
              <span>Guides</span>
            </div>
            <div>
              <span>Investment</span>
            </div>
            <div>
              <span>Features</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UsBlock
