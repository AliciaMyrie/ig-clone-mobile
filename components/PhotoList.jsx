import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PhotoCard from "./PhotoCard";

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
        <ScrollView style={styles.photoList}>
            {bsPhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    photoList: {
        flex: 1,
        backgroundColor: '#ae8e8e8',
    }
})

export default PhotoList;