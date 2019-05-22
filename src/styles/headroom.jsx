import { css } from '@emotion/core'

const headroom = css`
  .headroom-wrapper {
    position: fixed;
    width: 15%;
    display: none;
    min-height: 200px;
    height: 100%;
    z-index: 2000;
    @media screen and (min-width: 1000px) {
      display: initial;
    }
  }
  .headroom {
    height: 100%;
    }
  }
  .headroom--unfixed {
    transform: translateY(0%);
  }
  .headroom--scrolled {
    transform: translateY(0%);
  }
  .headroom--unpinned {
    transform: translateY(0%);
  }
  .headroom--pinned {
    transform: translateY(0%);
  }
  .gatsby-resp-iframe-wrapper {
    box-shadow: rgba(0, 0, 0, 0.6) 0px 3px 10px 0px;
  }
`

export default headroom;