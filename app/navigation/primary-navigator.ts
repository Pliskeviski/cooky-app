import createNativeStackNavigator from "react-native-screens/createNativeStackNavigator"
import { RegisterScreen, DemoScreen, FeedScreen, ListScreen, ProfileScreen } from "../screens"

export const PrimaryNavigator = createNativeStackNavigator(
  {
    feed: {screen: FeedScreen},
    register: { screen: RegisterScreen },
    listScreen: { screen: ListScreen },
    profile: { screen: ProfileScreen },
    demo: { screen: DemoScreen },
  },
  {
    headerMode: "none",
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["feed"]
