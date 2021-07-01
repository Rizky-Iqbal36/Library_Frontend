import React, { RefObject } from "react";
import { useMutation } from "react-query";
import { API } from "@root/config/api";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  // FaUser,
  FaLock,
  FaFacebookSquare,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

//custom module
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
  DescText,
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
import SignUpImage from "@assets/images/book_reading.svg";

interface ISignUpPage {
  containerDiv: RefObject<HTMLDivElement>;
}

const SignUp: React.FC<ISignUpPage> = ({ containerDiv }) => {
  const SignInMode = () => {
    containerDiv.current?.classList.remove("sign-up-mode");
    containerDiv.current?.classList.add("sign-in-mode");
  };

  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email required")
        .email("Invalid format email!"),
      password: Yup.string().required("Password Required").min(8),
    }),
    onSubmit: (values) => {
      signUpAction(values);
    },
  });

  const [signUpAction, { isLoading, error }]: any = useMutation(
    async (values) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(values);
      try {
        const res = await API.post("/auth/register", body, config);
      } catch (err) {
        console.log(err);
      }
    }
  );
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
          <AuthForm onSubmit={handleSubmit}>
            <Title>Sign Up</Title>
            {/* <InputField>
              <LogoInput>
                <FaUser />
              </LogoInput>
              <InputValue type="text" placeholder="Username" />
            </InputField> */}
            <InputField>
              <LogoInput>
                <MdEmail />
              </LogoInput>
              <InputValue
                type="email"
                placeholder="Email"
                {...getFieldProps("email")}
              />
            </InputField>
            {touched.email && errors.email ? (
              <DescText textColor={"red"}>{errors.email}</DescText>
            ) : null}
            <InputField>
              <LogoInput>
                <FaLock />
              </LogoInput>
              <InputValue
                type="password"
                placeholder="Password"
                {...getFieldProps("password")}
              />
            </InputField>
            {touched.password && errors.password ? (
              <DescText textColor={"red"}>{errors.password}</DescText>
            ) : null}
            <Button type="submit">Register</Button>
            <DescText>Or Sign up with social platforms</DescText>
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

export default SignUp;
