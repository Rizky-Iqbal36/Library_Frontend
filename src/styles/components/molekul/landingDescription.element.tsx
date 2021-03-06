import Styled from "styled-components";
import { Container } from "@root/styles/landingPage.element";
import { FormSectionWrapper } from "@styles/components/molekul/form.element";

export const DescriptionWrapper = Styled.div`
    top: 0;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    width:100%;
    height: 100%;

    @media screen and (max-width: 720px){
      flex-direction: column;
    }
`;

export const DescriptionContainer = Styled.div`
    /* position: relative; */
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.75s ease-in-out;
    z-index: 2;
    
    @media screen and (max-width: 992px){
      ${Container}.sign-up-mode ${FormSectionWrapper}.sign-up &{
        transform: translate(50%,25%);
      }

      ${Container}.sign-in-mode ${FormSectionWrapper}.sign-up &{
        transform: translate(350%,25%);
      }

      ${Container}.sign-up-mode ${FormSectionWrapper}.sign-in &{
        transform: translate(-300%,-25%);
      }

      ${Container}.sign-in-mode ${FormSectionWrapper}.sign-in &{
        transform: translate(-50%,-25%);
      }
    }

    @media screen and (max-width: 720px){
      width: 100%;
      ${Container}.sign-up-mode ${FormSectionWrapper}.sign-up &{
        transform: translate(0%,-5%);
      }

      ${Container}.sign-in-mode ${FormSectionWrapper}.sign-up &{
        transform: translate(0%,-175%);
      }

      ${Container}.sign-up-mode ${FormSectionWrapper}.sign-in &{
        transform: translate(0%,245%);
      }

      ${Container}.sign-in-mode ${FormSectionWrapper}.sign-in &{
        transform: translate(0%,70%);
      }
    }
`;

export const ContentWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 10px 0px;
    transition: all 0.75s ease-in-out;

    ${Container}.sign-up-mode ${FormSectionWrapper}.sign-in &{
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
      transform: translateX(110%);
      
      @media screen and (max-width: 720px){
        transform: translateY(145%);
      }
    }

    ${Container}.sign-in-mode ${FormSectionWrapper}.sign-up &{
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
      transform: translateX(-110%);

      @media screen and (max-width: 720px){
        transform: translateY(-75%);
      }
    }
`;

export const DescriptionH3 = Styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
  padding: 5px 0;

  @media screen and (max-width:992px){
    padding: 2.5px 0;
    font-size: 1.25rem;
  }
`;

export const DescriptionP = Styled.p`
  text-align: center;
  max-width: 450px;
  font-size: 1rem;
  padding: 20px 0;

  @media screen and (max-width:992px){
    padding: 5px 0;
    font-size: 0.85rem;
  }
`;

export const ImgBox = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.75s ease-in-out;
    transition-delay: 0.2s;

    ${Container}.sign-up-mode ${FormSectionWrapper}.sign-in &{
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
      transform: translateX(120%);
    }

    ${Container}.sign-in-mode ${FormSectionWrapper}.sign-up &{
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
      transform: translateX(-120%);
    }

    @media screen and (max-width: 720px){
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
`;

export const Image = Styled.img`
    width: 75%;
    height: auto;
    z-index: 2;

    @media screen and (max-width: 992px){
      width: 75%;
    }
`;
