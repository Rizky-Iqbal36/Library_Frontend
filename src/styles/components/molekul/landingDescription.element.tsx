import Styled from "styled-components";
import { Container } from "@root/styles/landingPage.element";

export const DescriptionWrapper = Styled.div`
    top: 0;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    z-index: 1;
    transform: translateY(10%);
    width:100%;

    @media screen and (max-width: 720px){
      flex-direction: column;
    }
`;

export const DescriptionContainer = Styled.div`
    /* position: relative; */
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all 0.75s ease-in-out;

    ${Container}.sign-up-mode ${DescriptionContainer}.sign-up &{
      opacity: 0;
      transform: translateX(100%);
      pointer-events: none;
      visibility: hidden;

      @media screen and (max-width: 720px){
        transform: translateY(-800%);
      }
    }

    ${Container}.sign-in-mode ${DescriptionContainer}.sign-in &{
        opacity: 0;
        transform: translateX(-100%);
        pointer-events: none;
        visibility: hidden;

        @media screen and (max-width: 720px){
          transform: translateY(100%);
        }

        @media screen and (max-width: 720px){
        transform: translateY(1000%);
      }
    }

    @media screen and (max-width: 720px){
      ${Container}.sign-in-mode ${DescriptionContainer}.sign-up &{
        transform: translateY(-100%);
      }
      ${Container}.sign-up-mode ${DescriptionContainer}.sign-in &{
        transform: translateY(275%);
      }
    }
`;

export const DescriptionH3 = Styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
  padding: 5px 0;
`;

export const DescriptionP = Styled.p`
  text-align: center;
  max-width: 450px;
  font-size: 15px;
  padding: 20px 0;

  @media screen and (max-width: 720px){
    font-size: 12px;
    padding: 15px 0;
  }
`;

export const ImgBox = Styled.div`
    position: absolute;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transform: translate(125px, 40px); */
    transition: all 0.75s ease-in-out;
    transition-delay: 0.2s;
    top: 120%;

    ${Container}.sign-up-mode ${DescriptionContainer}.sign-up &{
      opacity: 0;
      transform: translateX(100%);
      pointer-events: none;
      visibility: hidden;
    }

    ${Container}.sign-in-mode ${DescriptionContainer}.sign-in &{
      opacity: 0;
      transform: translateX(-100%);
      pointer-events: none;
      visibility: hidden;
    }
`;

export const Image = Styled.img`
    width: 35%;
    height: auto;
    position: absolute;
    top: 120%;
    transition: all 0.75s ease-in-out;

    @media screen and (max-width: 992px){
      width: 40%;
    }

    @media screen and (max-width: 720px){
      opacity: 0;
      pointer-events: none;
    }
`;
