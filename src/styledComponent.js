import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --size: 1.1em;
        --color-default: #1E1B1B;
        --color-1:#1B366A;
        --color-2:#FFF441; 
        --color-3:#3A6591;
        --color-4: #454545;
    }

    body{
        color: var(--color-default);
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
    grid-template-columns: 120px 1fr;
    margin: 5px 0;
    position: relative;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        grid-template-columns: 150px 1fr;
    }

    .card__picture{
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
    
    .card__body{ 
        h4{
            font-size: 1.3rem;
            padding: 10px 5px;
        }
        p{
            margin: 5px;
        }
        
    }
    &:last-child{
        margin-bottom: 107px;
    }
`;

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;

    padding: 10px 5px;
    text-align: center;
    text-transform: uppercase;
    
    font-weight: bold;
    font-size: calc(var(--size) + .1em);
    
    background-color: var(--color-1);
    color: #fff;
    border-radius: ${(props) => props.radius ? props.radius : 'none'};
    border: 2px solid transparent;
    transition: all 250ms linear;
    box-shadow: 0px 8px 10px #ddd;
    
    ${(props) => {
        if(props.hover){
            return `
            &:hover {
                background-color: #fff;
                border: 2px solid var(--color-1);
                color: var(--color-1);
            }
            `;
        } 
    }}
`;

export {
    GlobalStyle,
    ContainerStyled,
    ModalStyled,
    CardItem,
    ButtonStyled,
}
