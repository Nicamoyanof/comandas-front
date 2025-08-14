export interface RestaurantTable {
  table_id: number;
  table_number: number;
  status: 'free' | 'occupied' | 'reserved' | 'waiting_payment';
  section?: string | null;
}
