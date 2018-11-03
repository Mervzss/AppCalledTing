import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import {ExBaseItem} from './ExBaseList'
import { TingBigText } from '../../CustomUI'
export const ExImageList = props => {
    return (
        <View style={{ width: '100%'}}>
            <View style={styles.tingtextView}>
                <TingBigText style={styles.tingtextStyle}>{props.titleList}</TingBigText>
            </View>
            <View style={styles.imageWrapper}>
                <FlatList
                    data={props.getData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingRight: 115 }}
                    style={{ height: '100%', paddingLeft: '2%', paddingTop: '5%', paddingRight: '5%' }}
                    renderItem={(value) =>
                        (
                                <ExBaseItem imgSource={value.item.img} initialText={value.item.room_size}
                                    headText={value.item.desc}
                                    footText={value.item.price} 
                                    onIconPress ={() => props.savedIt(value.item.id)}
                                    saveState = {value.item.saved}
                                    />
                        )
                    }
                    keyExtractor={(index) => index.toString()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        flexDirection: 'row',
        height: 250
    },
    tingtextView: {
        width: '100%',
        paddingTop: '5%',
        paddingLeft: '3%',
        marginLeft: '3%',
    },
    tingtextStyle: {
        color: '#585858',
        paddingBottom:'0%'

    },
});

