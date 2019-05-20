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
  line-height: 32px;
  max-height: 150px;
  a {
    color: #ac8d64;
    h3 {
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
        <BackgroundImage 
            Tag="section"
            fluid={hero}
            style={{
              height: `420px`,
              width: `100%`,
              boxShadow: `0px 3px 10px 0px rgba(0, 0, 0, 0.6) `,
              marginBottom: `20px`,
              }} >
              <TitleWrap>
                <HeroTitle>{title}</HeroTitle>
              </TitleWrap>
              <HeroWrap />
          </BackgroundImage>
          <Content input={html} />
          <GalleryPostSix />
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
  else {
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
              marginBottom: `20px`,
              }} >
              <TitleWrap>
                <HeroTitle>{title}</HeroTitle>
              </TitleWrap>
              <HeroWrap />
          </BackgroundImage>
          <Content input={html} />
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
