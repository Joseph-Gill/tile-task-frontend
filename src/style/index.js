import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 14px;
        box-sizing: border-box;
        color: ${props => props.theme.black};
    }
`

export const defaultTheme = {
    // Colors
    grayOne: '#3A3B3F',
    grayTwo: '#949A9F',
    grayThree: '#999EA3',
    grayFour: '#D3D8DD',
    grayFive: '#F6F7F8',
    graySix: '#FAFAFA',
    primaryBlue: '#00709F',
    white: '#FFFFFF',
    black: 'rgba(0,0,0,0.92)',
}
