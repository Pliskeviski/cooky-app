import * as React from "react"
import { View, Keyboard, TextStyle, ViewStyle } from "react-native";
import { Formik } from "formik";
import { color, spacing } from "../../../theme";
import { Text } from "../../atoms/text/text";
import * as Yup from 'yup'
import { translate } from "../../../i18n";
import { InputField } from "../../atoms/input-field/input-field";
import { Button } from "../../atoms/button/button";
import { MT, BOLD } from "../../../theme/style";
import { PartialProps } from "../../../screens/register-screen/partial-props";
import { ScreenStep } from "../../../screens";
import firebase from "react-native-firebase";

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
  marginTop: spacing[5],
  width: '70%',
  alignSelf: 'center'
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


export const ConfirmPhoneNumberPartial: React.FunctionComponent<PartialProps> = props => {
  return (
    <View>
      <Text style={CONTENT} tx="registerScreen.createAccount" />
      <Text style={CONTENT_SM}>
        {translate("registerScreen.validationCodeSent")}
      </Text>

      <Formik
        initialValues={{
          code: '',
        }}
        validationSchema={
          Yup.object().shape({
            code: Yup.string()
              .required(translate('errors.requiredField')),
          })
        }
        onSubmit={async (values) => {
          Keyboard.dismiss();
          // api
          try {
            var user = firebase.auth().currentUser;
            if (user !== null) {
              firebase.auth().checkActionCode(values.code);
              //props.submitFunction(ScreenStep.Register);
            }
          } catch(err) {
            console.log(err.message);
          }
        }
        }>
        {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
          <View>
            <View style={MT[2]}>
              <InputField onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
                value={values.code}
                txPlaceholder={'placeholders.validationCodeCheck'}
                icon="lock"
                error={touched.code ? errors.code : null}
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