import React from "react";
import {
  Container,
  SectionContainer,
  FormWrapper,
  DescriptionWrapper,
  SignInForm,
  Title,
  InputField,
  InputValue,
  LogoInput,
  Button,
  SocialIcon,
  SocialMedia,
  SocialText,
  SignUpForm,
  OrdinaryButton,
  DescriptionContainer,
} from "@styles/finalLandingPage.element";
import {
  FaUser,
  FaLock,
  FaFacebookSquare,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const finalLandingPage = () => {
  let containerElement: Element;

  document.addEventListener("DOMContentLoaded", function () {
    containerElement = document.querySelector(Container.toString()) as Element;
  });

  const SignUpMode = () => {
    containerElement.classList.remove("sign-in-mode");
    containerElement.classList.add("sign-up-mode");
  };

  const SignInMode = () => {
    containerElement.classList.remove("sign-up-mode");
    containerElement.classList.add("sign-in-mode");
  };

  return (
    <Container className="sign-in-mode">
      <FormWrapper>
        <SectionContainer>
          <SignInForm>
            <Title>Sign in</Title>
            <InputField>
              <LogoInput>
                <FaUser />
              </LogoInput>
              <InputValue type="text" placeholder="Username" />
            </InputField>
            <InputField>
              <LogoInput>
                <FaLock />
              </LogoInput>
              <InputValue type="password" placeholder="Password" />
            </InputField>
            <Button type="submit">Login</Button>
            <SocialText>Or Sign in with social platforms</SocialText>
            <SocialMedia>
              <SocialIcon href="#">
                <FaFacebookSquare />
              </SocialIcon>
              <SocialIcon href="#">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#">
                <FaGoogle />
              </SocialIcon>
              <SocialIcon href="#">
                <FaLinkedin />
              </SocialIcon>
            </SocialMedia>
          </SignInForm>
        </SectionContainer>
        <SectionContainer>
          <SignUpForm>
            <Title>Sign Up</Title>
            <InputField>
              <LogoInput>
                <FaUser />
              </LogoInput>
              <InputValue type="text" placeholder="Username" />
            </InputField>
            <InputField>
              <LogoInput>
                <MdEmail />
              </LogoInput>
              <InputValue type="email" placeholder="Email" />
            </InputField>
            <InputField>
              <LogoInput>
                <FaLock />
              </LogoInput>
              <InputValue type="password" placeholder="Password" />
            </InputField>
            <Button type="submit">Register</Button>
            <SocialText>Or Sign up with social platforms</SocialText>
            <SocialMedia>
              <SocialIcon href="#">
                <FaFacebookSquare />
              </SocialIcon>
              <SocialIcon href="#">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#">
                <FaGoogle />
              </SocialIcon>
              <SocialIcon href="#">
                <FaLinkedin />
              </SocialIcon>
            </SocialMedia>
          </SignUpForm>
        </SectionContainer>
      </FormWrapper>
      <DescriptionWrapper>
        <DescriptionContainer>
          <OrdinaryButton onClick={SignInMode}>Sign In</OrdinaryButton>
          <p>apa yang akan terjadi jika</p>
        </DescriptionContainer>
        <DescriptionContainer>
          <OrdinaryButton onClick={SignUpMode}>Sign Up</OrdinaryButton>
          <p>apa yang akan terjadi jika aku melakukan ini dan itu</p>
        </DescriptionContainer>
      </DescriptionWrapper>
    </Container>
    // <DescriptionWrapper>
    //   <DescriptionContainer>
    //     <OrdinaryButton onClick={SignInMode}>Sign In</OrdinaryButton>
    //     <p>apa yang akan terjadi jika</p>
    //   </DescriptionContainer>
    //   <DescriptionContainer>
    //     <OrdinaryButton onClick={SignUpMode}>Sign Up</OrdinaryButton>
    //     <p>apa yang akan terjadi jika aku melakukan ini dan itu</p>
    //   </DescriptionContainer>
    // </DescriptionWrapper>
  );
};

export default finalLandingPage;
