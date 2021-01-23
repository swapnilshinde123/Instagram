//This is the Home Page of our app
import HomeTab from "../Components/HomeTab/HomeTab";

//This is for Story that we are showing in header of the app.
import DisplayStories from "../Components/DisplayStories";

//This is for SignIn page
import SignIn from "../Form/SignIn";

//This will provides a way for our app to transition between screens, where each new screen is placed on top of a stack.
import { createStackNavigator } from "react-navigation-stack";

//This will create a container for all our screens.
import { createAppContainer } from "react-navigation";

const screens = {
  SignIn: {
    screen: SignIn,
  },
  HomeTab: {
    screen: HomeTab,
  },
  DisplayStories: {
    screen: DisplayStories,
  },
};

const HomeStack = createStackNavigator(screens);

//Now HomeStack is the main component for React to render
export default createAppContainer(HomeStack);
