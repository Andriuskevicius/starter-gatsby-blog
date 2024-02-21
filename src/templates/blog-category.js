import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
//import Tags from '../components/tags'
import * as styles from './blog-category.module.css'

class BlogCategoryTemplate extends React.Component {
  render() {
    const posts = get(this.props, 'data.contentfulCategories.categoryReferences')

    const options = {
      renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text])
    };

    console.log('Info: ', this.props)

    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Hero title={this.props.pageContext.slug} />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogCategoryTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
  ) {
  contentfulCategories(
    categoryReferences: {elemMatch: {categories: {elemMatch: {categorySlug: {eq: $slug}}}}}
  ) {
    categoryReferences {
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
    categorySlug
  }
}
`
