import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";

const VerifyEmail = ({ navigation }) => { // Add navigation prop
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerify = async () => {
    try {
      await Auth.confirmSignUp(data.username, verificationCode);
      // Verification successful, navigate to the next screen
      // You can redirect the user to a different screen or perform any other action here
      console.log("Verification successful");
      navigation.navigate('Home');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Verification Code:</Text>
        <TextInput
          value={verificationCode}
          onChangeText={(text) => setVerificationCode(text)}
          placeholder="Enter verification code"
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Button title="Verify" onPress={handleVerify} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;