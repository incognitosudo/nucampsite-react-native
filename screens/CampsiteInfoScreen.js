import  RenderCampsite from '../features/campsites/RenderCampsite';


const CampsiteInfoScreen = (props) => {
    //it is using RenderCampsite to pass a prop
    return <RenderCampsite campsite={props.campsite} />; //need to create a file for this. This is a return statement returning a single self-closing tag of RenderCampsite passinga  single prop of 'campsite' equal to props.campsite.
};

export default CampsiteInfoScreen;