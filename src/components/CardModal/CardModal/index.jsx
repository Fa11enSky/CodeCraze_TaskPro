import { Formik, Form } from 'formik';
import { useState } from 'react';
import { ModifiedDatePicker } from '../DatePicker';
import {
  CloseButton,
  DescriptionTextArea,
  H3,
  Layout,
  ModalDiv,
  RadioBtn,
  RadioButtonDiv,
  RadioLabel,
  StyledDiv,
  StyledP,
  SubmitButton,
  SubmitSpan,
  TitleInput,
} from './CardModal.styled.js';
import { useDispatch } from 'react-redux';
import { createCard, updateCard } from '../../../redux/boards/operationsCards';

// ** Card modal component
// ** Компонент створює динамічну розмітку модального вікна в залежності від пропсів.
// ** Очікує пропс initialValues, це об'єкт в якому можуть бути наступні змінні:
// **   title - титул картки (пустий рядок за замовч)
// **   description - опис картки (пустий рядок за замовч)
// **   radio - вибір пріорітету таски (варіант без пріорітету за замовч(сірий))
// **   date - об'єкт дати (сьогодняшня дата за замовч)
// **   newCard - булеве значення (true за замовч)

export const CardModal = ({
  initialValues = {
    title: '',
    description: '',
    label: 'without',
    date: new Date(),
  },
  newCard = true,
  onClose,
}) => {
  const { title, description, date, label, _id } = initialValues;

  const [selectedDate, setSelectedDate] = useState(date);
  const dispatch = useDispatch();

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleSubmit = values => {
    const { title, description, label } = values;

    const newCardData = { title, description, label, deadline: selectedDate };

    if (newCard) dispatch(createCard([_id, newCardData]));
    if (!newCard) dispatch(updateCard([_id, newCardData]));
    onClose();
  };

  return (
    <ModalDiv>
      <StyledDiv>
        {newCard ? <H3>Add card</H3> : <H3>Edit card</H3>}
        <CloseButton onClick={onClose}>
          <span></span>
        </CloseButton>
      </StyledDiv>

      <Formik
        initialValues={{ title, description, label }}
        onSubmit={values => handleSubmit(values)}
      >
        <Form>
          <TitleInput id="title" name="title" placeholder="Title" required />
          <DescriptionTextArea
            id="description"
            name="description"
            placeholder="Description"
            component="textarea"

          />

          <Layout>
            <StyledP>Label color</StyledP>
            <RadioButtonDiv>
              <RadioLabel className="blue">
                <RadioBtn type="radio" name="label" value="low" />
                <span></span>
              </RadioLabel>

              <RadioLabel className="red">
                <RadioBtn type="radio" name="label" value="medium" />
                <span></span>
              </RadioLabel>

              <RadioLabel className="green">
                <RadioBtn type="radio" name="label" value="high" />
                <span></span>
              </RadioLabel>

              <RadioLabel className="grey">
                <RadioBtn type="radio" name="label" value="without" />
                <span></span>
              </RadioLabel>
            </RadioButtonDiv>
          </Layout>
          <Layout>
            <StyledP htmlFor="date_picker">Deadline</StyledP>
            <span></span>
            <ModifiedDatePicker
              onChange={handleDateChange}
              date={selectedDate}
            />
          </Layout>
          <SubmitButton type="submit">
            <SubmitSpan className="btn_layout"></SubmitSpan>
            {newCard && <p>Add</p>}
            {!newCard && <p>Edit</p>}
          </SubmitButton>
        </Form>
      </Formik>
    </ModalDiv>
  );
};
