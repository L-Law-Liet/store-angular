import {Link} from './link.model';

export class Paginator {
  constructor(
    public currentPage: number,
    public from: number,
    public lastPage: number,
    public nextPageUrl: string,
    public prevPageUrl: string,
    public to: number,
    public total: number,
    public links: Link[]
  ) {
  }
}
