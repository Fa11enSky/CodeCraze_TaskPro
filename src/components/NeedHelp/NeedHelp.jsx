import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { support } from '../../redux/support/operations';

import sprite from '../../assets/svgSprite/iconsSprite.svg';

import {
  NeedHelpInner,
  NeedHelpInnerText,
  NeedHelpInnerForm,
  NeedHelpInnerEmail,
  NeedHelpInnerComment,
  NeedHelpInnerBtn,
  CloseButton,
} from './NeedHelp.styled';

const NeedHelp = ({ onClose }) => {
  const supportSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required!'),
    text: Yup.string().required('Comment is required!'),
  });

  const handleClose = () => {
    onClose();
  };

  const dispatch = useDispatch();

  const handleSubmit = (value, { setSubmit, resetForm }) => {
    setSubmit(true);
    const email = value.email;
    const text = value.text;

    dispatch(
      support({
        email,
        text,
      })
    );
    resetForm();
    setSubmit(false);
  };

  const initialValues = {
    email: '',
    text: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={supportSchema}
      onSubmit={handleSubmit}
    >
      <NeedHelpInner>
        <NeedHelpInnerText className="NeedHelpInner__text">
          Need help
        </NeedHelpInnerText>
        <NeedHelpInnerForm className="NeedHelpInner__form">
          <NeedHelpInnerEmail
            className="NeedHelpInner__email"
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
          />
          <NeedHelpInnerComment
            className="NeedHelpInner__comment"
            id="comment"
            name="comment"
            placeholder="Comment"
          ></NeedHelpInnerComment>
          <NeedHelpInnerBtn className="NeedHelpInner__btn" type="submit">
            Send
          </NeedHelpInnerBtn>
        </NeedHelpInnerForm>
        <CloseButton onClick={handleClose}>
          <use href={`${sprite}#close`} />
        </CloseButton>
      </NeedHelpInner>
    </Formik>
  );
};

export default NeedHelp;
