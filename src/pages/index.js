import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import ArticlesHot from '../components/articles-hot'
import ArticleCategory from '../components/article-category'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulArticles.nodes')

    return (
      <Layout location={this.props.location}>
        <ArticlePreview posts={posts} />
        <ArticlesHot posts={posts} />
        <ArticleCategory posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticles(sort: { publishDate: DESC }, limit: 8) {
      nodes {
        title
        slug
        category
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 232
            height: 232
          )
        }
        description {
          description
        }
      }
    }
  }
`
