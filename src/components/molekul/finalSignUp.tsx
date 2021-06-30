import React, { RefObject } from "react";
import {
  AuthForm,
  AuthWrapper,
  FormSectionWrapper,
  FormContentWrapper,
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
import { MdEmail } from "react-icons/md";
import SignUpImage from "@assets/images/book_reading.svg";

interface ISignUpPage {
  containerDiv: RefObject<HTMLDivElement>;
}

const FinalSignUp: React.FC<ISignUpPage> = ({ containerDiv }) => {
  const SignInMode = () => {
    containerDiv.current?.classList.remove("sign-up-mode");
    containerDiv.current?.classList.add("sign-in-mode");
  };
  return (
    <FormSectionWrapper className="sign-up">
      <FormContentWrapper>
        <DescriptionContainer>
          <ContentWrapper>
            <DescriptionH3>One of us ?</DescriptionH3>
            <DescriptionP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </DescriptionP>
            <OrdinaryButton
              onClick={() => {
                SignInMode();
              }}
            >
              Sign In
            </OrdinaryButton>
          </ContentWrapper>
          <ImgBox>
            <Image src={SignUpImage} />
          </ImgBox>
        </DescriptionContainer>
        <AuthWrapper>
          <AuthForm>
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
          </AuthForm>
        </AuthWrapper>
      </FormContentWrapper>
    </FormSectionWrapper>
  );
};

export default FinalSignUp;
