import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle, defaultTheme} from './style'
import {ThemeProvider} from 'styled-components'
import Routes from './routes'


ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes />
    </ThemeProvider>,
    document.getElementById('root')
);

