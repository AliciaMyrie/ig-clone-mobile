
import { Image, Text, View} from 'react-native'
import { photoCardStyles } from "../assets/styles";

import { Avatar, Icon } from 'react-native-elements';
 
function PhotoCard ({photo}) {
    const BASE_URL = "https://source.unsplash.com/random?sig="
return (
    <>
    
        <View style={photoCardStyles.container}>
            <View style={photoCardStyles.cardHeader}>
                <Avatar rounded size = "small" source={{ uri: `https://randomuser.me/portraits/men/${photo.id}.jpg`}} />
        
                <View style={photoCardStyles.cardHeadertext}>
                    <Text>Bob Marley</Text>
                    <Text style={photoCardStyles.cardLocation}>Miami</Text>
                </View>
            </View>
            <Icon name="more-vert" />
        </View>
            <Image source={{ uri: BASE_URL + 1}} style={photoCardStyles.cardImage} />
            <Text style={photoCardStyles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis obcaecati voluptate eaque eveniet, accusamus, quo voluptas odit nemo culpa ipsam itaque adipisci officiis soluta atque ipsum ullam minima est.</Text>
                        
        </>
    
    )
}
export default PhotoCard;