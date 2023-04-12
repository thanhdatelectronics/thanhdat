// import { products } from "../data/Data";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useParams } from "react-router-dom";
import Path from "./path";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";
import ShowFeedBack from "./showFeedback";
import FeedBack from "./feedback";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  const id = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const [product, setProduct] = useState(null);
  const [brands, setBrands] = useState([]);
  const [zalo, setZalo] = useState([]);
  const [fb, setfb] = useState([]);
  const [gmail, setGmail] = useState([]);
  const onSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    const calldata = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}products/getall`)
        .then((response) => {
          const pro = response.data.products;
          setData(pro);
        });
    };

    const calldata2 = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}category/`)
        .then((response) => {
          setDataCate(response.data.category);
        });
    };
    const calldata3 = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}brand/`)
        .then((response) => {
          const data = response.data;
          setBrands(data);
        });
    };

    calldata();
    calldata2();
    calldata3();
  }, []);

  useEffect(() => {
    const foundProduct = data.find((p) => p._id == Number(id.id));
    setProduct(foundProduct);
  });

  function categoryProduct(item) {
    const categoryProduct = dataCate.find((category) => category._id === item);

    if (categoryProduct) return categoryProduct.name;
  }

  function brandProduct(item) {
    const brandProduct = brands.find((brand) => brand._id === item);

    if (brandProduct) return brandProduct.title;
  }

  useEffect(() => {
    const getInfoweb = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}info/`)
        .then((response) => {
          setZalo(response.data[0].zalo);
          setfb(response.data[0].facebook);
          setGmail(response.data[0].gmail);
        });
    };
    getInfoweb();
  }, []);

  return (
    <div>
      <>
        {product == null ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="containers">
              <Path data={product.name} />
            </div>
            <section className="overflow-hidden bg-white py-7 ">
              <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full mb-8 md:w-1/2 md:mb-0">
                    <div className="sticky top-0 z-30 overflow-hidden ">
                      <ImageGallery
                        loading={"lazy"}
                        thumbnailHeight={50}
                        items={product.imagesDetail}
                        showFullscreenButton={true}
                        useBrowserFullscreen={true}
                        onSlide={onSlide}
                        thumbnailPosition={"left"}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                      <div className="mb-8 ">
                        <h2 className="max-w-xl mb-6 text-2xl font-bold  md:text-4xl text-color-title">
                          {product.name}
                        </h2>
                        <p className="inline-block mb-6 text-xl font-bold text-text-color  ">
                          <span>
                            Danh mục: {categoryProduct(product.idCategory)}
                          </span>
                        </p>
                        <br />
                        <p className="inline-block mb-6 text-xl font-bold text-text-color  ">
                          <span>
                            Nhãn hàng: {brandProduct(product.idBrand)}
                          </span>
                        </p>
                      </div>

                      <div className="mb-8 ">
                        <div>
                          <div className="flex flex-wrap -mb-2">
                            <a href={`https://zalo.me/${zalo}`}>
                              <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 hover:text-black bg-color-button text-text-color">
                                Zalo
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8">
                        <h2 className=" pb-1 mb-4 text-2xl font-bold border-b border-blue-300 ">
                          Liên hệ
                        </h2>
                        <div className="flex flex-wrap -mx-2 -mb-2">
                          <a href={fb}>
                            <button className="p-1 mb-2 mr-3 bg-color-button">
                              <FaFacebookF className="w-6 h-6 text-text-color" />
                            </button>
                          </a>
                          <a href={`mailto:${gmail}`}>
                            <button className="p-1 mb-2 mr-3 bg-color-button">
                              <HiOutlineMail className="w-6 h-6 text-text-color" />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6 mt-6 border-t w-[100%] border-gray-300 ">
                    <Tabs  value="dashboard">
                      <TabsHeader>
                        <Tab value={"mota"} classes={{root: "bg-none",}}>
                          <div className="flex items-center gap-2">Mô tả</div>
                        </Tab>
                        <Tab value={"danhgia"} classes={{root: "bg-none",}}>
                          <div className="flex items-center gap-2">
                            Đánh giá
                          </div>
                        </Tab>
                      </TabsHeader>
                      <TabsBody >
                        <TabPanel value={"mota"}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${product.description}`,
                            }}
                          ></div>
                        </TabPanel >
                      </TabsBody>
                      <TabsBody >
                        <TabPanel value={"danhgia"} >
                          <ShowFeedBack idproductfeedback={product._id} />
                          <FeedBack idproduct={product._id} />
                        </TabPanel>
                      </TabsBody>
                    </Tabs>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </>
    </div>
  );
};
export default ProductDetail;
