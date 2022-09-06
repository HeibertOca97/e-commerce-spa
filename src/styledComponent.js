import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --size: 1.1em;
        --color-1:#1B366A;
        --color-2:#FFF441; 
        --color-3:#3A6591;
    }

    body{
        color: #1E1B1B;
        font-size: var(--size);
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
    }
`;

const ContainerStyled = styled.div`
    padding: 10px 5px;
    max-width: 1400px;
    margin: auto;

    ${function(props) {
        if(props.flex === 'header'){
            return `
            display: flex;
            flex-wrap: wrap;
            align-item: center;
            justify-content: space-around;
            `;
        }else if(props.flex === 'card'){
            return `
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: left;
            `;
        }
    }}

  `;

const ModalStyled = styled.div`
    z-index: ${(props) => props.zindex ? props.zindex : '-1'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.status ? 'rgba(0,0,0,.6)' : 'transparent'}; 
    transition: all 250ms ease-in; 
`;

const CardItem = styled.div`
    box-shadow: 0px 5px 10px #ddd;
    display: grid;
    grid-template-columns: 150px 1fr;
    margin: 5px 0;

    picture{
        display: block;
        width: 100%;
        height: 150px;
        
        img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    &>div{
        display: grid;
        grid-template-columns: 1fr auto;
        h4{
            font-size: 1.3rem;
            padding: 10px 5px;
        }
        p{
            margin: 5px;
        }
    }
    &:nth-last-child(1){
        margin-bottom: 107px;
    }
`;

export {
    GlobalStyle,
    ContainerStyled,
    ModalStyled,
    CardItem,
}
