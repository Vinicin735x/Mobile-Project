import React, { useState } from "react";
import{View, Text, KeyboardAvoidingView, Alert} from "react-native"
import{styles} from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { FontAwesome5 } from '@expo/vector-icons';
import { ButtonInterface } from "../../components/ButtonInterface";
import { ComponentButtonInterface } from "../../components";
import { LoginTypes } from "../../navigations/login.navigation";
import { IAutenticate } from "../../services/data/User";
import { Axios, AxiosError } from "axios";
import { useAuth } from "../../hooks/auth";

export function Login({navigation}: LoginTypes) {
    const { signIn } = useAuth();
    const [data,setData] = useState<IAutenticate>();
    const [isLoading, setIsLoading] = useState(true);
    async function handleSignIn(){
        try{
            setIsLoading(true);
            if(data?.email && data.password){
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos");
                setIsLoading(false);
            }
        }catch(error){
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading(false)
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />    
                </View>

                <View style={styles.formRow}>
                <FontAwesome5 name="key" style={styles.icon} />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={colors.black}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={styles.input}
                />    
                </View>
                <ComponentButtonInterface title="Cadastrar" type="primary"  onPressI={() => navigation.navigate('Cadastrar')}  />
                <ComponentButtonInterface title="Entrar"  type='secondary' onPressI={()=> navigation.navigate('Tab')} />
            </KeyboardAvoidingView>
            <Text>insira seus dados para realizar login</Text>
        </View>

            
    )
}