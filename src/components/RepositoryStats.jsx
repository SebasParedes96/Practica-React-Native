import React from "react";
import { View} from "react-native"
import StyleText from "./StyleText"

const parseThousands = value =>{
    return value >= 1000
    ? `${Math.round(value/100)/10}k`
    : String(value)
}

const RepositoryStats = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyleText align='center' fontWeight='bold'>Horas</StyleText>
                <StyleText align='center'>{props.horas}</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>Lugar</StyleText>
                <StyleText align='center'>{props.lugar}</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>Esfuerzo</StyleText>
                <StyleText align='center' >{parseThousands(props.esfuerzo)}</StyleText>

            </View>
        </View>
    )
}

export default RepositoryStats