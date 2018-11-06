import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(https://stackpath.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);
  @import url(http://fonts.googleapis.com/css?family=Roboto:400,300,500,700);

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  .container {
    display: block;
    margin: 10px;
  }

  body {
      font-family: Roboto;
      background-color: #E5E5E5;
  }

  * {
      box-sizing: border-box;
  }

`;

export default GlobalStyle;
