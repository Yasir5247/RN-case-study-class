import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import {BallIndicator} from 'react-native-indicators';

interface BeeActivityIndicatorProps {
  color: string
  size: number
}

export const BeeActivityIndicator: React.FC<BeeActivityIndicatorProps> = ({
  color,
  size
}:BeeActivityIndicatorProps ) => {

  return (
    <View height={200} width={200} center>
      <BallIndicator color={color || '#000'} size={size || 20} />
    </View>
  );
};
