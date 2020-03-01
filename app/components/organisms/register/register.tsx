import * as React from "react"
import { View, Keyboard, TextStyle, ViewStyle, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup'
import { color, spacing } from "../../../theme";
import { BOLD, MT } from "../../../theme/style";
import { translate } from "../../../i18n";
import { InputField } from "../../atoms/input-field/input-field";
import { Button } from "../../atoms/button/button";
import { PartialProps } from "../../../screens/register-screen/partial-props";
import { LoginRegister } from "../../molecules/login-register/login-register";
import firebase from "react-native-firebase";
import { ScreenStep } from "../../../screens";
import { AsyncStorage } from 'react-native';

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

export const RegisterPartial: React.FunctionComponent<PartialProps> = props => {
  const initialLoading = React.useMemo<boolean>(() => false, [])
  const [isLoading, setLoading] = React.useState<boolean>(initialLoading)

  return (
    <View>
      <LoginRegister txLarge="registerScreen.createAccount" txSmall="registerScreen.createUsing" />
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirm: '',
        }}
        validationSchema={
          Yup.object().shape({
            email: Yup.string()
              .email(translate('errors.invalidEmail'))
              .required(translate('errors.requiredField')),
            password: Yup.string()
              .min(6, translate('errors.invalidPassword'))
              .required(translate('errors.requiredField')),
            passwordConfirm: Yup.string()
              .oneOf([Yup.ref('password')], translate('errors.passwordMatch'))
              .required(translate('errors.requiredField'))
          })
        }
        onSubmit={async (values) => {
          Keyboard.dismiss();
          setLoading(true);
          try {
            const auth = await firebase.auth().createUserWithEmailAndPassword(values.email, values.passwordConfirm);
            console.log(auth);
            setLoading(false);
            if (auth) {
              await AsyncStorage.setItem('@UserToken', await auth.user.getIdToken());

              // TODO Phone Number
              props.submitFunction(ScreenStep.Feed);
            }
          } catch (err) {
            console.log(err);
            setLoading(false);
            Alert.alert(translate("common.error"), err.message, [{ text: translate("common.close") }]);
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

            <View style={MT[2]}>
              <InputField onChangeText={handleChange('password')} onBlur={handleBlur('password')}
                value={values.password} txPlaceholder={'placeholders.typePassword'} icon="lock"
                hideText={true} error={touched.password ? errors.password : null} />
            </View>

            <View style={MT[0]}>
              <InputField onChangeText={handleChange('passwordConfirm')} onBlur={handleBlur('passwordConfirm')}
                value={values.passwordConfirm} txPlaceholder={'placeholders.confirmPassword'} icon="lock"
                hideText={true} error={touched.passwordConfirm ? errors.passwordConfirm : null} />
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
          </View>
        )}
      </Formik>
    </View>
  )
}