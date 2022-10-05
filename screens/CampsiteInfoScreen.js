import  RenderCampsite from '../features/campsites/RenderCampsite';

//Destructure route prop in parameter list of CampsiteInfoScreen function, replacing previous value of props
const CampsiteInfoScreen = ({route}) => {
    //Destructure to create a 'campsite' variable from 'route.params' object
    const {campsite} = route.params; //pass this in <RenderCampsite>
    //it is using RenderCampsite to pass a prop
    return <RenderCampsite campsite={campsite} />; //need to create a file for this. This is a return statement returning a single self-closing tag of RenderCampsite passinga  single prop of 'campsite' equal to props.campsite.


};

export default CampsiteInfoScreen;