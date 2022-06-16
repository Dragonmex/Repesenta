import  styled from 'styled-components'

export const Container = styled.header`
    background: var(--laranja);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 0 1 rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
    background: var(--laranja);
    font-size: 1rem;
    margin: 5px;
    //border: 0;
    padding: 0 1rem;
    border-radius: 2rem;
    
`;

export const Logo = styled.h1`
    font-family: 'Play', sans-serif ;
    font-size: 24px;
    margin: 5px;
    
`;