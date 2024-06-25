import axios from 'axios';

const API_URL = 'https://api.bytebeds.com/api/v1/property/1/room/rate-calendar/assessment';

export const fetchRateCalendar = async (start_date: string, end_date: string) => {
  const response = await axios.get(API_URL, {
    params: {
      start_date,
      end_date
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  return response.data;
};
