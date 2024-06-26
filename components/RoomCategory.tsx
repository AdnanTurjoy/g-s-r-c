'use client'

import { IRoomCategory } from '../types/api';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

interface RoomCategoryProps {
  category: IRoomCategory;
}

const RoomCategory = ({ category }: RoomCategoryProps) => {
  return (
    <div>
      <Typography variant="h6">{category.name}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Sellable</TableCell>
            <TableCell>Available</TableCell>
            <TableCell>Booked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.inventory_calendar.map((inventory) => (
            <TableRow key={inventory.id}>
              <TableCell>{inventory.date}</TableCell>
              <TableCell>{inventory.status ? 'Yes' : 'No'}</TableCell>
              <TableCell>{inventory.available}</TableCell>
              <TableCell>{inventory.booked}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {category.rate_plans.map((ratePlan) => (
        <div key={ratePlan.id}>
          <Typography variant="subtitle1">{ratePlan.name}</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Min Length of Stay</TableCell>
                <TableCell>Reservation Deadline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ratePlan.calendar.map((rate) => (
                <TableRow key={rate.id}>
                  <TableCell>{rate.date}</TableCell>
                  <TableCell>{rate.rate}</TableCell>
                  <TableCell>{rate.min_length_of_stay}</TableCell>
                  <TableCell>{rate.reservation_deadline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default RoomCategory;
