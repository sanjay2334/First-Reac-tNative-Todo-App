import {Text,StyleSheet,View, TouchableOpacity} from 'react-native'

const Task = (props) => {
    return ( 
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
     );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection :'row',
        alignItems: 'center',
        flexWrap : 'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    text:{
        maxWidth: '80%'
    },
    circle:{
        width:12,
        height:12,
        borderColor:'#55bcf6',
        borderWidth: 2,
        borderRadius:5
    },
})
 
export default Task;