import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PhoneNumber from "./screens/PhoneNumber";

const App = () => {
 type StackParamList = {
   PhoneNumber: undefined;
   PhoneNumber2: undefined;
 };

 const Stack = createNativeStackNavigator<StackParamList>();

 return (
   <NavigationContainer>
     <Stack.Navigator
       initialRouteName="PhoneNumber"
       screenOptions={{
         headerShown: false,
       }}
     >
       <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
       {/* <Stack.Screen name="PhoneNumber2" component={PhoneNumber} />for backend logic purpose, but failed *can neglect this row */}
     </Stack.Navigator>
   </NavigationContainer>
 );
};

export default App;



