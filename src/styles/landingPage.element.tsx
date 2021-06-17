import styled from "styled-components";
import Styled from "styled-components";

export const LandingContainer = Styled.div`
    position: relative;
    width: 100%;
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;
    :before{
      content: "";
      position: absolute;
      height: 2000px;
      width: 2000px;
      top: -10%;
      right: 48%;
      transform: translateY(-50%);
      background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
      transition: 1.8s ease-in-out;
      border-radius: 50%;
      z-index: 6;
    }
`;

export const FormContainer = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const FormContent = Styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
`;

export const SignInForm = Styled.form`
    z-index: 2;
`;

export const Title = Styled.h2`
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
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

export const SocialText = styled.p`
  padding: 0.7rem 0;
  font-size: 1rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 2px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;

  &:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
`;

export const Button = styled.button`
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #4d84e2;
  }
`;

export const SignUpForm = Styled.div`
  opacity: 0;
  z-index: 1;
`;

export const PanelContainer = Styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const LeftPanel = Styled.div`
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
`;

export const RightPanel = Styled.div`
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
`;

export const PanelContent = Styled.div`
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
`;

export const PanelH3 = Styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
`;

export const PanelP = Styled.p`
  font-size: 0.95rem;
  padding: 0.7rem 0;
`;

export const ButtonTransparent = Styled.button`
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const RightPanelContent = Styled.div`
  transform: translateX(800px);
`;
