import * as React from "react"
import { View, Keyboard, TextStyle, ViewStyle } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup'
import { color, spacing } from "../../../theme";
import { BOLD, MT } from "../../../theme/style";
import { InputField } from "../../atoms/input-field/input-field";
import { Button } from "../../atoms/button/button";
import { PartialProps } from "../../../screens/register-screen/partial-props";
import { LoginRegister } from "../../molecules/login-register/login-register";
import { Text } from "../../atoms/text/text";
import firebase from "react-native-firebase";
import { translate } from "../../../i18n";
import axios from 'axios';

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Poppins-Regular",
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
const FORGOT_PASSWORD: TextStyle = {
  color: color.default,
  fontSize: 12,
  fontFamily: 'Poppins-Regular',
  alignSelf: 'flex-end'
}
const NEW_USER: TextStyle = {
  ...FORGOT_PASSWORD,
  fontFamily: 'Poppins-SemiBold',
  alignSelf: 'center'
}

let isLoading = false;
export const LoginPartial: React.FunctionComponent<PartialProps> = props => {
  const passwordRecover = () => {
    props.submitFunction();
  }

  return (
    <View>
      <LoginRegister txLargeStyle={{ fontFamily: 'Poppins-Regular', marginBottom: -spacing[2] }} txLarge="loginScreen.welcome" txSmall="loginScreen.loginUsing" />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={
          Yup.object().shape({
            email: Yup.string()
              .email(translate('errors.invalidEmail'))
              .required(translate('errors.requiredField')),
            password: Yup.string()
              .min(6, translate('errors.invalidPassword'))
              .required(translate('errors.requiredField'))
          })
        }
        onSubmit={async (values) => {
          Keyboard.dismiss();
          try {
            isLoading = true;
            const auth = await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
            if (auth) {
              const user = await axios.get(`http://us-central1-cooky-883e6.cloudfunctions.net/api/profile`, {headers: { Authorization: 'Bearer ' +  await auth.user.getIdToken()} })
              console.log(user.data);
              if(user) {
                props.submitFunction(2);
              }
            }
          } catch (err) {
            console.log(err);
          }
        }
        }>
        {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
          <View>
            <View style={MT[2]}>
              <InputField onChangeText={handleChange('email')} onBlur={handleBlur('email')}
                value={values.email} txPlaceholder={'placeholders.email'} icon="envelope-o"
                error={touched.email ? errors.email : null} />
            </View>

            <View style={MT[0]}>
              <InputField onChangeText={handleChange('password')} onBlur={handleBlur('password')}
                value={values.password} txPlaceholder={'placeholders.password'} icon="lock"
                hideText={true} error={touched.password ? errors.password : null} />
            </View>

            <View style={{ marginTop: -spacing[2] }}>
              <Text style={FORGOT_PASSWORD} tx="loginScreen.forgotPassword" />
            </View>

            <View style={[FOOTER, MT[0]]}>
              <View style={FOOTER_CONTENT}>
                <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  tx="registerScreen.continue"
                  onPress={handleSubmit}
                  loading={isLoading}
                />
              </View>
            </View>

            <View style={{ marginTop: -spacing[1] }}>
              <Text onPress={passwordRecover} style={NEW_USER} tx="loginScreen.newUser" />
            </View>

          </View>
        )}
      </Formik>
    </View>
  )
}