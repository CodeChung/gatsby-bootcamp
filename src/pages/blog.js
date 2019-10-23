import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const blogData = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    const blogPosts = blogData.allMarkdownRemark.edges.map((post, index) => (
        <li key={index} className='blog-post'>
            <Link to={`/blog/${post.node.fields.slug}`}>
                <h2>{post.node.frontmatter.title}</h2> 
                <p>{post.node.frontmatter.date}</p>
            </Link>
        </li>
    ))
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>{blogPosts}</ol>
        </Layout>
    )
}

export default BlogPage