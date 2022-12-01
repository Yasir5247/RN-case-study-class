import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Incubator, Colors, Text} from 'react-native-ui-lib';
import { useForm, Controller } from "react-hook-form";

const {TextField} = Incubator;

type BeeTextFieldProps = {
  innerRef?: any;
  control: any;
  label?: string;
  placeholder?: string;
  name: string;
  rules: {};
  leadingAccessory?: any;
  trailingAccessory?: any;
  secureTextEntry?: boolean;
  showCharCounter?: boolean
  maxLength?: number;
  keyboardType?: string;
};

export const BeeTextField: React.FC<BeeTextFieldProps> = ({
  innerRef,
  control,
  label,
  placeholder,
  name,
  rules,
  leadingAccessory,
  trailingAccessory,
  secureTextEntry,
  keyboardType,
  showCharCounter,
  maxLength
}: BeeTextFieldProps) => {
  
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <TextField
          ref={innerRef}
          label={label}
          placeholder={placeholder}
          wmedium vsmall
          value={value}
          onChangeText={onChange}
          validationMessage={[error?.message]}
          validationMessageStyle={{ paddingVertical: 5}}
          leadingAccessory={leadingAccessory}
          trailingAccessory={trailingAccessory}
          enableErrors
          fieldStyle={styles.withFrame}
          autoCapitalize="none"
          labelStyle={styles.lableStyle}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          showCharCounter={showCharCounter}
          maxLength={maxLength}
        />
      )}
    />
  )
};

const styles = StyleSheet.create<any>({
  withUnderline: {
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  withFrame: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 4
  },
  lableStyle: {
    paddingBottom: 10
  }
});
