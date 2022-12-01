import { observer } from "mobx-react";
import { NavioScreen } from "rn-navio";
import {Text, View} from 'react-native-ui-lib';
import React, { useRef, useState } from "react";
import { ScreenBackground } from "../components/ScreenBackground";
import { useForm } from "react-hook-form";
import { BeeTextField } from "../components/ui/BeeTextField";
import { BeeButton } from "../components/ui/BeeButton";
import { Alert } from "react-native";


export const CaseStudyOneScreen: NavioScreen = observer(({}) => {


  //refs
  const emailRef: any = useRef(null);

  //state
  const [loading, setLoading] = useState<boolean>(false)


  const { control, handleSubmit, setError } = useForm();


  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


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
      <ScreenBackground>
        <View flex-1 centerV>
          <View padding-10 center>
            <Text text40BL>Registration</Text>
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
              label={'email'}
              placeholder={'email'}
              name={"email"}
              rules={{
                required: 'email is required',
                pattern:  { 
                  value: EMAIL_REGEX, 
                  message: 'bad email'
                }
              }}
              keyboardType={'email-address'}
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
              title={'sign up'}
              loadingStatus={loading}
              onPress={handleSubmit(handleRegistration)}
            />
          </View>
        </View>
      </ScreenBackground>
    </View>
  )
})