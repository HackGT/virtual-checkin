import styled from 'styled-components';

export const TextBox = styled.input`
    width: 200px;
    margin: 8px;
    padding: 8px;
    border-radius: 4px;
`

export const IFrameHolder = styled<any, any>("div")`
    width: 70%;
    height: 720px;
    position: absolute;
    display: ${props => props.show ? "inline-block" : "none"}
    top: 50px;
    right: 20px;
`

export const JoiningMessage = styled.div`
    width: 300px;
    text-align: center;
    margin-top: 250px;
    font-size: 26px;
    font-style: italic;
    white-space: pre-wrap;
`