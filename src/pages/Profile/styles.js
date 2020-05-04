import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;

    form {
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */
        flex-direction: column;
        input {
            background-color: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }
        hr {
            border: 0;
            height: 1px;
            margin: 10px 0 20px;
            background: rgba(255, 255, 255, 0.2);
        }
        button {
            margin: 5px 0 0;
            height: 44px;
            border-radius: 4px;
            background-color: #343499;
            font-weight: bold;
            border: 0;
            font-size: 14px;
            color: #fff;
            transition: background0.2s;
            &:hover {
                background-color: #343488;
            }
        }
        a {
            color: #fff;
            margin-top: 15px;
            font-size: 14px;
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
        }
    }
    button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        border-radius: 4px;
        background-color: #993434;
        font-weight: bold;
        border: 0;
        font-size: 14px;
        color: #fff;
        transition: background0.2s;
        &:hover {
            background-color: #883434;
        }
    }
`;
