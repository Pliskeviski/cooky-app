import * as React from "react"
import { View, ViewStyle, TextStyle, TextInput, KeyboardTypeOptions } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { spacing, color } from "../../../theme";
import { Text } from "../text/text";
import { translate } from "../../../i18n";
import { TextInputMask } from 'react-native-masked-text'

export interface InputFieldProps {
  placeholder?: string,
  hideText?: boolean,
  icon?: string,
  style?: ViewStyle,
  txPlaceholder?: string,
  inputType?: KeyboardTypeOptions,
  error?
  value?,
  onChangeText?,
  onBlur?
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

const errorStyle: TextStyle = {
  paddingLeft: spacing[2],
  paddingTop: spacing[1],
  color: color.error,
  fontSize: 12
}

const errorInput: TextStyle = {
  borderColor: color.error,
  borderWidth: 1,
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function InputField(props: InputFieldProps) {
  // grab the props
  const { value, onChangeText, placeholder, hideText, txPlaceholder, inputType = 'default', icon, style, error, onBlur, ...rest } = props
  const textStyle = {}

  return (
    <View>
      <View style={[searchSection, style ]} {...rest}>
        <Icon style={searchIcon} name={icon} size={15} color="#9E9E9E" />
        <TextInput
          style={[input, error ? errorInput : null]}
          placeholder={placeholder || translate(txPlaceholder)}
          onChangeText={onChangeText}
          secureTextEntry={hideText}
          value={value}
          onBlur={onBlur}
          autoCapitalize = 'none'
          keyboardType={inputType}
        />
      </View>
      <View>
        <Text style={[errorStyle]}>{error}</Text>
      </View>
    </View>
  )
}

export function InputPhoneField(props: InputFieldProps) {
  const { value, onChangeText, placeholder, hideText, txPlaceholder, inputType = 'default', icon, style, error, onBlur, ...rest } = props
  const textStyle = {}

  return (
    <View>
      <View style={[searchSection, style ]} {...rest}>
        <Icon style={searchIcon} name={icon} size={15} color="#9E9E9E" />
        <TextInputMask
          type={'cel-phone'}
          style={[input, error ? errorInput : null]}
          placeholder={placeholder || translate(txPlaceholder)}
          onChangeText={onChangeText}
          secureTextEntry={hideText}
          value={value}
          onBlur={onBlur}
          autoCapitalize = 'none'
          keyboardType={inputType}
        />
      </View>
      <View>
        <Text style={[errorStyle]}>{error}</Text>
      </View>
    </View>
  )
}
