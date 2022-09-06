import React from "react";
import {View, StyleSheet, ScrollView} from 'react-native';
import StyleText from "./StyleText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    backgroundColor:theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10
},
text:{
    color: theme.appBar.textSecondary,
    paddingHorizontal:10
},
scroll:{
    paddingBottom:15
},
active:{
    color: theme.appBar.textPrimary,
}
})


const AppBarTab = ({children, to}) => {
    const {pathname} = useLocation()

    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to}>
            <StyleText  fontWeight='bold' style={textStyles}>
            {children}
            </StyleText>
        </Link>
    )
}

const AppBar = () => {

    return (
        <View  style={styles.container} >
            <ScrollView horizontal style={styles.scroll}>
            <AppBarTab to='/' > Repositorios</AppBarTab>
            <AppBarTab to='/signin' > Sign in</AppBarTab>
            </ScrollView>
        </View>
        
    )
}

export default AppBar