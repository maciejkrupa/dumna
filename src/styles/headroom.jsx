import { css } from '@emotion/core'
import theme from '../../config/theme'

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
    transition: all 0.35s ease-out;
    @media (max-width: ${theme.breakpoints.m}) {
    }
    @media (min-width: ${theme.breakpoints.m}) {
    }
  }
  .headroom--scrolled {
    transition: all 0.35s ease-out;
  }
  .headroom--unpinned {
    transform: translateY(-105%);
    transition: all 0.35s ease-out;
  }
  }
  .headroom--pinned {
    transform: translateY(0%);
    transition: all 0.35s ease-out;
  }
`

export default headroom