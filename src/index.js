import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle, defaultTheme} from './style'
import {ThemeProvider} from 'styled-components'
import Routes from './routes'
import {Provider} from 'react-redux'
import {store} from './store'


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

