import { create } from "zustand";

const withdrawalStore = (set: any) => ({
  withdrawalDetails: {
    amount: "",
    accountName: "",
  },

  setWithdrawalDetatils: (data: any) => {
    set((state: any) => ({
      ...state,
      withdrawalDetails: { ...state.withdrawalDetails, ...data },
    }));
  },

 
});

const useWithdrawalStore = create(withdrawalStore);
export default useWithdrawalStore;
