import type {
  Category,
} from "../../../types/category";
import {
  FALLBACK_CATEGORIES,
  WEEKLY_DISCOUNTS,
} from "../constants/store.constants";

export type CollectionCategory = {
  id: string;
  name: string;
};

export const getWeeklyDiscountCategories = (
  categories: Category[]
): CollectionCategory[] => {
  if (categories.length > 0) {
    return categories.slice(
      0,
      WEEKLY_DISCOUNTS.length
    );
  }

  return FALLBACK_CATEGORIES.map(
    (category) => ({
      id: "",
      name: category,
    })
  );
};
