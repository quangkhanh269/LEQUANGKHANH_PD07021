import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import React, { useEffect, useState } from "react";

const ListUser = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);

    const getAPI = async () => {
        const url = 'https://65d4020b522627d50109beab.mockapi.io/users';
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
    };

    const handleDelete = async id => {
        const url = 'https://65d4020b522627d50109beab.mockapi.io/users';
        let result = await fetch(`${url}/${id}`, {
            method: 'Delete',
        });
        result = await result.json();
        if (result) {
            getAPI();
        }
    };

    const handleUpdate = data => {
        setOpenDialog(true);
        setSelectedUser(data);
    };

    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getAPI();
        });
        return focusHandler;
    }, [navigation]);

    return (
        <ScrollView>
            <TouchableOpacity
                style={styles.buttonNew}
                onPress={() => navigation.navigate('AddUser')}>
                <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
            {data.length ? data.map((item, index) => (
                <View style={styles.container} key={index}>
                    <View style={styles.containerText}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.birthday}>{item.birthday}</Text>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText} onPress={() => handleUpdate(item)}>
                                Update
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText} onPress={() => handleDelete(item.id)}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )) : null}
            <Modal visible={openDialog} transparent={true}>
                <UpdateModel
                    setOpenDialog={setOpenDialog}
                    selectedUser={selectedUser}
                    getAPI={getAPI}
                />
            </Modal>
        </ScrollView>
    );
};

const UpdateModel = props => {
    const [name, setName] = useState(undefined);
    const [birthday, setBirthday] = useState(undefined);

    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name);
            setBirthday(props.selectedUser.birthday);
        }
    }, [props.selectedUser]);

    const updateUser = async () => {
        const url = 'https://65d4020b522627d50109beab.mockapi.io/users';
        const id = props.selectedUser.id;
        let result = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, birthday }),
        });
        result = await result.json();
        if (result) {
            props.getAPI();
            props.setOpenDialog(false);
        }
    };

    return (
        <View style={styles.modelContent}>
            <TextInput
                style={styles.input}
                placeholder='Nhập tên'
                value={name}
                onChangeText={text => setName(text)} 
            />
            <TextInput
                style={styles.input}
                placeholder='Nhập ngày sinh'
                value={birthday}
                onChangeText={text => setBirthday(text)} 
            />
            <View style={styles.birthday}>
                <TouchableOpacity style={styles.button} onPress={updateUser}>
                    <Text style={styles.buttonText}> Update </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.setOpenDialog(false)}>
                    <Text style={styles.buttonText}> Close </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ListUser;
