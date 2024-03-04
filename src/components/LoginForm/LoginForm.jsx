import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { logIn } from '../../redux/auth/operations';

import LoginSchema from './LoginSchema';
import sprite from '../../assets/svgSprite/iconsSprite.svg';
import {
  FormContainer,
  StyledForm,
  NavContainer,
  InputContainer,
  StyledInput,
  StyledErrorMessage,
  PassInputContainer,
  StyledInputPass,
  ShowHideButton,
  SubButton,
} from './Form.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const email = values.email;
    const password = values.password;

    dispatch(
      logIn({
        email,
        password,
      })
    );

    setSubmitting(false);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <StyledForm>
          <NavContainer>
            <NavLink to="/auth/register">Registration</NavLink>
            <NavLink to="/auth/login">Log In</NavLink>
          </NavContainer>

          <InputContainer>
            <label htmlFor="email" />
            <StyledInput
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <StyledErrorMessage name="email" component="div" />

            <label htmlFor="password" />
            <PassInputContainer>
              <StyledInputPass
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ShowHideButton type="button" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg width="18" height="18" fill="none" className="icon">
                    <use xlinkHref={`${sprite}#icon-vector`} />
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none" className="icon">
                    <use xlinkHref={`${sprite}#icon-eye`} />
                  </svg>
                )}
              </ShowHideButton>
            </PassInputContainer>
            <StyledErrorMessage name="password" component="div" />
          </InputContainer>

          <SubButton type="submit">Log In Now</SubButton>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default LoginForm;
