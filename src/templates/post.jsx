import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Layout from '../layouts/Layout';
import Container from '../layouts/Container';
import Content from '../layouts/Content';
import BackgroundImage from 'gatsby-background-image'
import GalleryPostSix from '../components/GalleryPostSix';
import '../styles/prism';

const SuggestionBar = styled.div`
  display: flex;
  @media screen and (min-width: 1000px) {
    margin-left: 16%;
    margin-right: 4rem;
  }
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 3rem;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const PostSuggestion = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 32px;
  max-height: 85px;
`;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const post = data.markdownRemark;
  const hero = post.frontmatter.hero.childImageSharp.fluid;
  const title = post.frontmatter.title;
  const order = post.frontmatter.order;
  const html = post.html;
  if(order === "6"){
    return (
      <Layout>
        <Container>
          <Content input={html} />
          <GalleryPostSix />
        </Container>
        <SuggestionBar>
          <PostSuggestion>
            {prev && (
              <Link to={prev.frontmatter.path}>
                Previous
                <h3>{prev.frontmatter.title}</h3>
              </Link>
            )}
          </PostSuggestion>
          <PostSuggestion>
            {next && (
              <Link to={next.frontmatter.path}>
                Next
                <h3>{next.frontmatter.title}</h3>
              </Link>
            )}
          </PostSuggestion>
        </SuggestionBar>
      </Layout>
    )
  } 
  else {
    return (
      <Layout>
        <Container>
          <BackgroundImage 
            Tag="section"
            fluid={hero}
            style={{
              height: `500px`,
              width: `100%`,
              }} >
          </BackgroundImage>
          <Content input={html} />
        </Container>
        <SuggestionBar>
          <PostSuggestion>
            {prev && (
              <Link to={prev.frontmatter.path}>
                Previous
                <h3>{prev.frontmatter.title}</h3>
              </Link>
            )}
          </PostSuggestion>
          <PostSuggestion>
            {next && (
              <Link to={next.frontmatter.path}>
                Next
                <h3>{next.frontmatter.title}</h3>
              </Link>
            )}
          </PostSuggestion>
        </SuggestionBar>
      </Layout>
    )
  }
}

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        order
        hero {
          childImageSharp {
            fluid(
              maxHeight: 1100 
              maxWidth: 420 
              maxHeight: 500 
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
`;
