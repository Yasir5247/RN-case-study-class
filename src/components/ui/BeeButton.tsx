import React from 'react';
import {TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet, ActivityIndicator} from 'react-native';

import {View, Text} from 'react-native-ui-lib';


type BeeButtonProps = {
  title: string;
  icon?: string;
  loadingStatus?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

export const BeeButton: React.FC<BeeButtonProps> = ({
  title,
  icon,
  loadingStatus,
  disabled,
  onPress,
}: BeeButtonProps) => {
  const b = {disabled, onPress};

  const content: React.ReactElement = (
    <View center br100 style={styles.buttonStyle}>
      <View row center>
        {!!icon && <View marginR-m>{icon}</View>}
        {!!title && (
          <Text wmedium vsmall textColor>
            {title}
          </Text>
        )}
        {!!loadingStatus && (
          <View marginL-m>
            <ActivityIndicator color={'#000'} size={20} />
          </View>
        )}
      </View>
    </View>
  );

  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback {...b}>{content}</TouchableNativeFeedback>;
  }
  return <TouchableOpacity {...b}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create<any>({
  buttonStyle: {
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
    width: '100%',
  },
});
