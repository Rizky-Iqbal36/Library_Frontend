import React from "react";
import {
  LandingContainer,
  FormContainer,
  FormContent,
  SignInForm,
  Title,
  InputField,
  LogoInput,
  InputValue,
  SocialText,
  SocialMedia,
  SocialIcon,
  Button,
  SignUpForm,
} from "@styles/landingPage.element";
import {
  FaUser,
  FaLock,
  FaFacebookSquare,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LandingPage = () => {
  return (
    <LandingContainer>
      <FormContainer>
        <FormContent>
          <SignInForm action="#">
            <Title>Sign in</Title>
            <InputField>
              {" "}
              <LogoInput>
                <FaUser />
              </LogoInput>
              <InputValue type="text" placeholder="Username" />
            </InputField>
            <InputField>
              {" "}
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
          <SignUpForm>
            <Title>Sign up</Title>
            <InputField>
              {" "}
              <LogoInput>
                <FaUser />
              </LogoInput>
              <InputValue type="text" placeholder="Username" />
            </InputField>
            <InputField>
              {" "}
              <LogoInput>
                <MdEmail />
              </LogoInput>
              <InputValue type="email" placeholder="Email" />
            </InputField>
            <InputField>
              {" "}
              <LogoInput>
                <FaLock />
              </LogoInput>
              <InputValue type="password" placeholder="Password" />
            </InputField>
            <Button type="submit">Sign up</Button>
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
        </FormContent>
      </FormContainer>
    </LandingContainer>
  );
};

export default LandingPage;
