import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { API, setAuthToken } from "@root/config/api";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  FaUser,
  FaLock,
  FaFacebookSquare,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { userContext } from "@root/context/userContext";
import { ActionLoading } from "@components/atom/loading";
import AlertModal from "@components/atom/alertModal";
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
} from "@styles/components/molekul/form.element";
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

import { IAuthPage, IErrMessage } from "@root/interfaces";

const SignUp: React.FC<IAuthPage> = ({ containerDiv }) => {
  const SignInMode = () => {
    containerDiv.current?.classList.remove("sign-up-mode");
    containerDiv.current?.classList.add("sign-in-mode");
  };
  const [errorMsg, setErrorMsg] = useState<IErrMessage>();
  const [showAlert, setShowAlert] = useState(false);
  const [state, dispatch] = useContext(userContext);
  const history = useHistory();

  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email required")
        .email("Invalid format email!"),
      userName: Yup.string().required("Username Required").min(3),
      password: Yup.string().required("Password Required").min(8),
    }),
    onSubmit: (values) => {
      signUpAction(values);
    },
  });

  const [signUpAction, { isLoading }]: any = useMutation(async (values) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(values);
    try {
      const res = await API.post("/auth/register", body, config);
      state.payload = res.data.result;
      state.status = "REGISTER_USER";
      dispatch(state);
      setAuthToken(res.data.result.token);
      return history.push(`/userhome`);
    } catch (err: any) {
      setErrorMsg(err.response.data.errors);
      setShowAlert(true);
    }
  });
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
            <InputField>
              <LogoInput>
                <FaUser />
              </LogoInput>
              <InputValue
                type="text"
                placeholder="Username"
                {...getFieldProps("userName")}
              />
            </InputField>
            {touched.userName && errors.userName ? (
              <DescText textColor={"red"}>{errors.userName}</DescText>
            ) : null}
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
            <Button type="submit">
              {isLoading ? <ActionLoading /> : "Register"}
            </Button>
            <DescText padding={"10px 0"}>
              Or Sign up with social platforms
            </DescText>
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
      <AlertModal show={showAlert} onHide={() => setShowAlert(false)}>
        <p>{errorMsg?.flag}</p>
        <p>{errorMsg?.message}</p>
      </AlertModal>
    </FormSectionWrapper>
  );
};

export default SignUp;
