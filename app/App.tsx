import "react-native-gesture-handler"
//pacakges & Libs
import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from "react"
//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
//Screens
import Login from "./screens/Login/Login";
import AllNotes from "./screens/AllNotes/AllNotes";
import Edit from "./screens/Edit/Edit";
//Supabase SDK
import { supabase } from "./utils/supabase-client";

export default function App() {
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!auth ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
          />
        ) : (
          <>
            <Stack.Screen
              name="AllNotes"
              component={AllNotes}
              options={{ title: 'Home', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
            />
            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{ title: 'Edit', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


