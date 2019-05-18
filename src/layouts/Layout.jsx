import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import theme from '../../config/theme';
import headroom from '../styles/headroom';
import NavBarMobile from '../components/NavBarMobile';
import NavBar from '../components/NavBar';
import Spacer from '../components/Spacer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Spacer/>
      <NavBarMobile/>
      <NavBar/>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            width: 100%;
            margin: 0;
            padding: 0;
          }
          .body-background--white {
            background: #f0f0f0;
          }
          body {
            display: flex;
            height: 100%;
            margin: 0;
            flex-direction: column;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background: linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2 );
            min-height: 100vh;
          }
          a {
            color: black;
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
          }
          img {
            margin-bottom: 0;
          }
          .gatsby-resp-image-wrapper {
            margin-left: 0px;
          }
          ${headroom};
        `}
      />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
