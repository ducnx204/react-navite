import Blog from "../../models/Blog";

export const INSERT_BLOG = "INSERT_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";
export const UPDATE_BLOG = "UPDATE_BLOG";

export const insertBlog = (blogId, content) => {
  const blog  = new Blog(blogId, content);

  return {type: INSERT_BLOG,  blog: blog};
};

export const updateBlog = (blogId, content) => {
  const blog  = new Blog(blogId, content);

  return {type: UPDATE_BLOG,  blog: blog};
};

export const deleteBlog = (blogId) => {
  
  return {type: DELETE_BLOG, blogId: blogId};
}