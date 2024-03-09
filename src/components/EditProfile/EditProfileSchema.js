import * as Yup from 'yup';

const EditProfileSchema = Yup.object().shape({
  avatar: Yup.string('Place avatar please'),
  name: Yup.string(),
  email: Yup.string().email('Please enter valid email'),
  password: Yup.string().matches(
    /^(?=.*[a-zA-Z\d])[a-zA-Z\d!@#$%^&*()_+,\-.;:?]{8,64}$/,
    'Password must contain at least 8 symbols'
  ),
});

export default EditProfileSchema;
