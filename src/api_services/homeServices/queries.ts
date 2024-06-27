import { useQuery } from "@tanstack/react-query";
import { getAllItems, getAllResults, getDetailsItem } from ".";

export const useGetAllResults = (pageCurrent: number) => {
  return useQuery({
    queryKey: ["get-driver-profile", pageCurrent],
    queryFn: () => getAllResults(pageCurrent),
  });
};

export const useGetAllItems = () => {
  return useQuery({
    queryKey: ["get-all-item"],
    queryFn: getAllItems,
  });
};

export const useGetDetailsItem = () => {
  return useQuery({
    queryKey: ["get-details-item"],
    queryFn: getDetailsItem,
  });
};
