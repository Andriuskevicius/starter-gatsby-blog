import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post, index) => {
          if(index === 0) {
            return (
              <li className={styles.favorite} key={post.slug}>
                <Link to={`/blog/${post.slug}`} className={styles.link}>
                  <GatsbyImage 
                    alt="" 
                    image={post.heroImage.gatsbyImage} 
                    style={{
                      width: "60%",
                    }} />
                  <div className={styles.favoriteDescription}>
                    <Link to={`/category/${post.category}`} className={styles.category}>{post.category}</Link>
                    <h2 className={styles.title}>{post.title}</h2>
                  </div>
                </Link>
              </li>
            )
          } else {
            return (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className={styles.link}>
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
                  <Link to={`/category/${post.category.toLowerCase()}`} className={styles.category}>{post.category}</Link>
                  <h2 className={styles.title}>{post.title}</h2>
                </Link>
                <div>
                  {post.description?.raw && renderRichText(post.description)}
                </div>
                {/* <div className={styles.meta}>
                  <small className="meta">{post.publishDate}</small>
                </div> */}
              </li>
            )
          }
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
