import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { Deliver } from "../screens/Deliver";
const Stack = createNativeStackNavigator();
export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Deliver"
        component={Deliver}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
