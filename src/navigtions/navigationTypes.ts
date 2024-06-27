export type AuthStackParamList = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
  SplashScreen: undefined;
  RegisterEntercode: undefined;
  RegisterMoreInfo: undefined;
  ConfirmPin: undefined;
  TransactionPin: undefined;
  LoginEntercode: undefined;

  //   ResetPassword: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  UploadStackNav: undefined;
  UploadScreen: undefined;
  ItemDetails: undefined;
  AddItem: undefined;

  //delete
  WithdrawMoney: undefined;
  EnterAmount: undefined;
  EnterPin: undefined;
  AcceptOrderScreen: { item: object };
  ProfileScreen: undefined;
  AssignedDeliveries: undefined;
  DeliverOrderScreen: undefined;
  EditProfile: undefined;
  TransactionsScreen: undefined;
  TripHistory: undefined;
  ChangeTransactionPin: undefined;
  MyEarning: undefined;
  LogoutScreen: undefined;
};

export interface RootStackParamList
  extends HomeStackParamList,
    AuthStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
