import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar({ onStartDateChange, onEndDateChange, dateError }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formatDate = (date) =>
    date
      ? `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(
          2,
          '0'
        )}월 ${String(date.getDate()).padStart(2, '0')}일`
      : '----년 --월 --일'; // 화면에 보여줄 날짜 형식 변환

  const formatServerDate = (date) =>
    date
      ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
          2,
          '0'
        )}-${String(date.getDate()).padStart(2, '0')}T00:00:00`
      : ''; // 서버에 보낼 날짜 형식 변환

  const onChange = (dates) => {
    const [startDate, endDate] = dates;
    setStartDate(startDate);
    setEndDate(endDate);
    onStartDateChange(formatServerDate(startDate));
    onEndDateChange(formatServerDate(endDate));
  };

  return (
    <CustomCalendarContainer>
      {dateError && (
        <ErrorMessage>시작 날짜와 종료 날짜를 선택하세요.</ErrorMessage>
      )}
      <DateBox>
        {formatDate(startDate)} ~ {formatDate(endDate)}
      </DateBox>
      <br />
      <StyledDatePicker
        selected={startDate}
        onChange={onChange}
        minDate={new Date()}
        maxDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        selectsDisabledDaysInRange
        inline
        showDisabledMonthNavigation
      />
    </CustomCalendarContainer>
  );
}

export default Calendar;

const CustomCalendarContainer = styled(CalendarContainer)`
  padding: 10px 0;
  text-align: left;
`;

const DateBox = styled.div`
  padding-bottom: 1rem;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  text-align: center;
`;
const StyledDatePicker = styled(DatePicker)``;

const ErrorMessage = styled.div``;
