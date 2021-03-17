import {Product} from './product.model';
import {User} from './user.model';

export class Favourite {
  constructor(
    public id: number,
    public product: Product,
    public user: User,
    public created_at: string,
    public updated_at: string,
  ) {}
}
