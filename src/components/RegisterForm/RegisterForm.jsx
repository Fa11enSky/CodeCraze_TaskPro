import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import RegisterSchema from './RegisterSchema';
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
} from '../LoginForm/Form.styled';
import sprite from '../../assets/svgSprite/iconsSprite.svg';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const name = values.name;
    const email = values.email;
    const password = values.password;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    setSubmitting(false);
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <StyledForm autoComplete="on">
          <NavContainer>
            <NavLink to="/auth/register">Registration</NavLink>
            <NavLink to="/auth/login">Log In</NavLink>
          </NavContainer>

          <InputContainer>
            <label htmlFor="name" />
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <StyledErrorMessage name="name" component="div" />

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

          <SubButton type="submit">Register Now</SubButton>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default RegisterForm;
