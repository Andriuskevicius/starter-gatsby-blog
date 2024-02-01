import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './article-category.module.css'

const ArticleCategory = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <div className={styles.containerInner}>
        <div className={styles.sectionTitleWrap}>
          <h2>Dirbtinis intelektas</h2>
          <Link to={"/blog"}>View All</Link>
        </div>
        <ul className={styles.articleList}>
          {posts.map((post, index) => {
              return (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className={styles.link}>
                  <GatsbyImage 
                      alt="" 
                      image={post.heroImage.gatsbyImage} 
                      style={{
                        width: "60%",
                      }} />
                    <h2 className={styles.title}>{post.title}</h2>
                  </Link>
                </li>
              )
          })}
        </ul>
      </div>
    </Container>
  )
}

export default ArticleCategory
