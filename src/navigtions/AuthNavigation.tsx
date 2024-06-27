import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./navigationTypes";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import RegisterScreen from "../screens/AuthScreens/RigisterScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ header: () => null }}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
