import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CommonCalender = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      minDate={new Date('2000-01-01')}
      maxDate={new Date()}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    />
  );
};

export default CommonCalender;
