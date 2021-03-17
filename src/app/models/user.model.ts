import {Category} from './category.model';

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public bill: number,
    public image: string,
    public phone: string,
    public password: string,
    public passwordConfirmation: string,
    public admin: boolean,
    public created_at: string,
    public updated_at: string,
  ) {}
}
