import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import styled from '@emotion/styled'
import logo_mobile from '../../static/logo/logo_mobile.svg'
import logo_default from '../../static/logo/logo_default.svg'

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
    width: 70%;
    margin-top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
`

const LogoMobile = styled.img`
    position: relative;
    top: 10px;
    margin-left: 2rem;
    width: 120px;
`
var styles = {
    bmBurgerButton: {
        float: 'right',
        position: 'relative',
        width: '36px',
        height: '36px',
        right: '2rem',
        top: '12px',
        zIndex: '2000'
    },
    bmBurgerBars: {
      background: '#ac8d64',
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
      position: 'fixed',
      height: '100%',
      width: '220px',
      zIndex: '3000'
    },
    bmMenu: {
        background: 'linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2)',
        boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.6)',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        zIndex: '3000'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      padding: '0.8em',
      display: 'table-caption',
    },
    bmItem: {
      display: 'inline-block',
      paddingTop: '20px',
      outline:  '0',
      fontFamily: 'Domine',
      color: '#ac8d64'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

const NavBarMobile = () => (
    <Div>
        <Menu styles={ styles }>
          <Link to="/">
              <Logo id="logo_default" src={logo_default} alt='Dumna Niepodległa Logo' />
          </Link>
          <Link to='/'>
              Wydarzenia
          </Link>
          <Link to='/'>
              O nas
          </Link>
          <Link to='/'>
              Kontakt
          </Link>
          <Link to='/'>
              Sklep
          </Link>
        </Menu>
        <Link to="/">
          <LogoMobile
              src={logo_mobile} 
              alt='Dumna Niepodległa Logo' 
          />
        </Link>
    </Div>
);

export default NavBarMobile