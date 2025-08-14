export interface Order {
  order_id: number;
  table_id: number | null;
  user_id: number;
  status: 'pending' | 'in_progress' | 'ready' | 'paid' | 'canceled';
  notes?: string | null;
  created_at: string;
}
