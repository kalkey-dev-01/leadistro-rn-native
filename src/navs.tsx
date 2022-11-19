import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main';
import Sidebar from './components/sidebar';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function Home() {
    return (
        <Drawer.Navigator 
        drawerContent={props => <Sidebar {...props} />}
        screenOptions={{
            drawerType: 'back',
            swipeEdgeWidth: 200
        }} initialRouteName='Main'>
            <Drawer.Screen
                name='Main'
                component={MainScreen}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

export default function Navigations(){
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{
                headerShown:false
            }} />
        </Stack.Navigator>
    )
}
