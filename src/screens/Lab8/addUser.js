import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

const AddUser = () =>{
    const [name ,setName] = useState('');
    const [birthday, setBirthday] = useState('');

    const saveDate = async () => {
        const url ='https://65d4020b522627d50109beab.mockapi.io/users';
        let result = await fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name, birthday}),
        });
        result = await result.json();
        if(result){
            console.warn("Add success")
        }
    }

    return(
       <View style={styles.modelContent}>
            <TextInput 
                style={styles.input} 
                placeholder='Enter name' 
                value={name} 
                onChangeText={text => setName(text)}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Enter birthday' 
                value={birthday} 
                onChangeText={text => setBirthday(text)}
            />
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={saveDate}>
                    <Text style={styles.buttonText}> Add New</Text> 
                </TouchableOpacity>
            </View>
       </View>
    );
};

export default AddUser;
