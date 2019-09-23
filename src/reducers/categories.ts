import { FETCH_CATEGORIES, FetchCategoryAction } from "../actionTypes";
import { CategoryStore, RootStore } from "../types";

export default function(
  state: CategoryStore = [],
  { type, payload }: FetchCategoryAction
) {
  switch (type) {
    case FETCH_CATEGORIES:
      return [...payload];
    default:
      return state;
  }
}

export const getCategories = (state: RootStore) => state.categories;
