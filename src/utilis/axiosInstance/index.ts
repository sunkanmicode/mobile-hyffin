

// Import axios and AsyncStorage
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../navigtions/RootNavigation";


// Define the interface for the navigation params
interface NavigationParams {
  screen: string;
  tokenExpired: boolean;
}

// Define the API base URL
const ROOT_URL = "https://bovpay-core-service.onrender.com/api/v1";

// Create an axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: ROOT_URL,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "multipart/form-data", // This is important for form data
  // },
});

// Request interceptor for adding the access token to headers
axiosInstance.interceptors.request.use(
  async (config) => {
    // Get the access token from AsyncStorage
    const token: string | null = await AsyncStorage.getItem("token");

    // If the access token exists, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log(token, "token")

    // Return the modified config
    return config;
  },
  (error: any) => Promise.reject(error)
);


// Response interceptor for handling 401 Unauthorized errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    // If the error response status is 401, remove the access token from AsyncStorage
    // and navigate to the LogoutScreen with the tokenExpired flag set to true
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem("token");
      navigate("LogoutScreen", {
        tokenExpired: true,
      } as NavigationParams);
    }

    // Return the rejected error
    return Promise.reject(error);
  }
);


export default axiosInstance;

