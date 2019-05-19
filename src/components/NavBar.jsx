import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Headroom from 'react-headroom'
import logo_default from '../../static/logo/logo_default.svg'

const Nav = styled.nav`
    @media screen and (min-width: 1400px) {
        font-size: 1.2rem;
    }
    position: relative;
    font-weight: 400;
    font-size: 1rem;
    height: 50px;
    background: transparent;
    /* float: right; */
    /* direction: rtl; */
    /* margin-right: 25%; */
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 10px;
    a {
        position: relative;
        font-family: "Domine";
        color: #ac8d64;
        transition: all 0.25s ease-out
        width: 100%;
        display: inline-block;
        overflow: hidden;
        text-decoration: none;
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #E30613;
            visibility: hidden;
            transition: all 0.45s ease-in-out 0s;
            transform: scaleX(0);
        }
        &:hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
    }
`
const Logo = styled.img`
    position: relative;
    width: 80%;
    margin-top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    margin-bottom: 2rem;
`

const Pinned = function() {
};

const unPinned = function() {
};

const unFixed = function() {
};

const NavBar = () => (
    <Headroom id="main_headroom" 
        disableInlineStyles
        onPin={Pinned} 
        onUnpin={unPinned} 
        onUnfix={unFixed}
        pin={true}
        hide={true}
        fixAnchor={0}
        pinAnchor={0}
        hideAnchor={0}
    >
        <Link to="/">
            <Logo id="logo_default" src={logo_default} alt='Dumna Niepodległa Logo' />
        </Link>
        <Nav id="nav">  
            <Link to='/'>
                Wydarzenia
            </Link>
            <br/>
            <Link to='/about'>
                O Nas
            </Link>
            <br/>
            <a href='http://sklep.dumnaniepodlegla.pl/'>
                Sklep
            </a>
            <br/>
            <Link to='/contact'>
                Kontakt
            </Link>
            <br/>
        </Nav>
    </Headroom>
);

export default NavBar;