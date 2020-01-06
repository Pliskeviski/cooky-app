import * as React from "react"
import { View, ViewStyle, TextStyle, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { spacing, color } from "../../../theme";

export interface InputFieldProps {
  placeholder?: string,
  hideText?: boolean,
  icon?: string,
  style?: ViewStyle,
  value?,
  onChangeText?
}

const searchSection: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
}

const searchIcon: TextStyle = {
  paddingLeft: spacing[5],
  paddingTop: spacing[1],
  display: 'flex',
  position: 'absolute',
  elevation: 6
}

const input: TextStyle = {
  height: 44, 
  borderWidth: 0, 
  borderRadius: 20, 
  marginTop: spacing[2], 
  shadowColor: '#DEDEDE',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 1,
  shadowRadius: 1,
  elevation: 5,
  backgroundColor: color.palette.white,
  paddingLeft: spacing[7],
  flex: 1,
  fontSize: 12,
  fontFamily: 'Poppins-Regular',
  textAlignVertical: 'center'
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function InputField(props: InputFieldProps) {
  // grab the props
  const { value, onChangeText, placeholder, hideText, icon, style, ...rest } = props
  const textStyle = {}

  return (
    <View style={[searchSection, style]} {...rest}>
      <Icon style={searchIcon} name={icon} size={15} color="#9E9E9E" />
      <TextInput
        style={input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={hideText}
        value={value}
      />
    </View>
  )
}
