import {Category} from './category.model';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: string,
    public image: string,
    public body: string,
    public sale: string,
    public category: Category,
    public category_id: string,
    public created_at: string,
    public updated_at: string,
  ) {}
}
