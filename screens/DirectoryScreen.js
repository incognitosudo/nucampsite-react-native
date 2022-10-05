import { FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { CAMPSITES } from "../shared/campsites"; 

const DirectoryScreen = ({navigation}) => { //Destructure a prop value of 'navigation' in parameter list of DirectoryScreen function, replacing previous value of props

    //create a state variable 'campasites' and a setting function 'setCampsites', using useState hook passing the CAMPSITES array as initial value for state variable.
    const [campsites, setCampsites] = useState(CAMPSITES);
    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <ListItem onPress={() => navigation.navigate('CampsiteInfo', {campsite})}>
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>{campsite.description} </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;