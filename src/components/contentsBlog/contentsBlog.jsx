import React, { useState, useEffect } from "react";
import "../home/recent/recent.css";
import "./contentsBlog.css";
import Side from "../blog/Side";
import { contentBlog } from "../data/Data";
import { Link, useParams } from "react-router-dom";
import Comment from "./Comment";
import axios from "axios";
import {
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import VideoBlog from "./videoBlog";
import ShowFeedBackBlog from "./ShowFeedBackBlog";
import imgerror from "../images/imgerror.png";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const ContentsBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [editorContent, setEditorContent] = useState(EditorState.createEmpty());

  useEffect(() => {
    console.log(id);
    const calldata = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}blog/blogpage?slugs=${id}`)
        .then((response) => {
          const blog = response.data;
          console.log(blog);
          setData(blog[0]);
          setEditorContent(
            EditorState.createWithContent(
              convertFromRaw(JSON.parse(blog[0].description))
            )
          );
        });
    };
    calldata();
  }, [id]);

  return (
    <>
      <div>
        <main>
          <div className="containers">
            <section className="contentsBlog mtop">
              <Link to="/blog">
                <h6 className="contentBlog_h6">NEWS</h6>
              </Link>
              <div className="titleBlog">
                <h1 className="contentBlog_h1">{data.title}</h1>
                <div className="contentBlog_diveder"></div>
                <h6 className="contentBlog_poster">{}</h6>
              </div>
              <div className="contentBlog_video">
                {data.video ? (
                  <VideoBlog idyt={data.video} />
                ) : (
                  <div>
                    {" "}
                    <img
                      src={
                        data.imageThumbnail != undefined
                          ? data.imageThumbnail.secure_url
                          : imgerror
                      }
                      style={{ height: "500px" }}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="contentBlog_span">
                <span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: draftToHtml(
                        convertToRaw(editorContent.getCurrentContent())
                      ),
                    }}
                  ></div>
                </span>
              </div>
              <div className="pt-10 flex justify-center items-center">
                <div className="contentBlog_diveder "></div>
              </div>
              {/* <div className="pt-5 pb-5 flex justify-center items-center">
                <a className="pr-2" href="https://www.facebook.com/sharer.php?u=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/">
                  <FaFacebook className="hover:text-sky-600 text-gray-400" size={32} />
                </a>
                <a className="pr-2" href="https://twitter.com/share?url=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/">
                  <FaTwitter className="hover:text-sky-600 text-gray-400" size={32} />
                </a>
                <a className="pr-2" href="mailto:enteryour@addresshere.com?subject=S%E1%BA%A1c%20xe%20%C4%91i%E1%BB%87n%20KIA%2C%20Huyndai%20b%E1%BA%B1ng%20s%E1%BA%A1c%20EverEV%20t%E1%BA%A1i%20H%C3%A0n%20Qu%E1%BB%91c&body=Check%20this%20out:%20https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/">
                  <FaEnvelope className="text-gray-400 hover:text-black" size={32} />
                </a>
                <a className="pr-2" href="https://pinterest.com/pin/create/button/?url=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/&media=https://everev.vn/wp-content/uploads/2023/03/Screenshot-2023-03-24-111735.png&description=S%E1%BA%A1c%20xe%20%C4%91i%E1%BB%87n%20KIA%2C%20Huyndai%20b%E1%BA%B1ng%20s%E1%BA%A1c%20EverEV%20t%E1%BA%A1i%20H%C3%A0n%20Qu%E1%BB%91c">
                  <FaPinterest className="hover:text-[#e60023] text-gray-400" size={32} />
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/&title=S%E1%BA%A1c%20xe%20%C4%91i%E1%BB%87n%20KIA%2C%20Huyndai%20b%E1%BA%B1ng%20s%E1%BA%A1c%20EverEV%20t%E1%BA%A1i%20H%C3%A0n%20Qu%E1%BB%91c">
                  <FaLinkedin className="hover:text-[#0073b1] text-gray-400" size={32} />
                </a>
              </div> */}
              <ShowFeedBackBlog propsblogid={data._id} />
              <Comment blogid={data._id} />
            </section>

            <section className="sideContent">
              <Side />
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContentsBlog;
