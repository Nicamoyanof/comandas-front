import { Product } from './product.model';

export interface OrderDetail {
  order_detail_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  modifiers?: string | null;
  product?: Product;
}
