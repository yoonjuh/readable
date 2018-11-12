import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
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
body > * {
  all:unset;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #F9F9F9;
  background-size: cover;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`;
