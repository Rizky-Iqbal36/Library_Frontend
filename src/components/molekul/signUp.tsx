import React from "react";
import {
  AuthForm,
  InputField,
  InputValue,
  LogoInput,
  SocialIcon,
  SocialMedia,
  SocialText,
  Title,
} from "@root/styles/components/molekul/form.element";
import { Button } from "@styles/components/atom/button.element";
import {
  FaUser,
  FaLock,
  FaFacebookSquare,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SignUp = () => {
  return (
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
  );
};

export default SignUp;
