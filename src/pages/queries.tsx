import axios from "axios";

export const getShopList = () =>
  axios({
    method: "GET",
    url: "https://fakestoreapi.com/products",
  }).then((res) => res.data ?? []);

export const getShopListWithCategory = (categoryVal: any) =>
  axios({
    method: "GET",
    url: `https://fakestoreapi.com/products/category/` + categoryVal.filter,
  }).then((res) => res.data ?? []);
