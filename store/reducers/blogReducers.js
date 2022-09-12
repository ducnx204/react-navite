
import { DELETE_BLOG, INSERT_BLOG, UPDATE_BLOG } from "../actions/blogActions";
import Blog from "./../../models/Blog"

const initialState = {
  blogs: [
    new Blog(1, "Cuộc đàm phán về tình hình căng thẳng tại Ukraine giữa Nga và Ukraine diễn ra ngày 28/2 tại vùng Gomel, gần biên giới Belarus-Ukraine đã kết thúc sau gần 5 giờ đồng hồ."),
    new Blog(2, "Ngày 28/2, Bộ Y tế thông tin việc tăng hạn sử dụng vaccine Abdala từ 6 tháng lên 9 tháng."),
    new Blog(3, "Tới đây, ngành Y tế sẽ phối hợp với các ngành liên quan đẩy nhanh tốc độ nhập liệu ngay sau khi người dân được tiêm."),
  ],
};

export default (state = initialState, action) => {
  const { type, blog } = action;

  switch (type) {
    case INSERT_BLOG:
      return {
        ...state, blogs: [...state.blogs, blog]
      };

    case DELETE_BLOG:
      // xác định Id từ action
      const { blogId } = action;
      // lọc các Id khác vs id truyền vào
      const filteredBlog = state.blogs.filter(
        (item) => item.blogId !== blogId
      );

      return { ...state, blogs: [...filteredBlog] };

    case UPDATE_BLOG:
      // lọc các Id khác vs id truyền vào
      const filteredBlog1 = state.blogs.filter(
        (item) => item.blogId !== blog.blogId
        // trong list là chuỗi số, nhập vào là chuỗi
      );

      return { ...state, blogs: [...filteredBlog1, blog] };

    default:
      return state;
  }
};