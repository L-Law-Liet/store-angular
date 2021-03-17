import {Product} from './product.model';
import {User} from './user.model';

export class OrderItem {
  constructor(
    public id: number,
    public order_id: number,
    public product: Product,
    public name: string,
    public count: number,
    public cost: number,
    public created_at: string,
    public updated_at: string,
  ) {}
}
