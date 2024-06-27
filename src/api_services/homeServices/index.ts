

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const ROOT_URL = "https://wellpro-server.onrender.com/api";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: ROOT_URL,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "multipart/form-data", // This is important for form data
  // },
});

export const getAllResults = async(page: number)=>{
    try {
        const res = await axiosInstance.get(`/product/allResults?limit=10&page=${page}`);
        return res.data
    } catch (error) {
        console.error(error, "get-results")
        throw error
    }
}

export const getAllItems = async () => {
  try {
    const res = await axiosInstance.get(`/item/get-all-items`);
    return res.data;
  } catch (error) {
    console.error(error, "get-all-items");
    throw error;
  }
};

export const getDetailsItem = async (data:any) => {
  try {
    const res = await axiosInstance.get(`/item/${data?.id}`);
    return res.data;
  } catch (error) {
    console.error(error, "get-details-items");
    throw error;
  }
};

export const createItem = async(data:any)=>{
  // console.log(data, "LLL")
  try {
    const res = await axiosInstance.post(`/item/create-item`, data);
    return res.data;
  } catch (error) {
    console.error(error, "createItem");
    throw error;
    
  }
}