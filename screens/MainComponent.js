//import { useState } from "react"; -Remove the useState import from 'react'.
import { Platform, View } from "react-native";
//import { CAMPSITES } from "../shared/campsites"; -Remove the CAMPSITES import from '../shared/campsites'.
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import DirectoryScreen from "./DirectoryScreen";
import { Constants } from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Constants } from "expo-constants";

//const named 'screenOptions' set equal to object being passed into 'screenOptions' prop in 'DirectoryNavigator'
const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD'}
}

//func component named 'HomeNavigator' 
const HomeNavigator = () => {
    //constant named 'Stack' equal to a call to 'createStackNavigator()' with nothing in parameter
    const Stack = createStackNavigator();

    //prop 'screenOptions' equal to 'screenOptions' variable to 'Stack.Navigator' component.

    //return statement with opening and closing tag of Stack.Navigator
    return (
        <Stack.Navigator>
            
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    //create constant named 'Stack' set equal to a call to 'createStackNavigator()' passing no arguments
    const Stack = createStackNavigator();
    //Setup return statement for 'DirectoryNavigator component returning a Stack.Navigator as top level component, using an opening and closing tag
    return (
    //inside Stack.Navigator opening tag, pass in a prop called initalRouteName, set equal to string 'Directory'. Still inside the Stack.Navigator opening and lcosing tags, pass in another prop called screenOptions, set equal to the follwoing object(wrap this obejct in a second set of curly brackets):
    <Stack.Navigator 
        initialRouteName='Directory' 
        screenOptions={screenOptions}
    >
        <Stack.Screen 
            name='Directory' 
            component={DirectoryScreen}
            options={{title: 'Campsite Directory'}} 
        />
        <Stack.Screen 
            name='CampsiteInfo' 
            component={CampsiteInfoScreen}
            options={({ route }) => ({
                title: route.params.campsite.name
            })}
         />
    </Stack.Navigator>
    );
};

const Main = () => {
    //remove 2 const declarations making use of useState() hook
    //const [campsites, setCampsites] = useState(CAMPSITES);
    //const [selectedCampsiteId, setSelectedCampsiteId] = useState();
    return (
        //add another style of property of paddingTop equal to ternary operator expression.
        <View 
            style={{ 
                flex: 1 ,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }} 
        
        >

            {/* Remove DirectoryScreen and CampsiteInfoScreen tags that are being returned from main */}
            {/*<DirectoryScreen
                campsites={campsites}
                onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)} //campsiteId that was click as the only parameter, and setSelectedCampsiteId to update the selectedCampsiteId state variable with the new value
            />*/}
            {/*
            <CampsiteInfoScreen //were going to acquire the campsite array to filter out only the campsite that the user has selected
                campsite={
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsiteId
                    )[0]
                }
            /> */}
            <Drawq
        </View>
    );
};

export default Main;