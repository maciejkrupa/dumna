import { css } from '@emotion/core'

const navbar = css`
  .nav-link {
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

export default navbar;