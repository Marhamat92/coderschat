import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  Icon,
} from "react-native";
import tw from "twrnc";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";
import { register_user } from "../../services/allServices";

function Register({ navigation }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordAgain: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.passwordAgain) {
      Alert.alert("Passwords do not match");
      return;
    } else {
      register_user(data.name, data.email, data.password)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          Alert.alert("Error has occured");
        });
      Alert.alert("Success", "You are registered");
      navigation.navigate("Login");
    }
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);

  return (
    <SafeAreaView style={tw`bg-[#ff6f00] h-full`}>
      <View style={tw`flex items-center mt-40`}>
        <Text style={tw`text-[#0a065c] text-4xl font-bold `}>CodersChat</Text>
      </View>
      <View style={tw`mt-40 bg-transparent`}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              textareaStyle={tw` text-white text-md font-normal  pl-2  `}
              inputStyle={tw` border-r-transparent border-t-transparent border-l-transparent   border-b-white border mx-2 py-2`}
              placeholder="Your Name..."
              value={value}
            />
          )}
          name="name"
          rules={{ required: true }}
        />
        {errors.name && (
          <Text style={tw`ml-4 text-[#0a065c]`}>Name is required.</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              textareaStyle={tw` text-white text-md font-normal  pl-2  `}
              inputStyle={tw` border-r-transparent border-t-transparent border-l-transparent   border-b-white border mx-2 py-2`}
              placeholder="Enter your email..."
              value={value}
            />
          )}
          name="email"
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Email is invalid",
          }}
        />
        {errors.email && (
          <Text style={tw`ml-4 text-[#0a065c]`}>Email is Invalid.</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              textareaStyle={tw` text-white text-md font-normal  pl-2  `}
              inputStyle={tw`flex-row justify-between border-r-transparent border-t-transparent border-l-transparent   border border-b-white mx-2 mt-2 py-2`}
              placeholder="Enter your password..."
              value={value}
              secureTextEntry={showPassword}
              icon={
                <FontAwesome
                  name={showPassword ? "eye-slash" : "eye"}
                  size={20}
                  color="#fff"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        {errors.password && (
          <Text style={tw`ml-4 text-[#0a065c]`}>Password is required.</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              textareaStyle={tw` text-white text-md font-normal  pl-2  `}
              inputStyle={tw`flex-row justify-between border-r-transparent border-t-transparent border-l-transparent   border border-b-white mx-2 mt-2 py-2`}
              placeholder="Enter your password again..."
              value={value}
              secureTextEntry={showConfirmPassword}
              icon={
                <FontAwesome
                  name={showConfirmPassword ? "eye-slash" : "eye"}
                  size={20}
                  color="#fff"
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              }
            />
          )}
          name="passwordAgain"
          rules={{ required: true }}
        />
        {errors.passwordAgain && (
          <Text style={tw`ml-4 text-[#0a065c]`}>
            Re-type password is required.
          </Text>
        )}
        <View style={tw`flex-col  justify-center mt-3`}>
          <Button
            titleStyle={tw`text-[#FFA040] font-bold text-xl text-center`}
            buttonStyle={tw` py-1 bg-white  rounded-md mx-2 mt-2`}
            title="Register"
            onPress={handleSubmit(onSubmit)}
          />
          <Button
            onPress={() => navigation.navigate("Login")}
            titleStyle={tw` text-white font-bold text-xl text-center`}
            buttonStyle={tw` py-1 bg-[#FFA040]  rounded-md mx-2 mt-2`}
            title="Back"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;
