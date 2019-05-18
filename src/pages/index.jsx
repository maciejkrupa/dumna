import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import PostList from '../components/PostList';
import Layout from '../layouts/Layout';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 2rem 1rem 2rem;
  @media screen and (min-width: 1000px) {
    margin: 1rem 4rem 1rem 16%;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            hero={node.frontmatter.hero.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
          />
        ))}
      </PostWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              hero: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 7
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            order
            path
            hero {
              childImageSharp {
                fluid(
                  maxWidth: 1100
                  quality: 90
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
