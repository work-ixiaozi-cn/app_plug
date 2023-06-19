

export declare interface Data {
  key: string;
  uuid: string;
  value:any;
}

export declare interface Paginate<T = any> {
  page: number;
  page_size: number;
  page_count?: number;
  total?: number;
  data?: T[];
}