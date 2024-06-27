import "expo-dev-client";
import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";
import CustomInput from "../../../custom_comp/CustomInput";
import { CustomButton } from "../../../custom_comp/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import Spinner from "react-native-loading-spinner-overlay";
import {
  useGoogleLogin,
  useLoginUseMutation,
} from "../../../api_services/authServices/mutations";
import useAuthStore from "../../../stores/authStore";
// import app from "../../../../firebaseConfig";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { app } from "../../../../firebaseConfig";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LETTERS_ONLY = /^[a-zA-Z\s]+$/;

// GoogleSignin.configure();

const LoginScreen = () => {
  const navigation = useNavigation();

  //useForm
  const { control, handleSubmit, formState, watch } = useForm();

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "70093456937-8231oebn3d376vfb4djvssgid2033ael.apps.googleusercontent.com",
    });
  }, []);

  //STORE
  const { setIsLoggedIn, setAuthUser } = useAuthStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setAuthUser: state.setAuthUser,
  }));

  const onSubmit = (data: any) => {
    userLogin.mutate(data);
  };

  //GOOGLE SIGN IN
  // const onGoogleOnPressSigin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { idToken } = await GoogleSignin.signIn();

  //     //  console.log(idToken, "idToken");
  //     const googleCredential = GoogleAuthProvider.credential(idToken);
  //     console.log(googleCredential, "googleCredential");

  //     const auth = getAuth(app);

  //     const user = await signInWithCredential(auth, googleCredential);
  //     if (user) {
  //       setIsLoggedIn(true);
  //       console.log("after click")
  //     }
  //     console.log(user?.user, "USER");
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };

  //hooks
  const userLogin = useLoginUseMutation(setIsLoggedIn, setAuthUser);
  const googleLogin = useGoogleLogin(setIsLoggedIn, setAuthUser);

  console.log(googleLogin, "googleLogin");

  return (
    <>
      <Spinner
        visible={userLogin.isPending || googleLogin.isPending}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />

      <View className=" flex-1 bg-white p-5">
        <View className="py-5">
          <Text className=" self-center font-bold text-lg ">Sign in</Text>
          <Text className=" self-center font-normal text-xs ">
            Welcome to Hyffin Home
          </Text>
        </View>
        <View className="flex-1 my-10">
          <Controller
            control={control}
            name="email"
            rules={{
              required: "email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Email is invalid",
              },
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <CustomInput
                primary
                label="Email"
                placeholder="Enter your email"
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required",
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <CustomInput
                primary
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
          />
          <CustomButton
            primary
            title="login"
            onPress={handleSubmit(onSubmit)}
          />
          <TouchableOpacity
            className=" self-center flex-row items-center bg-[#4285F4] px-10 h-10 rounded-md"
            // onPress={onGoogleOnPressSigin}
            onPress={() => googleLogin.mutate()}
          >
            <View className="w-5 h-5">
              <Image
                source={require("../../../../assets/images/go-login.png")}
                className="w-full h-full"
              />
            </View>
            <Text className="mx-3 text-white">Google Login</Text>
          </TouchableOpacity>
          <View className=" self-center my-10">
            <Text>
              Dont have an Account?{" "}
              <Text
                className=" font-bold"
                onPress={() => {
                  navigation.navigate("RegisterScreen");
                }}
              >
                Register
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
