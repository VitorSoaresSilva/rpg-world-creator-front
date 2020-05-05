import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

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

        button {
            margin: 5px 0 0;
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

    span {
        color: red;
        margin: 0 0 10px;
    }
`;
