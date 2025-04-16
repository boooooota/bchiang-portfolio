module.exports = {
  email: 'akbota.aldungarova@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/boooooota',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/boooooooooooota',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/arsenovna',
    },
  ],

  navLinks: [
    {
      name: 'ABOUT',
      url: '/#about',
    },
    {
      name: 'EXPERIENCE',
      url: '/#jobs',
    },
    {
      name: 'CONTACT',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    lime: '#54f000',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    plum: '#c84b6d',
    lemon: 'fbe864',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
