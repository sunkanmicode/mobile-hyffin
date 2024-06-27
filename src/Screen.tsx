import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import "expo-dev-client";
// import app, { auth } from "./firebaseConfig";
import {app} from "../firebaseConfig"
// import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

// GoogleSignin.configure();

export const Screen = () =>{
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure();

  // GoogleSignin.configure({
  //   webClientId:
  //     "824635247694-oepku9pvgt8rjdmj07rrkilqml2qhh80.apps.googleusercontent.com",
  // });

  const onAuthStateChanged = (user:any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    // const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber;
    GoogleSignin.configure({
      webClientId:
        "292631409760-meg5hlbjiktmhreir0rhvav0kes8esio.apps.googleusercontent.com",
    });
  }, []);

  // const onGoogleOnPressSigin = async()=>{
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log(userInfo?.user, "user");
  //       const googleCredential = GoogleAuthProvider.credential(userInfo?.idToken);
  //     console.log(googleCredential, "googleCredential");

  //     const user_sign_in = getAuth().signInWithCredential(userInfo?.idToken);
  //     console.log(user_sign_in, "user_sign_in");

  //     setUser(userInfo);
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //     if (isErrorWithCode(error)) {
  //       switch (error.code) {
  //         case statusCodes.SIGN_IN_CANCELLED:
  //           // user cancelled the login flow
  //           break;
  //         case statusCodes.IN_PROGRESS:
  //           // operation (eg. sign in) already in progress
  //           break;
  //         case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
  //           // play services not available or outdated
  //           break;
  //         default:
  //         // some other error happened
  //       }
  //     } else {
  //       // an error that's not related to google sign in occurred
  //     }
  //   }
  // }

  const onGoogleOnPressSigin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      //  console.log(idToken, "idToken");
      const googleCredential = GoogleAuthProvider.credential(idToken);
      console.log(googleCredential, "googleCredential");

      const auth = getAuth(app);

      const user = await signInWithCredential(auth, googleCredential);
      console.log(user, "USER");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // useEffect(() => {
  //   const requestTracking = async () => {
  //     const { status } = await requestTrackingPermissionsAsync();
  //     Settings.initializeSDK();
  //     if (status === "granted") {
  //       console.log("Yay! I have user permission to track data");
  //       await Settings.setAdvertiserIDCollectionEnabled(true);
  //     }
  //   };

  //   requestTracking();
  // }, []);

  // const signInwithFB = async () => {
  //   const result = await LoginManager.logInWithPermissions([
  //     "public_profile",
  //     "email",
  //   ]);
  //   if (result.isCancelled) {
  //     throw new Error("User cancelled login");
  //   }
  //   const data = await AccessToken.getCurrentAccessToken();
  //   if (!data) {
  //     throw new Error("Something went wrong...");
  //   }

  //   const auth = getAuth(app);

  //   const credendial = FacebookAuthProvider.credential(data.accessToken);
  //   const user = await signInWithCredential(auth, credendial);
  //   console.log(user, "USER");
  // };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await getAuth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  // if (initializing) return null;

  return (
    <View style={styles.container} className=" flex-1 bg-red-300">
      {/* <LoginButton
        onLogoutFinished={() => console.log("logged out")}
        onLoginFinished={(error, data) => {
          console.log(error || data);
          AccessToken.getCurrentAccessToken().then((data) => console.log(data));
        }}
      /> */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* <TouchableOpacity
        style={{ backgroundColor: "blue", padding: 5 }}
        onPress={signInwithFB}
      >
        <Text style={{ color: "white" }}>
          Sign in with facebook with firebase
        </Text>
      </TouchableOpacity> */}
      {user ? (
        <Button
          title="Sign out"
          // style={{
          //   width: 300,
          //   height: 65,
          //   marginTop: 300,
          //   // backgroundColor: "yellow",
          // }}
          onPress={signOut}
        />
      ) : (
        // <View style={{flex: 1, backgroundColor:"red"}}>
        //   <Text>Helli</Text>
        // </View>
        <>
          <TouchableOpacity
            style={{ backgroundColor: "green", padding: 5, marginVertical: 10 }}
            onPress={onGoogleOnPressSigin}
          >
            <Text style={{ color: "white" }}>
              Sign in with Google with firebase
            </Text>
          </TouchableOpacity>
          <GoogleSigninButton
            style={{
              width: 300,
              height: 65,
              marginTop: 300,
              // backgroundColor: "yellow",
            }}
            onPress={onGoogleOnPressSigin}
          />

          <Button
            title="Sign out"
            // style={{
            //   width: 300,
            //   height: 65,
            //   marginTop: 300,
            //   // backgroundColor: "yellow",
            // }}
            onPress={signOut}
          />
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
