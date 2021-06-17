import Styled from "styled-components";

export const Container = Styled.div`
    position: relative;
    width: 100%;
    background-color:#25274D ;
    min-height: 100vh;
    overflow: hidden;

    :before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #29648A;
        transition: 1s ease-in-out;
        z-index: 1;
        /* right */
        clip-path: polygon(55% 0%, 300% 0%, 290% 100%, 45% 100%);
        /* opacity: 0; */
    }

    &.sign-up-mode:before{
        /* left */
        clip-path: polygon(-100% 0%, 55% 0%, 45% 100%, -100% 100%);
        /* transform: rotate(180deg) */
    }
`;

export const FormWrapper = Styled.div`
    top: 0;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 0;
`;

export const DescriptionWrapper = Styled.div`
    top: 0;
    transform: translateY(-510%);
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 1;
`;

export const SectionContainer = Styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.75s ease-out;
    transition-delay: 1s;

    ${Container}.sign-up-mode &{
        &:nth-child(1){
          /* opacity: 0; */
          transform:translateX(-100%)
        }
        &:nth-child(2){
          transition-delay: 0.75s;
        }
    }
    ${Container}.sign-in-mode &{
        &:nth-child(1){
          transition-delay: 0.75s;
        }
        &:nth-child(2){
          /* opacity: 0; */
          transform:translateX(100%)
        }
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
    transition: all 0.75s ease-in-out;

    ${Container}.sign-up-mode &{
        &:nth-child(1){
        }
        &:nth-child(2){
          opacity: 0;
          transform: translateX(100%);
          pointer-events: none;
        }
    }
    ${Container}.sign-in-mode &{
        &:nth-child(1){
          opacity: 0;
          transform: translateX(-100%);
          pointer-events: none;
        }
        &:nth-child(2){
        }
    }
`;

export const SignInForm = Styled.form`
    top: 0;
    transform: translateY(25%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const SignUpForm = Styled.form`
    top: 0;
    transform: translateY(15%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const Title = Styled.h2`
    font-size: 2.2rem;
    color: #2E9CCA;
    margin-bottom: 10px;
    text-align: center;
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
    padding: 0 0.4rem;
    position: relative;
`;

export const LogoInput = Styled.div`
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 1.1rem;
`;

export const InputValue = Styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
`;

export const SocialText = Styled.p`
  padding: 0.7rem 0;
  font-size: 1rem;
  color: #fff;
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
  margin: 0 0.45rem;
  color:#AAABB8;
  border-radius: 50%;
  border: 2px solid #464866;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;

  &:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
`;

export const Button = Styled.button`
  width: 150px;
  background-color: #2E9CCA;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-style: solid;
  border-width: thin;

  &:hover {
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    color:#2E9CCA;
  }
`;

export const OrdinaryButton = Styled.div`
  width: 150px;
  background-color: #2E9CCA;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-style: solid;
  border-width: thin;
  text-align: center;
  vertical-align: middle;
  line-height: 49px;

  &:hover {
    background-color: transparent;
    transition: all 0.2s ease-in-out;
  }
`;
