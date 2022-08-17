import { ScrollView } from "react-native";
import { photoListStyles } from "../assets/styles";
import PhotoCard from "../components/PhotoCard";

// import { photoCardStyles } from "../assets/styles";

const bsPhotos =[
    {id: 1, description: 'selfie with mom'},
    {id: 2,description: 'Photo of Breakfast'},
    {id: 3,description: 'My nails painted'},
    {id: 4,description: 'Abandoned door'},
    {id: 5,description: 'French Bulldog puppy'},
    {id: 6,description: 'Wynwood Walls'},
    {id: 7,description: 'Latte art'},
    {id: 8,description: 'Legs at beach'},
    {id: 9,description: 'Black and White skyline'},
    {id: 10,description: 'Airplane wing in sky'},

]

function PhotoList() {
    return (
        <ScrollView style={photoListStyles.photoList}>
            {bsPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </ScrollView>
    )
}



export default PhotoList;