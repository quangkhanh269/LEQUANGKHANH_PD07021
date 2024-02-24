import React from "react";
import { styles } from "./styles";
import {  Image, TouchableOpacity, View } from "react-native";

const Checkbox =({checked,onCheck})=>{
    return(
        <TouchableOpacity 
        activeOpacity={1}
        onPress={()=> onCheck(!checked)}
        style={styles.container}>
            {checked ?(
                <View style={styles.innerContainer}>
                    <Image
                    style={styles.checkIcon}
                    source={require('../../assets/Icons/eye.png')}></Image>
                    </View>
            ) : null}

        </TouchableOpacity>
    );
};
export default React.memo(Checkbox);