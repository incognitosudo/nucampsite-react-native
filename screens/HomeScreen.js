import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";


//function component 'FeaturedItem destructuring a prop of 'item' in parameter list
const FeaturedItem = ({item}) => {
    //setup if statement passing 'item' into the if statement parenthesis
    if (item) {
        //setup return statement a 'Card' component, passing it a prop of 'containerStyle' equal to an object w/ single property called 'padding' = 0
        return (
            <Card containerStyle={{padding: 0}} >
                {/*add a Card.Image tag w/ source prop equal to item.image*/}
                <Card.Image source={item.image} >
                    {/*View component with a 'style' prop with properties 'justifyContent' set to string 'center and 'flex' set to 1 */}
                    <View 
                        style={{ 
                            justifyContent: 'center', 
                            flex:1 
                        }} 
                    >
                        {/* 'Text' tag with 'style' prop with props 'color' set to string 'white', 'textAlign' set to string 'center' and 'fontSize' set to '20' */}
                        <Text 
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }} 
                        >
                            {item.name /* This displays name of item inside curly brackets */}
                        </Text>
                    </View>
                </Card.Image>
                
                {/* Text tag after Card.Image closing tag with 'style' prop with property 'margin' set to '20' and between opening and closing tags, display item description with 'item.description' inside curly brackets */}
                <Text
                    style={{
                        margin: 20,
                    }}
                > 
                    {item.description  /* This displays item description */}
                </Text>
            </Card>
        );
    };
    //outside if statement block return an empty 'View' component using a self closing tag
    return <View />;
};

const HomeScreen = () => {
    //state variable named 'campsites' and a setting function named setCampsites equal to useState hook passing in 'CAMPSITES' array as an argument.
    const [campsites, setCampsites] = useState(CAMPSITES);
    //2 more state variables named 'promotions' and 'partners' with respective setting function similar to how campsites state variable was created passing in PROMOTIONS and PARTNERS array data respectively to 'useState' hook
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [partners, setPartners]= useState(PARTNERS);

    //create constant for feautured campsite object name 'featCampsite'. Set 'featCampsite' equal to a call to 'campsites.find()', passing an arrow func as argument. Give arrow func parameter 'item' and return value 'item.featured'
    const featCampsite = campsites.find((item) => item.featured);

    //set two more constants to hold values of featured promotion and featured partner with constants named 'featPromotion' and 'featPartner', setting them equal to their featured item using 'find' method on 'promotions' and 'partners' arrays respectively.
    const featPromotion = promotions.find((item) => item.featured);
    const featPartner = partners.find((item) => item.featured);

    return (
        //we use ScrollView to render our feautures item cards. Render groups or list of item. Loads all child component vs flatlist render only a part of a screen (lazy loading)
        <ScrollView>
            
            <FeaturedItem item={featCampsite} /> {/* Self closing 'FeaturedItem' passing it a prop of 'item' set equal to 'featCampsite' */}
            <FeaturedItem item={featPromotion} />
            <FeaturedItem item={featPartner} />
        </ScrollView>
    )
}

export default HomeScreen