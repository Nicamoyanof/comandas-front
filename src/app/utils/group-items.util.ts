import { OrderDetail } from '../models/order-detail.model';

export interface GroupedItem {
  id: number;
  name: string;
  qty: number;
  price: number;
  subtotal: number;
}

export function groupItems(details: (OrderDetail & { product?: { name: string; price: number } })[]): GroupedItem[] {
  const map = new Map<number, GroupedItem>();
  for (const d of details) {
    const existing = map.get(d.product_id);
    const name = d.product?.name ?? '';
    const price = d.product?.price ?? 0;
    if (existing) {
      existing.qty += d.quantity;
      existing.subtotal = existing.qty * existing.price;
    } else {
      map.set(d.product_id, {
        id: d.product_id,
        name,
        qty: d.quantity,
        price,
        subtotal: d.quantity * price
      });
    }
  }
  return Array.from(map.values());
}
