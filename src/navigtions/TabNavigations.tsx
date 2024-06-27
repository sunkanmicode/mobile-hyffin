
import HomeScreen from "../screens/mainScreens/HomeScreen";
import UploadScreen from "../screens/mainScreens/UploadScreen";
import AddItem from "../screens/mainScreens/UploadScreen/AddItem";
import ItemList from "../screens/mainScreens/UploadScreen/ItemDetails";
import UploadStackNav from "./UploadStackNav";
import { HomeStackParamList } from "./navigationTypes";
// import {
//   createNativeStackNavigator,
//   BottomTabNavigationOptions,
// } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeStack = () => {};
// const Tab = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<HomeStackParamList>();


const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ header: () => null }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Tab.Screen name="UploadScreen" component={UploadScreen} />
        <Tab.Screen name="AddItem" component={AddItem} /> */}
        <Tab.Screen name="UploadStackNav" component={UploadStackNav} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
