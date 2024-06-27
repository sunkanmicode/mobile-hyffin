

import { useMutation } from "@tanstack/react-query";
import { uploadImageApi } from "../api_services/uploadImageApi";

export const useImageUpload = () => {
  const { mutate, data, isPending, isError, reset } = useMutation({
    mutationFn: uploadImageApi,
  });

  const uploadImage = async (image:any) => {
    //  console.log(image, "from far")
    let fileInfo = {
      uri: image,
      type: "*/*",
      name: "file.jpg",
    };
    const formData = new FormData();
    formData.append("file", fileInfo as any);
    mutate(formData);
  };

   const resetImageData = () => {
     reset(); // This will reset the data to undefined
   };

  return {
    uploadImage,
    imageData: data,
    isImageUploadPending: isPending,
    isImageUploadError: isError,
    resetImageData,
  };
};

