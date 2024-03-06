import { useFormik } from 'formik';
import Modal from 'components/Modal/Modal';
import {
  AvatarContainer,
  AvatarImageContainer,
  EditProfileContent,
  EditProfileForm,
  UploadAvatarButton,
} from './EditProfile.styled';
import sprite from '../../assets/svgSprite/iconsSprite.svg';

const EditProfile = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    // <Modal>
    <EditProfileContent>
      <h2>Edit Profile</h2>

      <EditProfileForm onSubmit={formik.handleSubmit}>
        <AvatarContainer>
          <AvatarImageContainer>
            <img src="" alt="User avatar" />
          </AvatarImageContainer>

          <input
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

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          // value={formik.values.name}
        />

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          // value={formik.values.email}
        />

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          // value={formik.values.password}
        />

        <button type="submit">Send</button>
      </EditProfileForm>
    </EditProfileContent>
    // </Modal>
  );
};

export default EditProfile;
