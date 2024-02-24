import React,{useState} from "react";
import {styles} from "../Header/style"
import { Pressable, View } from "react-native";
const Header = ({title,onBackPress,onLogout,showLogout,showSearch,onSearch,keyword,showBack}) =>{
    const {showSearchInput,setshowSearchInput} =useState(false);
    const onSearchClick =()=>{
        setshowSearchInput(s => !s)
    }
    return(
        <View style ={styles.mainContainer}>
            <View style ={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style ={styles.icon} source = {require('../../assets/images/back.jpg')}/>
                    </Pressable>
                ) :showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                           <Image style ={styles.icon} source = {require('../../assets/images/search.jpg')}/>
                    </Pressable> 
                ) : <View style ={styles.space} /> }
                <Text style ={styles.title}>{title}</Text>
                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style= {styles.icon} source={require('../../assets/images/logout.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}
            </View>
            

        </View>
    )
}
export default React.memo(Header);