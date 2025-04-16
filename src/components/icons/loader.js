import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="A" transform="translate(54, 57.5)">
        <path d="M-15,10 L-5,-30 L5,10 L0,10 L-5,-8 L-10,10 L-15,10 Z" fill="currentColor" />
        <circle cx="-5" cy="7" r="2" fill="currentColor" />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13,11
          H87
          A4,4 0 0 1 91,15
          V87
          A4,4 0 0 1 87,91
          H13
          A4,4 0 0 1 9,87
          V15
          A4,4 0 0 1 13,11
          Z"
      />
    </g>
  </svg>
);

export default IconLoader;
