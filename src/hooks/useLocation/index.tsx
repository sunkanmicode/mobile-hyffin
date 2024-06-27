// import React, { useState, useEffect } from "react";
// import * as Location from "expo-location";
// import { Alert } from "react-native";

// // // A custom hook that returns the current location of the user
// export const useLocation =() => {
//   const [location, setLocation] = useState(null);
//  const [status, setStatus] = useState('loading'); // Initially set to 'loading'

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();

//       if (status !== 'granted') {
//         setStatus('Permission denied');
//         Alert.alert("Permission to access location was denied");
//         return;
//       } else {
//         setStatus('granted');
//         // Fetch location now that permission is granted
//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location as any);
//       }
//     })();
//   }, []);

//   return { status, location };
// };





  
  // !WORKING ON IT
  // const reserveGeo = async()=>{
  //   const reserveGeoAddress = await Location.reverseGeocodeAsync({
  //     latitude: location?.coords?.latitude,
  //     longitude: location?.coords?.longitude,
  //   });
  //   console.log(reserveGeoAddress, "reserveGeoAddress");
  // }
  // React.useEffect(() => {
  //   reserveGeo();
  // }, [location]);



  // import React, { useState, useEffect } from "react";
  // import * as Location from "expo-location";

  // A custom hook that returns and updates the current user location
  import * as Location from 'expo-location';
  import React, { useState, useEffect } from 'react';
  
  type LocationType = Location.LocationObject | null;
  
  export const useLocation = () => {
    const [location, setLocation] = useState<LocationType>(null);
    const [status, setStatus] = useState('loading'); // Initial status
  
    useEffect(() => {
      (async () => {
        try {
          // Request foreground permissions for location access
          let { status } = await Location.requestForegroundPermissionsAsync();
  
          if (status !== 'granted') {
            setStatus('Permission denied'); // Handle permission denial
            return; // Exit if permission is not granted
          }
  
          // Fetch the most recent location, even if the app is backgrounded
          const savedLocation = await Location.getLastKnownPositionAsync({});
  
          if (savedLocation) {
            setLocation(savedLocation);
          } else {
            // If no recent location, get current location immediately
            const currentLocation = await Location.getCurrentPositionAsync({
              accuracy: Location.Accuracy.Highest,
            });
            setLocation(currentLocation);
          }
  
          // Optionally, set up a background location listener if needed
          const backgroundSubscription = await Location.watchPositionAsync(
            {
              accuracy: Location.Accuracy.Balanced, // Balanced accuracy for background
              timeInterval: 60000, // Update every minute
              distanceInterval: 100, // Update if device moves at least 100 meters
            },
            (newLocation) => {
              setLocation(newLocation); // Update location state with new background position
            }
          );
  
          // Cleanup function to remove the background listener when the component unmounts
          return () => {
            backgroundSubscription.remove();
          };
        } catch (error) {
          console.error('Location error:', error);
          setStatus('Error obtaining location'); // Handle errors
        }
      })();
    }, []); // Empty dependency array to prevent infinite loops
  
    return { status, location };
  };
  