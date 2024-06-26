
'use client';

import QueryProvider from './QueryProvider';
import RateCalendar from '@/components/RateCalendar';

const Page = () => (
  <QueryProvider>
    <RateCalendar />
  </QueryProvider>
);

export default Page;
