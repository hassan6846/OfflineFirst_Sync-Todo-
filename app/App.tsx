import "react-native-gesture-handler"
//pacakges & Libs
import { StatusBar } from 'expo-status-bar';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
//Screens
import Login from "./screens/Login/Login";
import AllNotes from "./screens/AllNotes/AllNotes";
import Edit from "./screens/Edit/Edit";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AllNotes"
          component={AllNotes}
          options={{ title: 'All Notes',cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


