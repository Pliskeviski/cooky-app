import * as React from "react"
import { View, Keyboard, TextStyle, ViewStyle } from "react-native";
import { Formik } from "formik";
import { color, spacing } from "../../../theme";
import { Text } from "../../atoms/text/text";
import * as Yup from 'yup'
import { translate } from "../../../i18n";
import { InputField, InputPhoneField } from "../../atoms/input-field/input-field";
import { Button } from "../../atoms/button/button";
import { MT, BOLD } from "../../../theme/style";
import { PartialProps } from "../../../screens/register-screen/partial-props";
import { ScreenStep } from "../../../screens";
  
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Poppins-Regular",
}

const CONTENT: TextStyle = {
    fontFamily: 'Ubuntu-Bold',
    color: color.default,
    fontSize: 22,
    textAlign: "center",
    marginTop: spacing[6]
  }
  
  const CONTENT_SM: TextStyle = {
    fontFamily: 'Ubuntu-Regular',
    color: color.default,
    fontSize: 14,
    textAlign: "center",
    marginTop: spacing[5]
  }
  
  const CONTINUE: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: color.defaultButton,
    borderRadius: 40,
    elevation: 8,
    shadowColor: 'rgba(200, 0, 0, 1)',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  }
  const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'Poppins-Regular'
  }
  const FOOTER: ViewStyle = {
    backgroundColor: color.transparent,
  }
  const FOOTER_CONTENT: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: color.transparent
  }
  

export const PhoneNumberPartial: React.FunctionComponent<PartialProps> = props => {
    return (
        <View>
          <Text style={CONTENT} tx="registerScreen.createAccount" />
          <Text style={CONTENT_SM} tx="registerScreen.phoneNumberValidation" />

          <Formik
            initialValues={{
              phone: '',
            }}
            validationSchema={
              Yup.object().shape({
                phone: Yup.string()
                  .min(15, translate('errors.phoneNumber'))
                  .required(translate('errors.requiredField')),
              })
            }
            onSubmit={values => {
              Keyboard.dismiss();
              // api
              props.submitFunction(ScreenStep.ConfirmPhoneNumber);
            }
            }>
            {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
              <View>
                <View style={MT[2]}>
                  <InputPhoneField onChangeText={handleChange('phone')} 
                    onBlur={handleBlur('phone')}
                    value={values.phone} 
                    txPlaceholder={'placeholders.phone'} 
                    icon="phone"
                    error={touched.phone ? errors.phone : null}
                    inputType="numeric" />
                </View>

                <View style={[FOOTER, MT[0]]}>
                  <View style={FOOTER_CONTENT}>
                    <Button
                      style={CONTINUE}
                      textStyle={CONTINUE_TEXT}
                      tx="registerScreen.continue"
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
    )
}