import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Unorderedlist from 'react-native-unordered-list';

const Recharge = () => {
  const rearray = [500, 800, 1000, 3000, 5000, 10000, 30000, 50000];
  const [amount, setAmount] = useState();
  const [bgcolor, setBgcolor] = useState(false);
  const handleOnpress = (props) => {
    setAmount(props);
  };
  return (
    <View>
      <View style={styles.redimage}>
        <LinearGradient colors={['#BD3F32', '#CB356B']} style={styles.balance}>
          <View>
            <Text style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>
              My Balance
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
              $ 0.00
            </Text>
          </View>
          <TouchableOpacity style={styles.recharge}>
            <Text style={{ color: 'white', paddingTop: 5 }}>
              Recharge Help {`>`}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.redimage}>
        <LinearGradient colors={['#6dd5ed', '#2193b0']} style={styles.payway}>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Pay Way
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={styles.pay}>
              <Text style={styles.text}>STP-SEP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pay}>
              <Text style={styles.text}>STB-CAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pay}>
              <Text style={styles.text}>STB66-H</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.endbox}>
        <Text style={{ marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}>
          Recharge amount
        </Text>
        <TextInput
          placeholder="1000"
          autoCapitalize="none"
          value={amount}
          maxLength={50}
          style={styles.input}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.amountbox,
              amount == 500 ? styles.active : styles.notactive,
            ]}
            onPress={() => handleOnpress('500')}
          >
            <Text>500</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.amountbox,
              amount == 800 ? styles.active : styles.notactive,
            ]}
            onPress={() => handleOnpress('800')}
          >
            <Text>800</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.amountbox,
              amount == 1000 ? styles.active : styles.notactive,
            ]}
            onPress={() => handleOnpress('1000')}
          >
            <Text>1000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.amountbox,
              amount == 3000 ? styles.active : styles.notactive,
            ]}
            onPress={() => handleOnpress('3000')}
          >
            <Text>3000</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.amountbox2,
              amount == 5000 ? styles.active : styles.notactive,
            ]}
            onPress={() => handleOnpress('5000')}
          >
            <Text>5000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.amountbox2,
              amount == 10000 ? styles.active : styles.notactive,
            ]}
            onPress={() => handleOnpress('10000')}
          >
            <Text>10000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.amountbox2,
              amount == 30000 ? styles.active : styles.notactive,
            ]}
            onPress={() => handleOnpress('30000')}
          >
            <Text>30000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.amountbox2,
              amount == 50000 ? styles.active : styles.notactive,
            ]}
            onPress={() => handleOnpress('50000')}
          >
            <Text>50000</Text>
          </TouchableOpacity>
        </View>
        <Unorderedlist style={styles.note}>
          <Text>To ensure the success rate of your transaction,</Text>
          <Text style={{ color: 'red' }}>
            make sure your mobile phone number and email adress are accurate.
          </Text>
        </Unorderedlist>

        <TouchableOpacity style={{ marginVertical: 20 }}>
          <LinearGradient
            colors={['#FFB75E', '#ED8F03']}
            style={styles.rechargebtn}
          >
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }}>
              RECHARGE
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recharge;

const styles = StyleSheet.create({
  active: { backgroundColor: '#ff9f21' },
  notactive: { backgroundColor: '#ebebeb' },
  balance: {
    flexDirection: 'row',
    borderRadius: 7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  redimage: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  recharge: {
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    paddingHorizontal: 7,
    borderRadius: 5,
  },
  payway: {
    borderRadius: 7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    marginHorizontal: 10,
    marginVertical: 10,
    color: 'white',
  },
  pay: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    paddingHorizontal: 7,
    borderRadius: 5,
    marginRight: 15,
    marginHorizontal: 4,
  },
  endbox: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    width: '95%',
  },
  input: {
    backgroundColor: '#ebebeb',
    marginVertical: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },
  amountbox: {
    marginLeft: 10,
    marginVertical: 10,
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 5,
  },
  amountbox2: {
    backgroundColor: '#ebebeb',
    marginLeft: 10,
    marginVertical: 10,
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 5,
  },
  note: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  rechargebtn: {
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
