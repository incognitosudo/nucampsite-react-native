import { useState } from "react";
import { View } from "react-native";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import DirectoryScreen from "./DirectoryScreen";


const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [selectedCampsiteId, setSelectedCampsiteId] = useState();
    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                campsites={campsites}
                onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)} //campsiteId that was click as the only parameter, and setSelectedCampsiteId to update the selectedCampsiteId state variable with the new value
            />
            <CampsiteInfoScreen //were going to acquire the campsite array to filter out only the campsite that the user has selected
                campsite={
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsiteId
                    )[0]
                }
            />
        </View>
);
};

export default Main;