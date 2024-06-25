export interface IRoomInventoryCalender {
	id: string;
	date: string;
	available: number;
	status: boolean;
	booked: number;
  }
  
  export interface IRateCalendar {
	id: string;
	date: string;
	rate: number;
	min_length_of_stay: number;
	reservation_deadline: number;
  }
  
  export interface IRatePlan {
	id: number;
	name: string;
	calendar: IRateCalendar[];
  }
  
  export interface IRoomCategory {
	id: string;
	name: string;
	occupancy: number;
	inventory_calendar: IRoomInventoryCalender[];
	rate_plans: IRatePlan[];
  }
  
  export interface ApiResponse {
	code: string;
	message: string;
	data: IRoomCategory[];
  }
  