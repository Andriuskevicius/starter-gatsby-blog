const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const blogCategory = path.resolve('./src/templates/blog-category.js')

  const result = await graphql(
    `
      {
        allContentfulArticles {
          nodes {
            title
            slug
            category
          }
        }
      }
    `
  )

  const categoriesResult = await graphql(
    `
      {
        allContentfulCategories {
          nodes {
            categoryTitle
            categorySlug
            childContentfulCategoriesDescriptionTextNode {
              description
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  if (categoriesResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful categories`,
      categories.errors
    )
    return
  }

  const posts = result.data.allContentfulArticles.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

  const categories = categoriesResult.data.allContentfulCategories.nodes

  if (categories.length > 0) {
    categories.forEach((category) => {
      createPage({
        path: `/category/${category.categorySlug}/`,
        component: blogCategory,
        context: {
          slug: category.categorySlug,
          title: category.categoryTitle,
        },
      })
    })
  }
}
