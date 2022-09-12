
import { DELETE_CATEGORY, INSERT_CATEGORY, UPDATE_CATEGORY } from "../actions/categoryActions";
import Category from "./../../models/Category"

const initialState = {
  categories: [
    new Category(1, "Xã hội"),
    new Category(2, "Văn học"),
    new Category(3, "Ăn uống"),
    new Category(4, "Khoa học"),
    new Category(5, "Giải trí"),
    new Category(6, "Thể thao"),
    new Category(7, "Thời sự")
  ],
};

export default (state = initialState, action) => {
  const { type, category } = action;

  switch (type) {
    case INSERT_CATEGORY:
      return {
        ...state, categories: [...state.categories, category]
      };

    case DELETE_CATEGORY:
      // xác định Id từ action
      const { categoryId } = action;
      // lọc các Id khác vs id truyền vào
      const filteredCategory = state.categories.filter(
        (item) => item.categoryId !== categoryId
      );

      return { ...state, categories: [...filteredCategory] };

    case UPDATE_CATEGORY:
      // lọc các Id khác vs id truyền vào
      const filteredCategory1 = state.categories.filter(
        (item) => item.categoryId !== category.categoryId
        // trong list là chuỗi số, nhập vào là chuỗi
      );

      return { ...state, categories: [...filteredCategory1, category] };

    default:
      return state;
  }
};