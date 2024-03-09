import { Field, Formik } from 'formik';
import { useSelector } from 'react-redux';
//import Modal from 'components/Modal/Modal';
import {
  AvatarContainer,
  AvatarImageContainer,
  EditProfileContent,
  EditProfileForm,
  InputContainer,
  PasswordInputContainer,
  ShowHideButton,
  StyledErrorMessage,
  SubmitButton,
  UploadAvatarButton,
} from './EditProfile.styled';
import sprite from '../../assets/svgSprite/iconsSprite.svg';
import { selectUser } from '../../redux/auth/selectors';
import EditProfileSchema from './EditProfileSchema';
import { useState } from 'react';

const EditProfile = () => {
  const user = useSelector(selectUser);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const initialValues = {
    avatar: null,
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values));
    resetForm();
  };

  return (
    // <Modal>
    <EditProfileContent>
      <h2>Edit Profile</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={EditProfileSchema}
        onSubmit={handleSubmit}
      >
        <EditProfileForm autoComplete="off" noValidate>
          <InputContainer data-avatar>
            <AvatarContainer>
              <AvatarImageContainer>
                {user.avatar ? (
                  <img src="" alt="User avatar" />
                ) : (
                  <svg>
                    <use href={`${sprite}#icon-user_default`} />
                  </svg>
                )}
              </AvatarImageContainer>

              <Field
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                hidden
              />
              <label htmlFor="avatar">
                <UploadAvatarButton>
                  <svg>
                    <use href={`${sprite}#plus`} />
                  </svg>
                </UploadAvatarButton>
              </label>
            </AvatarContainer>
            <StyledErrorMessage name="avatar" component="span" />
          </InputContainer>

          <InputContainer>
            <Field id="name" name="name" type="text" placeholder="Name" />
            <StyledErrorMessage name="name" component="span" />
          </InputContainer>

          <InputContainer>
            <Field id="email" name="email" type="email" placeholder="Email" />
            <StyledErrorMessage name="email" component="span" />
          </InputContainer>

          <InputContainer data-last-child>
            <PasswordInputContainer>
              <Field
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <ShowHideButton type="button" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg width="18" height="18" fill="none">
                    <use href={`${sprite}#icon-vector`} />
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none">
                    <use href={`${sprite}#icon-eye`} />
                  </svg>
                )}
              </ShowHideButton>
            </PasswordInputContainer>
            <StyledErrorMessage name="password" component="span" />
          </InputContainer>

          <SubmitButton type="submit">Send</SubmitButton>
        </EditProfileForm>
      </Formik>
    </EditProfileContent>
    // </Modal>
  );
};

export default EditProfile;
