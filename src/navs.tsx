import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function Home() {
    return (
        <Drawer.Navigator screenOptions={{
            drawerType: 'back',
            swipeEdgeWidth: 200
        }} initialRouteName='Main'>
            <Drawer.Screen name='Main' component={MainScreen}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

