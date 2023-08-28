import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, Alert} from "react-native"
import { styles } from "./styles"
import { MaterialIcons, Fontisto, FontAwesome, AntDesign, FontAwesome5  } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface, ComponentLoading } from '../../components';
import { LoginTypes } from '../../navigations/login.navigation';
import { IRegister } from "../../services/data/User"
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';

export interface IErrorApi{
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

export function Cadastrar({navigation}: LoginTypes) {
    const[data, setData] = useState<IRegister>()
    const [isLoading, setIsloading] = useState(true)
    async function handleRegister(){
        try{
            setIsloading(true)
            if(data?.name && data.email && data.password){
                const response = await apiUser.register(data)
                Alert.alert('$response.data.name) sucesso chefia!')
                navigation.navigate('Login')
            } else {
                Alert.alert("Preencha todos os campos ae meu rei!")
            }

        } catch (error) {
            const err = error as AxiosError 
            const errData = err.response?.data as IErrorApi
            let message = ""
            if (errData) {
                for (const iterator of errData.errors)
                message = '${message} ${NodeIterator.message} \n'
            }

        } finally {
            setIsloading(false)
        }      
    }

    function handleChange(item: IRegister) {
        setData({ ...data, ...item})
    }
    useEffect(()=> {
        setTimeout(()=> {
            setIsloading(false)
        }, 5500);
    }, [])
    
    return (
        <>
        {isLoading ? (
            <ComponentLoading />

        ):(

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
                    onChangeText={(i) => handleChange({name: i})}
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
                    onChangeText={(i) => handleChange({email: i})}
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
                    onChangeText={(i) => handleChange({password: i})}
                />    
                 </View>
            <ComponentButtonInterface title='Salvar' type='primary' onPressI={handleRegister} />
            <ComponentButtonInterface title='Voltar' type='secondary' onPressI={()=> navigation.navigate ('Login')} />
        
            </KeyboardAvoidingView>
        </View>
    
            
    
        )}
        </>
    )
}


