import { css } from 'styled-components'

/*
$screen-xs-min: 480px;

// Small screen / tablet
$screen-sm-min: 768px;

// Medium screen / desktop
$screen-md-min: 992px;

// Large screen / wide desktop
$screen-lg-min: 1200px;

$breakpoints: (
  xs: $screen-xs-min,
  sm: $screen-sm-min,
  md: $screen-md-min,
  lg: $screen-lg-min
);
*/

const sizes = {
  phone: 480,
  tablet: 768,
  desktop: 1024,
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  // const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default media
