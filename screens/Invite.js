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

const Invite = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.around}>
                    <Text style={styles.bal}>Available wallet balance</Text>
                    <Text style={styles.amount}>(₹) 0.00</Text>
                </View>

                <Text style={styles.label}>Account number</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter account number"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        keyboardType="phone-pad"
                        maxLength={20}
                    />
                </View>

                <Text style={styles.label}>Account holder name</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Enter name"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        autoCapitalize="none"
                        maxLength={50}
                    />
                </View>

                <Text style={styles.label}>IFSC Code</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="IFSC Code"
                        placeholderTextColor="#757575"
                        autoCapitalize="none"
                        color={'#000'}
                        maxLength={20}
                    />
                </View>

                <Text style={styles.label}>Amount (₹)</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Amount"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        maxLength={20}
                        keyboardType="number-pad"
                    />
                </View>

                <Text style={styles.label}>Description</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        placeholder="Description"
                        placeholderTextColor="#757575"
                        color={'#000'}
                        autoCapitalize="none"
                        maxLength={500}
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonStyle}

                >
                    <Text style={styles.buttonTextStyle}>Proceed</Text>
                </TouchableOpacity>
            </View >
        </ScrollView>
    );
};

export default Invite;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    around: {
        marginTop: 50,
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 0.7,
        borderColor: '#ddd',
    },
    bal: {
        alignSelf: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    amount: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#307ecc',
        fontWeight: 'bold',
        fontSize: 30,
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