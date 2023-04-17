import React from "react";
import{View, Text, KeyboardAvoidingView} from "react-native"
import{styles} from "./styles"
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { FontAwesome5 } from '@expo/vector-icons';

export function Cadastrar() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastro</Text>
                <View style={styles.formRow}>
                <AntDesign name="user" style={styles.icon} />
                <TextInput
                    placeholder="Nome"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />    
                </View>
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
            </KeyboardAvoidingView>
            <Text>insira seus dados para realizar seu cadastro</Text>
        </View>

            
    )
}