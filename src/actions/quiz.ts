import { Dispatch } from "redux";
import { FETCH_CATEGORIES, FetchCategoryAction } from "../actionTypes";
import { Category } from "../types";

export type FetchCategoriesActionCreator = (
  payload: Category[]
) => FetchCategoryAction;

export const fetchCategories: FetchCategoriesActionCreator = payload => ({
  type: FETCH_CATEGORIES,
  payload
});

export const fetchCategoriesRequest = (count: number) =>
  fetch(`http://jservice.io/api/categories?count=${count}`);

export const fetchCategoriesData = (count: number) => (dispatch: Dispatch) =>
  fetchCategoriesRequest(count)
    .then((res: Response) => res.json())
    .then((data: Category[]) => {
      dispatch(fetchCategories(data));
    });
