import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --blue-color: #3664F4;
        --dark-color: #070D1F;
        --dark-alt-color: #282B3A;
        --white-color: #E6E7E9;
        --background-color: #F4F4F4;
        --font-color: #212529;
        --small-font-size: .875rem;
        --tooltip-scale: 0;
        --tooltip-arrow-size: 5px;
        --tooltip-color: #000;
        --border-radius: 0.25rem;
        --box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.5);
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Ubuntu', sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
        font-weight: 400;
        color: var(--font-color);
        background: var(--background-color);
        width: calc(100vw - 0.28rem);
        &::-webkit-scrollbar-track{
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: var(--background-color);
        }
        &::-webkit-scrollbar{
            width: 0.3rem;
            background-color: var(--background-color);
        }
        &::-webkit-scrollbar-thumb{
            box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: var(--dark-color);
        }
    }
`;