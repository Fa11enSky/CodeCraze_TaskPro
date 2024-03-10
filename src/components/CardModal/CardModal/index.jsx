import { Formik, Form } from 'formik';
import { useState } from 'react';
import { ModifiedDatePicker } from '../DatePicker';
import { BackdropDiv, CloseButton, DescriptionTextArea, H3, Layout, ModalDiv, RadioBtn, RadioButtonDiv, RadioLabel, StyledDiv, StyledP, SubmitButton, SubmitSpan, TitleInput } from './CardModal.styled.js'



// ** Card modal component
// ** Компонент створює динамічну розмітку модального вікна в залежності від пропсів.
// ** Очікує пропс initialValues, це об'єкт в якому можуть бути наступні змінні:
// **   title - титул картки (пустий рядок за замовч)
// **   description - опис картки (пустий рядок за замовч)
// **   radio - вибір пріорітету таски (варіант без пріорітету за замовч(сірий))
// **   date - об'єкт дати (сьогодняшня дата за замовч)
// **   newCard - булеве значення (true за замовч)



export const CardModal = ({ initialValues = { title: '', description: '', radio: "4", date: new Date(), newCard: "true" }, onClose, onSubmit }) => {
    const { title, description, date, radio, newCard } = initialValues

    const [selectedDate, setSelectedDate] = useState(date);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleSubmit = async (values) => {
        onSubmit(values, selectedDate)
    }

    return (
        <BackdropDiv onClick={onClose}>
            <ModalDiv>
                {newCard && <StyledDiv>
                    <H3>Add card</H3>
                    <CloseButton onClick={onClose}>
                        <span></span>
                    </CloseButton></StyledDiv>}
                {!newCard && <H3>Edit card</H3>}

                <Formik
                    initialValues={{ title, description, radio }}
                    onSubmit={(values) => handleSubmit(values)}
                >

                    <Form>
                        <TitleInput id="title" name="title" placeholder="Title" />
                        <DescriptionTextArea id="description" name="description" placeholder="Description" component="textarea" />

                        <Layout>
                            <StyledP >Label color</StyledP>
                            <RadioButtonDiv>

                                <RadioLabel className="blue">
                                    <RadioBtn
                                        type="radio"
                                        name="radio"
                                        value="1"
                                    /><span></span>
                                </RadioLabel>

                                <RadioLabel className="red">
                                    <RadioBtn
                                        type="radio"
                                        name="radio"
                                        value="2"
                                    /><span></span>
                                </RadioLabel>

                                <RadioLabel className="green">
                                    <RadioBtn
                                        type="radio"
                                        name="radio"
                                        value="3"
                                    /><span></span>
                                </RadioLabel>

                                <RadioLabel className="grey">
                                    <RadioBtn
                                        type="radio"
                                        name="radio"
                                        value="4"
                                    /><span></span>
                                </RadioLabel>
                            </RadioButtonDiv>

                        </Layout>
                        <Layout>
                            <StyledP htmlFor="date_picker">Deadline</StyledP>
                            <ModifiedDatePicker
                                onChange={handleDateChange}
                                date={selectedDate}
                                newCard={newCard}
                            />
                        </Layout>
                        <SubmitButton type="submit">
                            <SubmitSpan className='btn_layout'></SubmitSpan>
                            {newCard && <p>Add</p>}
                            {!newCard && <p>Edit</p>}
                        </SubmitButton>
                    </Form>
                </Formik>
            </ModalDiv>
        </BackdropDiv>
    );
};