import { useFormik } from 'formik';

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
    <div>
      <p>Edit Profile</p>

      <div>
        <img alt="User avatar" />
      </div>

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
    </div>
  );
};

export default EditProfile;
