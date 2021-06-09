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

const Bank = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.label}>Name</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter name"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        autoCapitalize="none"
                        maxLength={50}
                    />
                </View>

                <Text style={styles.label}>Mobile</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter number"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        keyboardType="phone-pad"
                        maxLength={10}
                    />
                </View>
                
                <Text style={styles.label}>Email</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        maxLength={50}
                    />
                </View>

                <Text style={styles.label}>Bank Account</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter bank account"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        keyboardType="number-pad"
                        maxLength={20}
                    />
                </View>

                <Text style={styles.label}>Bank Name</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter your bank name"
                        placeholderTextColor="#757575"
                        autoCapitalize="none"
                        color={'#000'}
                        maxLength={50}
                    />
                </View>

                <Text style={styles.label}>IFSC Code</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter your IFSC Code"
                        placeholderTextColor="#757575"
                        autoCapitalize="none"
                        color={'#000'}
                        maxLength={20}
                    />
                </View>

                <Text style={styles.label}>UPI ID</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter your UPI ID"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        autoCapitalize="none"
                        maxLength={50}
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

export default Bank;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
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