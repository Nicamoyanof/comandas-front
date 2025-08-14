export interface Ticket {
  ticket_id: number;
  order_id: number;
  total: number;
  payment_method: 'cash' | 'card' | 'qr' | 'account_credit';
  issued_at: string;
}
