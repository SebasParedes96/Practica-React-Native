import React from "react"
import { View, StyleSheet } from "react-native"
import StyleText from "./StyleText"
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container} >
        <StyleText fontSize='subheading' fontWeight='bold'>{props.descripcion}</StyleText>
        <StyleText  style={styles.completado}>{props.completado}</StyleText>
        <RepositoryStats {...props} ></RepositoryStats>
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
        borderRadius:4,
        overflow:'hidden'
    }
})

export default RepositoryItem