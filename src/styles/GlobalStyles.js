import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        color: var(--text-color);
        text-decoration: none;
        list-style: none;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;

        width: 100%;
        height: 100%;
    }
    body {
        font-size: 1.6rem;
        background: var(--bg-color);
          overflow: overlay;
    }

    body * {
        font-family: "Roboto" , sans-serif;
    }

    html {
        background: var(--bg-color);
        scroll-behavior: smooth;
    }

    :root {

        font-size: 62.5%;
        // theme dark
        --bg-color: #ffffff; 
        --text-color: #000000;
        --text-color-2: #666666;        
        --color-1: #63AAEB;
        --color-2: #FEE774;
        --color-3: #BDDBFF;
        --color-4:#DDEFFD;
        --color-5:#f0f0f0;
        --color-6: #d5d7dc;

    

        // default
        --white: #ffffff;
        --black: #000000;
    }

    @media (max-width: 899px) {
    .wrapper {
        width: 100%;
        max-width: 42rem;
        margin-inline: auto;
        padding-inline:1.2rem;
    }
    }


    @media (min-width: 900px) and (max-width: 1080px) {
        :root {
            font-size: 50%;
        }
    }
`
