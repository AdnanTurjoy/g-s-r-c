import { DateRangePicker as MUIDateRangePicker, DateRange } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';
import { useState } from 'react';

interface DateRangePickerProps {
  onChange: (dateRange: DateRange<Date>) => void;
}

const DateRangePicker = ({ onChange }: DateRangePickerProps) => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

  const handleDateChange = (newValue: DateRange<Date>) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <MUIDateRangePicker
      startText="Start Date"
      endText="End Date"
      value={value}
      onChange={handleDateChange}
      renderInput={(startProps, endProps) => (
        <>
          <TextField {...startProps} />
          <TextField {...endProps} />
        </>
      )}
    />
  );
};

export default DateRangePicker;
