import axios from "axios";


export const uploadImageApi = async (data:any) => {
    console.log(data, "data upload");
    try {
      const res = await axios.post(
        "https://bovpay-core-service.onrender.com/api/v1/shared/upload-image",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // This is important for form data
          },
          transformRequest: () => {
            // Return the form data as it is

            return data;
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error("Error upload Image Transaction :", error);
      throw error;
    }
  };