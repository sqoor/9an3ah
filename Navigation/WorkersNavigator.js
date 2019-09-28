
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../Components/Home/HomeScreen'
import LoginScreen from '../Components/Login/LoginScreen'
import SignUpScreen from '../Components/SignUp/SignUpScreen'
import EditProfileScreen from '../Components/Profile/EditProfile'
import ProfileScreen from '../Components/Profile/ProfileScreen'

const WorkersNavigator = createStackNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
})

export default createAppContainer(WorkersNavigator);