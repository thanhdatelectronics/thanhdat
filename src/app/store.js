import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import bCategoryReducer from "../features/bcategory/bcategorySlice";
import blogReducer from "../features/blogs/blogSlice";
import catecontainerReducer from "../features/catecontainer/catecontainerSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    menu: brandReducer,
    pCategory: pCategoryReducer,
    bCategory: bCategoryReducer,
    blogs: blogReducer,
    CateContainer: catecontainerReducer,
    brand: brandReducer,
  },
});
