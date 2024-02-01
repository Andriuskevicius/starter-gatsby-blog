import React from 'react'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import * as styles from './articles-hot.module.css'

const ArticlesHot = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <h2 className={styles.articlesHeader}>Hot right now!</h2>
      <ul className={styles.articleList}>
        {posts.map((post, index) => {
            return (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className={styles.link}>
                  <h2 className={styles.title}>{post.title}</h2>
                </Link>
                <div>
                  {post.description?.raw && renderRichText(post.description)}
                </div>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <small className="meta">{post.publishDate}</small>
                </div>
              </li>
            )
        })}
      </ul>
      <button className={styles.button}>Load More</button>
    </Container>
  )
}

export default ArticlesHot
