import {createGlobalStyle} from 'styled-components';

createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  font-size: 62.5%;
  line-height: 1.6;
}
body {
  height: 100%;
  width: 100%;
  background-color: #F9F9F9;
  background-size: cover;
  margin: 0rem auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
body > * {
  all:unset;
}
`;
