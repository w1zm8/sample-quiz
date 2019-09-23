import { Category } from "../types";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export type FetchCategoryAction = {
  type: typeof FETCH_CATEGORIES;
  payload: Category[];
};
