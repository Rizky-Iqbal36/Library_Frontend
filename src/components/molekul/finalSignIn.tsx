import React, { RefObject } from "react";
import {
  FormSectionWrapper,
  FormContentWrapper,
  AuthForm,
  AuthWrapper,
  InputField,
  InputValue,
  LogoInput,
  SocialIcon,
  SocialMedia,
  SocialText,
  Title,
} from "@root/styles/components/molekul/form.element";
import {
  DescriptionContainer,
  ContentWrapper,
  DescriptionH3,
  DescriptionP,
  Image,
  ImgBox,
} from "@styles/components/molekul/landingDescription.element";
import { Button, OrdinaryButton } from "@styles/components/atom/button.element";
import {
  FaUser,
  FaLock,
  FaFacebookSquare,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import SignInImage from "@assets/images/book_lover.svg";

interface ISignInPage {
  containerDiv: RefObject<HTMLDivElement>;
}

const FinalSignIn: React.FC<ISignInPage> = ({ containerDiv }) => {
  const SignUpMode = () => {
    containerDiv.current?.classList.remove("sign-in-mode");
    containerDiv.current?.classList.add("sign-up-mode");
  };
  return (
    <FormSectionWrapper className="sign-in">
      <FormContentWrapper>
        <AuthWrapper>
          <AuthForm>
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
          </AuthForm>
        </AuthWrapper>
        <DescriptionContainer>
          <ContentWrapper>
            <DescriptionH3>New here ?</DescriptionH3>
            <DescriptionP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </DescriptionP>
            <OrdinaryButton
              onClick={() => {
                SignUpMode();
              }}
            >
              Sign Up
            </OrdinaryButton>
          </ContentWrapper>
          <ImgBox>
            <Image src={SignInImage} />
          </ImgBox>
        </DescriptionContainer>
      </FormContentWrapper>
    </FormSectionWrapper>
  );
};

export default FinalSignIn;
