import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    max-width: 900px;
    border-radius: 4px;
    form {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 1px solid #000;
        padding: 5px;
        width: 100%;
        h1 {
            font-size: 16px;
            margin: 10px;
        }
        .menores {
            flex-direction: row;
            display: flex;
            input {
                flex: 1;
            }
        }

        input {
            background-color: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #000;
            margin: 0 10px 10px;

            &::placeholder {
                color: rgba(0, 0, 0, 0.7);
            }
        }
        button {
            margin: 5px 10px 10px;
            height: 44px;
            border-radius: 4px;
            background-color: #343499;
            font-weight: bold;
            border: 0;
            font-size: 14px;
            color: #fff;
            transition: background 0.2s;
            &:hover {
                background-color: #343488;
            }
        }
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    p {
        padding: 5px;
    }
`;

export const Character = styled.div`
    h1 {
        font-size: 16px;
        text-align: center;
    }
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 20px;
    margin: 10px 10px;
    width: 100%;
    button {
        /* TODO Fix Button CSS */
        background-color: red;
        position: relative;
        width: 25px;
        border: 0px;
        border-radius: 4px;
    }
`;

export const Body = styled.div`
    text-align: center;
`;
