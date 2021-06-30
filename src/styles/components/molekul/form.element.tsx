import Styled from "styled-components";
import { Container } from "@styles/landingPage.element";

export const FormSectionWrapper = Styled.div`
    position: absolute;
`;

export const FormContentWrapper = Styled.div`
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 992px){
      flex-direction: column;
    }
`;

export const AuthWrapper = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.75s ease-in-out;
    transition-delay: 0.6s;

    ${Container}.sign-in-mode ${FormSectionWrapper}.sign-up &{
      transform: translateX(150%);
      transition-delay: 0.5s;
    }
    
    ${Container}.sign-up-mode ${FormSectionWrapper}.sign-in &{
      transform: translateX(-150%);
      transition-delay: 0.5s;
    }

    @media screen and (max-width: 992px){
      ${Container}.sign-in-mode ${FormSectionWrapper}.sign-in &{
        transform: translate(29%,28%);
      }

      ${Container}.sign-up-mode ${FormSectionWrapper}.sign-in &{
        transform: translate(129%,28%);
      }

      ${Container}.sign-up-mode ${FormSectionWrapper}.sign-up &{
        transform: translate(-29%,-28%);
      }

      ${Container}.sign-in-mode ${FormSectionWrapper}.sign-up &{
        transform: translate(-129%,-28%);
      }
    }

    @media screen and (max-width: 720px){
      ${Container}.sign-in-mode ${FormSectionWrapper}.sign-in &{
        transform: translate(0%,25%);
      }

      ${Container}.sign-up-mode ${FormSectionWrapper}.sign-in &{
        transform: translate(0%,-175%);
        transition-delay: 0.45s;
      }

      ${Container}.sign-up-mode ${FormSectionWrapper}.sign-up &{
        transform: translate(0%,-15%);
      }

      ${Container}.sign-in-mode ${FormSectionWrapper}.sign-up &{
        transform: translate(0%,185%);
      }

      @media screen and (min-height: 820px){
        ${Container}.sign-up-mode ${FormSectionWrapper}.sign-in &{
          transition-delay: 0.35s;
        }

        ${Container}.sign-in-mode ${FormSectionWrapper}.sign-up &{
          transition-delay: 0.39s;
        }
      }
    }
`;

export const AuthForm = Styled.form`
    top: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    transition: 0.5s;
`;

export const Title = Styled.h2`
    font-size: 40px;
    color: #2E9CCA;
    margin-bottom: 10px;
    text-align: center;

    @media screen and (max-width: 992px){
      font-size: 30px;
    }
`;

export const InputField = Styled.div`
    max-width: 380px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 10px 0;
    height: 55px;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 8px;
    position: relative;

    @media screen and (max-width: 992px){
      width: 80%;
      height: 45px;
    }
`;

export const LogoInput = Styled.div`
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 20px;

    @media screen and (max-width: 992px){
      font-size: 15px;
      line-height: 45px;
    }
`;

export const InputValue = Styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 20px;
  color: #333;

  @media screen and (max-width: 992px){
    font-size: 15px;
  }
`;

export const SocialText = Styled.p`
  padding: 7px 0;
  font-size: 15px;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 992px){
    font-size: 13px;
  }
`;

export const SocialMedia = Styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = Styled.a`
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7px;
  color:#AAABB8;
  border-radius: 50%;
  border: 2px solid #464866;
  text-decoration: none;
  font-size: 17px;
  transition: 0.3s;

  &:hover {
    color: #4481eb;
    border-color: #4481eb;
  }

  @media screen and (max-width: 992px){
    font-size: 13px;
    height: 42px;
    width: 42px;
  }
`;
