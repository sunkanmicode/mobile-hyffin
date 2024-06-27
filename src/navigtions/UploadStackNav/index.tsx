import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UploadScreen from "../../screens/mainScreens/UploadScreen";
import AddItem from "../../screens/mainScreens/UploadScreen/AddItem";
import ItemDetails from "../../screens/mainScreens/UploadScreen/ItemDetails";
const UploadStack = createNativeStackNavigator();

const UploadStackNav = () => {
  return (
    <UploadStack.Navigator>
      <UploadStack.Group>
        <UploadStack.Screen
          name="UploadScreen"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
        <UploadStack.Screen
          name="AddItem"
          component={AddItem}
          options={{ headerShown: false }}
        />
        <UploadStack.Screen
          name="ItemDetails"
          component={ItemDetails}
          options={{ headerShown: false }}
        />
        
      </UploadStack.Group>
    </UploadStack.Navigator>
  );
};

export default UploadStackNav;
