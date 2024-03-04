import { Formik, Form } from 'formik';
import { useState } from 'react';
import { ModifiedDatePicker } from '../DatePicker';
import { DescriptionTextArea, H3, Layout, ModalDiv, RadioBtn, RadioButtonDiv, RadioLabel, StyledP, SubmitButton, SubmitSpan, TitleInput } from './AddCardModal.styled.js'

export const AddCardModal = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <ModalDiv>
            <H3>Add card</H3>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    radio: '4'
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify({ values, selectedDate }, null, 2));
                }}
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
                        />
                    </Layout>
                    <SubmitButton type="submit"><SubmitSpan className='btn_layout'></SubmitSpan><p>Add</p></SubmitButton>
                </Form>
            </Formik>
        </ModalDiv>
    );
};