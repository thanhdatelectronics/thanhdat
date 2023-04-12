import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Comment = (blogid) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [noidung, setnoidung] = useState("");
  const [trangweb, settrangweb] = useState("");

  var checkMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const sendFeedBackBlog = async (e) => {
    e.preventDefault();
    if (name == "" || email == "" || noidung == "") {
      toast.warning("Vui lòng không để trống thông tin có đánh dấu *");
      return;
    } else if (!checkMail.test(email) || email.length == "") {
      toast.warning("Email không hợp lệ");
      return;
    }
    await axios
      .post(`${process.env.REACT_APP_API_URL}feedbackblog/`, {
        email: email,
        comment: noidung,
        usename: name,
        website: trangweb,
        idblog: blogid.blogid,
      })
      .then((data) => {
        if (data.data.status) {
          toast.success("Gửi bình luận thành công");
        } else toast.success("Lỗi");
      });
    // toast("Đang xử lý...");
  };

  return (
    <div className="w-full pt-10">
      <form className="bg-[#F2F2F2] p-5" onSubmit={sendFeedBackBlog}>
        <div className="pb-5">
          <h2 className="text-[20px] font-bold">Trả lời</h2>
          <span className="pt-2 text-[#000]">
            Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
            được đánh dấu *
          </span>
        </div>
        <div className="flex flex-wrap w-full mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            Bình luận <span className="text-red-500">*</span>
          </label>
          <textarea
            className="appearance-none block w-full h-28 bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-comment"
            onChange={(e) => setnoidung(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Tên <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full  text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              type="text"
              placeholder="Nhập tên"
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="Nhập email"
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-website"
            >
              Trang web
            </label>
            <input
              className="appearance-none block w-full 0 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-website"
              type="text"
              onChange={(e) => settrangweb(e.target.value)}
              placeholder="Nhập trang web"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              PHẢN HỒI
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Comment;
