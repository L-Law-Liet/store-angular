import {Category} from './category.model';
import {Product} from './product.model';
import {User} from './user.model';

export class Cart {
  constructor(
    public id: number,
    public count: number,
    public product: Product,
    public user: User,
    public created_at: string,
    public updated_at: string,
  ) {}
}
