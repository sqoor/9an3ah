import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../Components/Home/HomeScreen";
import LoginScreen from "../Components/Login/LoginScreen";
import SignUpScreen from "../Components/SignUp/SignUpScreen";
import EditProfileScreen from "../Components/Profile/EditProfile";
import ProfileScreen from "../Components/Profile/ProfileScreen";
import ContactScreen from "../Components/ContactDetails/ContactScreen";
import Header from "../Components/Home/Header";

const WorkersNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: { header: null }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: { header: null }
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: { header: null }
  },
  Details: {
    screen: ContactScreen,
    navigationOptions: { header: null }
  }
});

export default createAppContainer(WorkersNavigator);
