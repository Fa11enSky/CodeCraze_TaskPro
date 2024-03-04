import '../../../../node_modules/react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import DatePicker from "react-datepicker"
import { format } from 'date-fns';
import "./styles.css"



export const ModifiedDatePicker = ({ onChange }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
        onChange(e)
    };
    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    return (
        <>
            <button className="custom-input" onClick={handleClick}>
                Today, {format(startDate, "MMMM d")}
            </button>
            {isOpen && (
                <DatePicker id='date_picker'
                    minDate={new Date()}
                    calendarStartDay={1}
                    selected={startDate}
                    onChange={handleChange} inline />
            )}
        </>
    );
};