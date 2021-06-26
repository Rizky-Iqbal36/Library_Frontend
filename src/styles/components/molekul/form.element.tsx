import Styled from "styled-components";

export const AuthForm = Styled.form`
    top: 0;
    z-index: 2;
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
