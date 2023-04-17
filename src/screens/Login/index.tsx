import React from "react";
import{View, Text, KeyboardAvoidingView} from "react-native"
import{styles} from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { FontAwesome5 } from '@expo/vector-icons';
import { ButtonInterface } from "../../components/ButtonInterface";
import { ComponentButtonInterface } from "../../components";
import { LoginTypes } from "../../navigations/login.navigation";

export function Login({navigation}: LoginTypes) {
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
                <ComponentButtonInterface 
                title="Entrar" 
                type="primary" 
                onPressI={() => navigation.navigate('Cadastrar')}  />
            </KeyboardAvoidingView>
            <Text>insira seus dados para realizar login</Text>
        </View>

            
    )
}