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
`

export default headroom