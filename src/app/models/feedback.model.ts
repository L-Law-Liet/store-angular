import {Product} from './product.model';
import {User} from './user.model';

export class Feedback {
  constructor(
    public id: number,
    public rate: number,
    public product_id: number,
    public user_id: number,
    public body: string,
    public product: Product,
    public user: User,
    public created_at: string,
    public updated_at: string,
  ) {}
}
