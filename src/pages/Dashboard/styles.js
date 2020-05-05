import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin: 20px auto;
    max-width: 900px;
`;

export const Card = styled.div`
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 10px;
    height: 100px;
    min-width: 150px;
    padding: 10px;
    border-radius: 4px;
    h1 {
        font-size: 16px;
    }
    p {
        font-size: 12px;
    }
    a {
        margin-top: 10px;
        display: block;
    }
`;
