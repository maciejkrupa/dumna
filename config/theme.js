export const colors = {
    white: {
      base: '#fff',
      light: '#f0f0f0',
      grey: '#cecece',
      dark: '#a0afd7',
    },
    black: {
      base: '#333438',
      light: '#4b4e57',
      blue: '#2e3246',
    },
    primary: {
      base: '#3498db',
      light: '#3e5fbc',
      dark: '#284187',
    },
    background: {
      light: '#3e5fbc',
      dark: '#284187',
      red: '#d5333e',
      white: '#f0f0f0',
    },
  };
  
  export const shadow = {
    card: '0 20px 30px rgba(0, 0, 0, 0.1)',
    image: '0 15px 25px rgba(0, 0, 0, 0.1)',
    suggestion: '0 -5px 30px rgba(0,0,0,0.2)',
    footer: '0 -3px 26px rgba(0,0,0,0.5)',
    feature: {
      big: {
        default: '0 40px 40px rgba(0, 0, 0, 0.2)',
        hover: '0 50px 50px rgba(0, 0, 0, 0.1)',
      },
      small: {
        default: '0px 3px 10px 0px rgba(0,0,0,0.6)',
        hover: '0px 4px 10px 0px rgba(0,0,0,0.6)',
      },
    },
    text: {
      small: '0 5px 10px rgba(0, 0, 0, 0.25)',
      big: '0 15px 20px rgba(0, 0, 0, 0.13)',
    },
  };
  
  export const gradient = {
    // eslint-disable-next-line
    leftToRight: `linear-gradient(-45deg, ${colors.background.white} 0%, ${colors.background.white} 100%)`,
    // eslint-disable-next-line
    rightToLeft: `linear-gradient(45deg, ${colors.background.white} 0%, ${colors.background.white} 100%)`,
  };
  
  export const transition = {
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    duration: '0.4s',
  };
  
  export const theme = {
    colors,
    gradient,
    shadow,
    breakpoints: {
      xs: '400px',
      s: '600px',
      m: '900px',
      l: '1200px',
    },
    fontFamily: {
    },
    layout: {
      article: '46rem',
      base: '70rem',
      big: '83.33333rem',
    },
    borderRadius: {
      default: '1px',
      round: '1px',
    },
    transitions: {
      default: {
        duration: transition.duration,
        timing: transition.easeInOutCubic,
        transition: `all ${transition.duration} ${transition.easeInOutCubic}`,
      },
      boom: {
        duration: transition.duration,
        timing: transition.easeOutBack,
        transition: `all ${transition.duration} ${transition.easeOutBack}`,
      },
      headroom: {
        transition: 'all 0.25s ease-in-out',
      },
    },
  };
  
  export default theme;
  