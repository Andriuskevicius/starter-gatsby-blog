import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Pagaminta Lietuvoje. Varoma nežabota AI galia.
    </div>
  </Container>
)

export default Footer
