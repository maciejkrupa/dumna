import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import styled from '@emotion/styled';
import logo_mobile from '../../static/logo/logo_mobile.svg';
import logo_default from '../../static/logo/logo_default.svg';

const Div = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    background: linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2);
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.6);
    z-index: 2000;
    display: none;
    @media screen and (max-width: 1000px) {
        display: block;
`

const Logo = styled.img`
  position: relative;
  width: 80%;
  margin-top: 1rem;
  transform: scale(0.75);
  outline: 0;
`

const LogoMobile = styled.img`
  position: relative;
  float: right;
  bottom: 25px;
  right: 2rem;
  width: 120px;
`
var styles = {
    bmBurgerButton: {
      zIndex: '2000',
      position: 'relative',
      width: '36px',
      height: '35px',
      left: '2rem',
      top: '14px'
    },
    bmBurgerBars: {
      background: '#ac8d64',
      height: '15%'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      background: 'linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2)',
      boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.6)',
      position: 'fixed',
      height: '100%',
      width: '210px',
      zIndex: '3000',
      left: '-6px'
    },
    bmMenu: {
        //padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        zIndex: '3000'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      position: 'relative',
      fontSize: '1.2rem',
      background: 'transparent',
      textAlign: 'center',
      paddingTop: '10px',
    },
    bmItem: {
      marginTop: '10px',
      position: 'relative',
      fontFamily: '"Domine"',
      color: '#ac8d64',
      display: 'inline-block',
      outline: '0',
      textDecoration: 'none'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

const isMenuOpen = function(state) {;
  let html = document.documentElement
  if(state.isOpen === true) {
      html.style = 'overflow: hidden';
  }
  if(state.isOpen === false) {
      html.style = 'overflow: initial';
  }
}

const NavBarMobile = () => {
  if(typeof document !== "undefined") {
    let html = document.documentElement
    if(html.style.overflow === 'hidden') {
      html.style = 'overflow: initial';
    }
  }
  return (
    <Div>
        <Menu styles={ styles } onStateChange={ isMenuOpen }>
          <Link to="/">
              <Logo src={logo_default} alt='Dumna Niepodległa Logo' />
          </Link>
          <Link className="nav-link" to='/'>
              Wydarzenia
          </Link>
          <br />
          <Link className="nav-link" to='/about'>
              O Nas
          </Link>
          <br />
          <a className="nav-link" href='https://sklep.dumnaniepodlegla.pl'>
              Sklep
          </a>
          <br />
          <Link className="nav-link" to='/contact'>
              Kontakt
          </Link>
          <br />
        </Menu>
        <Link to="/">
          <LogoMobile src={logo_mobile} alt='Dumna Niepodległa Logo'/>
        </Link>
    </Div>
  )
};

export default NavBarMobile