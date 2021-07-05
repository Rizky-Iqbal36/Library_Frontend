import Styled from "styled-components";

export const Body = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #131313;
`;

export const Container = Styled.div`
    position: relative;
`;

export const Card = Styled.div`
    position: relative;
    width: 320px;
    height: 450px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0c03c2;
        clip-path: circle(150px at 80% 20%);
        transition: 0.5s ease-in-out;
    }

    &:hover:before{
        clip-path: circle(300px at 80% -20%);
    }

    :after {
        content: "Launch";
        position: absolute;
        top: 40%;
        left: 0%;
        font-size: 5em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255,255,255,0.04);
    }
`;

export const ImageBox = Styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    width: 100%;
    height: 220px;
    transition: 0.5s;
    
    ${Card}:hover & {
        top: 0%;
        transform: translateY(0%);
    }
`;

export const Image = Styled.img`
    width: 260px;
    height: auto;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%); /* rotate(-25deg); */
`;

export const ContentBox = Styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;

    ${Card}:hover & {
        height: 210px;
    }
`;

export const ContentH2 = Styled.h2`
    position: relative;
    font-weight: 600px;
    letter-spacing: 1px;
    color: #fff;
`;

export const ContentSizeSection = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;

    ${Card}:hover & {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }
`;

export const ContentColorSection = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;

    ${Card}:hover & {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.6s;
    }
`;

export const ContentH3 = Styled.h3`
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;

`;

export const ContentButton = Styled.a`
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600px;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
    
    ${Card}:hover & {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.5s;
    }
`;

export const ContentSpan = Styled.span`
    ${ContentSizeSection} & {
        width: 26px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 14px;
        display: inline-block;
        color: #111;
        background: #fff;
        margin: 0 5px;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background: #9bdc28;
        }
    }
    ${ContentColorSection} & {
        width: 20px;
        height: 20px;
        background: #ff0;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;

        &:nth-child(2){
            background: #9bdc28;
        }
        &:nth-child(3){
            background: #03a9f4;
        }
        &:nth-child(4){
            background: #e91e63;
        }
    }
`;
