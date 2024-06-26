'use client'
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchRateCalendar } from '../utils/api';
import DateRangePicker from './DateRangePicker';
import RoomCategory from './RoomCategory';
import { DateRange } from "@mui/x-date-pickers-pro"
import { CircularProgress, Typography } from '@mui/material';

const RateCalendar = () => {
	const [dateRange, setDateRange] = useState<DateRange<Date | null>>([null, null]);

	const { data, error, isLoading } = useQuery(
		['rateCalendar', dateRange],
		() => {
			if (dateRange[0] && dateRange[1]) {
				const start_date = dateRange[0].toISOString().split('T')[0];
				const end_date = dateRange[1].toISOString().split('T')[0];
				return fetchRateCalendar(start_date, end_date);
			}
			return Promise.resolve(null);
		},
		{
			enabled: !!dateRange[0] && !!dateRange[1],
		}
	);

	return (
		<div>
			<Typography variant="h4">Rate Calendar</Typography>
			<DateRangePicker onChange={setDateRange} />
			{isLoading && <CircularProgress />}
			{error && <Typography color="error">Error fetching data</Typography>}
			{data?.data?.map((category) => (
				<RoomCategory key={category.id} category={category} />
			))}
		</div>
	);
};

export default RateCalendar;
