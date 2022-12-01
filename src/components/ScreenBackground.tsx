import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import {View, ViewProps} from 'react-native-ui-lib';

interface BackgroundProps {
  children: React.ReactNode
}

export const ScreenBackground: React.FC<BackgroundProps> = ({children}: BackgroundProps) => {
  return (
    <View flex-1>
      <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    backfaceVisibility: 'visible',
    resizeMode: 'cover',
    opacity: 0.8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }
});