import Category from "../../models/Category";

export const INSERT_CATEGORY = "INSERT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

export const insertCategory = (categoryId, name) => {
  const category  = new Category(categoryId, name);

  return {type: INSERT_CATEGORY,  category: category};
};

export const updateCategory = (categoryId, name) => {
  const category  = new Category(categoryId, name);

  return {type: UPDATE_CATEGORY,  category: category};
};

export const deleteCategory = (categoryId) => {
  
  return {type: DELETE_CATEGORY, categoryId: categoryId};
}