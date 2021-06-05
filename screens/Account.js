// Import React and Component
import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const Account = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.personal}>Personal Details</Text>
                
                <Text style={styles.label}>Account Number</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter account number"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        keyboardType="number-pad"
                        maxLength={20}

                    />
                </View>

                <Text style={styles.label}>My Superior</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter your Superior"
                        placeholderTextColor="#757575"
                        autoCapitalize="none"
                        color={'#000'}
                        maxLength={20}

                    />
                </View>

                <Text style={styles.label}>Nickname</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter your nickname"
                        placeholderTextColor="#757575"
                        autoCapitalize="none"
                        color={'#000'}
                        maxLength={50}

                    />
                </View>

                <Text style={styles.label}>Change Password</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter Password"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        maxLength={25}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonStyle}

                >
                    <Text style={styles.buttonTextStyle}>Save</Text>
                </TouchableOpacity>
            </View >
        </ScrollView>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },
    personal: {
        marginTop: 10,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
    },
    label: {
        marginTop: 10,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 20,
    },
    textbox: {
        width: '40%',
        height: 40,
        marginLeft: 20,
        margin: 8,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
    },
    SectionStyle: {
        height: 40,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 0.7,
        borderColor: '#ddd',
        margin: 8,
        paddingLeft: 15,
    },
    buttonStyle: {
        backgroundColor: '#FFBF00',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 30,
        width: '95%',
        height: 40
    },
    buttonTextStyle: {
        color: '#fff',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 20,
    },
});