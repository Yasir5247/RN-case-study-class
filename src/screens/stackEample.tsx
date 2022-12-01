import { observer } from "mobx-react";
import { NavioScreen } from "rn-navio";
import {Text, View} from 'react-native-ui-lib';
import React, { useRef, useState } from "react";
import { BButton } from "../components/button";
import { navio } from ".";


export const StackExampleScreen: NavioScreen = observer(({}) => {


  return (
    <View flex-1>
      <View flex-1 center>
        <BButton 
          marginV-s1 
          label={'login screen'} 
          onPress={()=> navio.push('LoginScreen', {type: 'push'})} 
        />
        <BButton 
          marginV-s1 
          label={'sign up screen'} 
          onPress={()=> navio.push('CaseStudyOneScreen', {type: 'push'})} 
        />
      </View>
    </View>
  )
})