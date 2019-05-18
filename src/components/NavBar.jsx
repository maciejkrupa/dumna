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
        &:hover {
        }
        div {
            position: relative;
            height: 1px;
            width: 0%;
            top: 0px;
            left: 50%;
            background-color: #dc2830;
            transition: all 0.45s ease-out;
        }
        &:hover>div {
            width: 100%;
            left: 0%;
            background-color: #dc2830;
            transition: all 0.45s ease-out;
        }
    }
`
const Logo = styled.img`
    position: relative;
    width: 70%;
    margin-top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
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
        <Link id="main-header-logo" to="/">
            <Logo id="logo_default" src={logo_default} alt='Dumna Niepodległa Logo' />
        </Link>
        <Nav id="nav">  
            <Link to='/'>
                Wydarzenia
                <div />
            </Link>
            <br/>
            <Link to='/about'>
                O nas
                <div />
            </Link>
            <br/>
            <a href='http://sklep.dumnaniepodlegla.pl/'>
                Sklep
                <div />
            </a>
            <br/>
            <Link to='/contact'>
                Kontakt
                <div />
            </Link>
            <br/>
        </Nav>
    </Headroom>
);

export default NavBar;