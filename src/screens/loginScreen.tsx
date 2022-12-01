import { observer } from "mobx-react";
import { NavioScreen } from "rn-navio";
import {Text, View} from 'react-native-ui-lib';
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BeeTextField } from "../components/ui/BeeTextField";
import { BeeButton } from "../components/ui/BeeButton";
import { Alert } from "react-native";


export const LoginScreen: NavioScreen = observer(({}) => {


  //refs
  const emailRef: any = useRef(null);

  //state
  const [loading, setLoading] = useState<boolean>(false)


  const { control, handleSubmit, setError } = useForm();


  const handleRegistration = (data: any) => {

    console.log('data', data)

    try {
      setLoading(true)

      setTimeout(function () {
        Alert.alert('im title', JSON.stringify(data), [
          { text: 'cancel', onPress: () => null, style: 'cancel' },
          { text: 'ok', onPress: () => null },
        ]);
        setLoading(false)
      }, 5000);

    } catch (error) {
      setLoading(false)
    }
    
  }

  return (
    <View flex-1>
        <View flex-1 centerV>
          <View padding-10 center>
            <Text text40BL>Login</Text>
          </View>
          <View padding-10>
            <BeeTextField
              innerRef={emailRef}
              control={control}
              label={'user name'}
              placeholder={'user name'}
              name={"username"}
              rules={{
                required: 'user name is required',
              }}
            />
            <BeeTextField
              innerRef={emailRef}
              control={control}
              label={'password'}
              placeholder={'password'}
              name={"password"}
              rules={{
                required: 'password is required',
              }}
              secureTextEntry
            />
          </View>
          <View>
            <BeeButton
              title={'login'}
              loadingStatus={loading}
              onPress={handleSubmit(handleRegistration)}
            />
          </View>
        </View>
    </View>
  )
})