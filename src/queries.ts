export type Query = Record<string, any>;

export type DefaultCollectionQuery = {
  limit?: number;
  offset?: number;
  embed?: Array<string>;
};
