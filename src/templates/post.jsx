import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Layout from '../layouts/Layout';
import Container from '../layouts/Container';
import Content from '../layouts/Content';
import BackgroundImage from 'gatsby-background-image'
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
  text-align: left;
  a {
    color: #ac8d64;
    h3 {
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 26px;
      max-height: 78px;
      display: -webkit-box;
      font-size: 1rem;
      @media screen and (min-width: 700px) {
        font-size: 1.2rem;
      }
      @media screen and (min-width: 1000px) {
        font-size: 1.4rem;
      }
    }
  }
`;

const HeroTitle = styled.h2`
  text-align: left;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 32px;       
  max-height: 95px;   
  color: #fff;
  z-index: 100;
  top: 4px;
  font-size: 1.2rem;
  @media screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.8rem;
  }
  position: relative;   
`;

const HeroWrap = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
  position: relative;
  height: 100%;
  width: 100%;
  opacity: 0.7;
`

const TitleWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 22px;
`

function Post({ data: { mdx }, pageContext }) {
  const { next, prev } = pageContext;
  const hero = mdx.frontmatter.hero.childImageSharp.fluid;
  const title = mdx.frontmatter.title;
  const content = mdx.body;
  return (
    <Layout>
      <Container>
        <BackgroundImage 
          Tag="section"
          fluid={hero}
          style={{
          height: `420px`,
          width: `100%`,
          boxShadow: `0px 3px 10px 0px rgba(0, 0, 0, 0.6) `,
          marginBottom: `20px`,}}
        >
          <TitleWrap>
            <HeroTitle>{title}</HeroTitle>
          </TitleWrap>
          <HeroWrap />
        </BackgroundImage>
        <Content input={content} />
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Poprzednie
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Następne
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  )
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
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        hero {
          childImageSharp {
            fluid(
              maxHeight: 420 
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
