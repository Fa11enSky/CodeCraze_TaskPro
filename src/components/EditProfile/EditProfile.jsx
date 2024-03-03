import { useFormik } from 'formik';
import Modal from 'components/Modal/Modal';
import { EditProfileContent } from './EditProfile.styled';

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
    <Modal>
      <EditProfileContent>
        <p>Edit Profile</p>

        <div>
          <img src="" alt="User avatar" />
        </div>
        <button>
          <svg>
            <use />
          </svg>
        </button>

        <form onSubmit={formik.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="xxx"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="xxx"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="xxx"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button type="submit">Send</button>
        </form>
      </EditProfileContent>
    </Modal>
  );
};

export default EditProfile;
