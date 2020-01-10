import * as React from "react"
import { View, ViewStyle, TextStyle, TouchableOpacity, ImageStyle, Image, Keyboard, Alert } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Button, Screen, Text, MoleculesLogoHeader, HorizontalLine, InputField, ScreenContainer } from "../../components"
import { color, spacing } from "../../theme"
import { BOLD, MT, FLEX, FlexRow } from "../../theme/style"
import { Formik } from 'formik';
import * as Yup from 'yup'

const socialIcons = [
  require('../../assets/facebook.png'),
  require('../../assets/twitter.png'),
  require('../../assets/google.png'),
]

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
  fontFamily: 'Ubuntu-Bold',
  color: color.default,
  fontSize: 17,
  textAlign: "center",
  marginTop: spacing[5]
}

const IMAGE: ImageStyle = {
  alignSelf: "center",
  width: 100,
  height: 100,
  resizeMode: 'contain',
  flex: 1,
}

const LIST: ViewStyle = {
  ...FlexRow,
  ...FLEX[1],
  alignSelf: 'center',
  marginTop: spacing[3],
}

const ITEMLIST: ViewStyle = {
  flex: 1 / 7,
  aspectRatio: 1
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
  letterSpacing: 3,
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

export interface WelcomeScreenProps extends NavigationScreenProps<{}> { }

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {
  const nextScreen = React.useMemo(() => () => props.navigation.navigate("demo"), [
    props.navigation,
  ])

  return (
    <View style={FLEX[1]}>
      <ScreenContainer preset="scroll">
        <View style={[MT[2]]}>
          <MoleculesLogoHeader />
          <Text style={CONTENT} tx="loginScreen.createAccount" />
          <Text style={CONTENT_SM} tx="loginScreen.createUsing" />

          <View style={[LIST]}>
            <TouchableOpacity
              style={[ITEMLIST]}>
              <Image style={IMAGE} source={socialIcons[0]} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[ITEMLIST]}>
              <Image style={IMAGE} source={socialIcons[1]} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[ITEMLIST]}>
              <Image style={IMAGE} source={socialIcons[2]} />
            </TouchableOpacity>
          </View>

          <View style={MT[3]}>
            <HorizontalLine style={{ backgroundColor: color.transparent }} tx="loginScreen.or" />
          </View>
        </View>

        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirm: '',
          }}
          validationSchema={
            Yup.object().shape({
              email: Yup.string()
                .email('Digite um e-mail válido')
                .required('Preencha o campo de e-mail'),
              password: Yup.string()
                .min(6, 'A senha deve conter no mínimo 6 caracteres')
                .required('Preencha o campo de senha'),
              passwordConfirm: Yup.string()
                .min(6, 'A senha deve conter no mínimo 6 caracteres')
                .oneOf([Yup.ref('password')], 'As senhas não conferem') 
            })
          }
          onSubmit={values => {
            Alert.alert(JSON.stringify(values.email, null, 2));
            Keyboard.dismiss();
          }
          }>
          {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
            <View>
              <View style={MT[2]}>
                <InputField onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} placeholder="Email" icon="envelope-o" error={touched.email ? errors.email : null} />
              </View>

              <View style={MT[2]}>
                <InputField onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} placeholder="Digite sua senha" icon="lock" hideText={true} error={touched.password ? errors.password : null} />
              </View>

              <View style={MT[0]}>
                <InputField onChangeText={handleChange('passwordConfirm')} onBlur={handleBlur('passwordConfirm')} value={values.passwordConfirm} placeholder="Confirme sua senha" icon="lock" hideText={true} error={touched.passwordConfirm ? errors.passwordConfirm : null} />
              </View>

              <View style={[FOOTER, MT[0]]}>
                <View style={FOOTER_CONTENT}>
                  <Button
                    style={CONTINUE}
                    textStyle={CONTINUE_TEXT}
                    tx="loginScreen.continue"
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScreenContainer>
    </View>
  )
}
