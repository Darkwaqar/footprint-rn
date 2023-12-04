import { View, Text, Button, TextField, Checkbox } from 'react-native-ui-lib';
import React, { useState } from 'react';
import tw from 'twrnc';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={tw`flex-1 gap-4 px-2`}>
      <Text style={tw`text-xl`}>Login</Text>
      <Text style={tw`text-xl`}>NEW CUSTOMER</Text>
      <Text style={tw`text-md`}>
        By creating an account on our website you will be able to shop faster,
        be up to date on an orders status, and keep track of the orders you have
        previously made.
      </Text>
      <Button label="Register"></Button>
      <Text>RETURNING CUSTOMER</Text>
      <TextField
        // $outlineDanger
        value={email}
        label="Email"
        placeholder={'email'}
        onChangeText={setEmail}
        enableErrors
        validateOnBlur
        validate={['required', 'email', value => value.length > 6]}
        // onChangeValidity={(isValid: boolean) =>
        //   console.warn('validity changed:', isValid, Date.now())
        // }
        validationMessage={[
          'Field is required',
          'Email is invalid',
          'Password is too short',
        ]}
        showCharCounter
        maxLength={30}
      />
      <Button link style={tw`underline bg-red`} label="forget password?" />
      <TextField
        value={password}
        label="Password"
        placeholder={'password'}
        onChangeText={setPassword}
        enableErrors
        validate={['required', value => value.length > 6]}
        // onChangeValidity={(isValid: boolean) =>
        //   console.warn('validity changed:', isValid, Date.now())
        // }
        validationMessage={['Field is required', 'password is too short']}
        validateOnBlur
        showCharCounter
        maxLength={30}
      />
      <Checkbox
        value={false}
        label="REMEMBER ME?"
        onValueChange={() => console.log('value changed')}
      />
      <Button label="Login"></Button>
    </View>
  );
}
