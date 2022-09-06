import React from "react"
import { Image, View, StyleSheet } from "react-native"
import StyleText from "./StyleText"
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"

const RepositoryItemHeader = (props) =>(
    <View  style={{flexDirection:'row', paddingBottom:2}}>
        <View style={{paddingRight:10}}>
            <Image style={styles.image} source={{ uri: props.avatarUrl }} />
        </View>
        <View  style={{flex:1}} >
            <StyleText fontWeight='bold'>{props.descripcion}</StyleText>
            <StyleText color='secondary' >{props.detalle}</StyleText>
            <StyleText style={styles.completado}>{props.completado}</StyleText>
        </View>

    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container} >
        <RepositoryItemHeader {...props}   />
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    completado: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginTop:4,
        marginBottom:4,
        borderRadius:4,
        overflow:'hidden'
    },
    image: {
        width:48,
        height:48,
        borderRadius:4
    }
})

export default RepositoryItem