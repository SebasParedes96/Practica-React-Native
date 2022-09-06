import React from "react";
import { Text, View} from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";

const Main = () =>{
    return (
        <View style={{ flex :1 }}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/signin" element={<Text>Trabajando en ello</Text>} />
            </Routes>
        </View>
    )
}


export default Main