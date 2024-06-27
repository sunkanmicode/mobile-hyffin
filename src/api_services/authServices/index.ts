import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  getRedirectResult,
  sendPasswordResetEmail,
  signInWithRedirect,
} from "firebase/auth";
import { auth, db } from "../../../firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
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
import { app } from "../../../firebaseConfig";


export const authUsersLogin = async (data: any) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
    );
    AsyncStorage.setItem("token", res?.user?.accessToken);
    // console.log(res, "userAuth");
    if (res) {
      return res;
    }
  } catch (error) {
    console.error(error, "Sign in");
    throw error;
  }
};

//GOOGLE SIGN IN
  export const onGoogleOnPressSigin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      //  console.log(idToken, "idToken");
      const googleCredential = GoogleAuthProvider.credential(idToken);
      // console.log(googleCredential, "googleCredential");

      const auth = getAuth(app);

      const userInfo = await signInWithCredential(auth, googleCredential);
      if (userInfo) {
        AsyncStorage.setItem("token", userInfo?.user?.accessToken);
        // console.log(userInfo?.user);

        return userInfo.user;
        // console.log("after click");
      }
      // console.log(userInfo?.user, "USER");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


// export const loginWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     // AsyncStorage.setItem("token", res.user.accessToken);
//     console.log(res, "googleLogin");
//     if (res) {
//       // window.location.href = "/dashboard";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const registerUser = async (data: any) => {
  console.log(data, "createuser");
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
      //   displayName,
      //   data?.phoneNumber
    );
    // console.log(result, "0000");
    await setDoc(doc(db, "users", result.user.uid), {
      displayName: data?.displayName,
      phoneNumber: data?.phoneNumber,
      email: data?.email,
      timeStamp: serverTimestamp(),
    });
    // console.log(result, "register");
    //  toast.success("SUCCESSFULL");
    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};


//  const signOut = async () => {
//    try {
//      await GoogleSignin.revokeAccess();
//      await getAuth().signOut();
//      setIsLoggedIn(false);
//    } catch (error) {
//      console.error(error);
//    }
//  };