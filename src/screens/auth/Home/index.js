import React,{useState} from "react";
import {styles} from './styles';
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text} from "react-native";

 const Home = () =>{
    const [keyword,setKeyword] = useState(false);
    return(
        <SafeAreaView>
            <Header
                showSearch
                onSearch={setKeyword}
                keyword={keyword}
                title="Find All You Need"
                />
         <ScrollView >
            <Text>Home</Text>
         </ScrollView>
        </SafeAreaView>
    );
 };

 export default React.memo(Home)