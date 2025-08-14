export interface Order {
  order_id: number;
  table_id?: number;
  user_id: number;
  status: 'pending' | 'in_progress' | 'ready' | 'paid' | 'canceled';
  notes?: string;
  created_at: string;
}
