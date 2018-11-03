import React from 'react'
import { View, Image, StyleSheet, Text, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export const ExBaseItem = props => {
    return (
        <View style={{ paddingRight: '1.4%', paddingBottom: '1.4%' }}>
        <View style={styles.imageWrapper}>
        <View style={styles.imagewithIcon}>
            <Image resizeMode='stretch' source={{uri:props.imgSource}} style={styles.imageView} />
                <Icon style={[styles.badge]} name={Platform.OS === 'android' ? "md-heart-outline" : "ios-heart-outline"} 
                color={props.saveState ? '#ff3333' : 'white' }
                size={30}  onPress={props.onIconPress}/>
        </View>
            <Text style={styles.textViewInitial}>{props.initialText}</Text>
            <Text style={styles.textViewHead}>{props.headText}</Text>
            <Text style={styles.textViewFoot}>{props.footText}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper:{
        borderColor:'#D8D8D8',
        borderWidth: 1,
        width: 160,
        height:'90%',
        
    },
    imageView: {
        width: '100%',
        height: '100%'
    },
    imagewithIcon:{
        width: '100%',
        height: '40%'
    },
    textViewInitial: {
        fontSize: 10,
        alignSelf: 'flex-start',
        paddingLeft: '5%',
        paddingTop: '5%',
        color: '#585858',
        height:'10%'
    },
    textViewHead: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: '5%',
        paddingTop: '5%',
        color: '#585858',
        height:'30%'
    },
    textViewFoot: {
        fontSize: 13,
        alignSelf: 'flex-start',
        paddingLeft: '5%',
        paddingTop: '5%',
        color: '#848484',
        height:'20%'
    },
    badge: {
        transform:[
            {translateY:-77},
            {translateX:125}
        ]
    },
});
