export interface Model {
  name: string;
  attributes: Attribute[];
}

export interface Attribute {
  name: string;
  type: string;
  list: boolean;
  optional: boolean;
}
