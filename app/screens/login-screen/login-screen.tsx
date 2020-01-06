import * as React from "react"
import { View, ViewStyle, TextStyle, TouchableOpacity, ImageStyle, Image, Keyboard, Alert } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Button, Screen, Text, MoleculesLogoHeader, HorizontalLine, InputField } from "../../components"
import { color, spacing } from "../../theme"
import { BOLD, MT, FLEX, FlexRow } from "../../theme/style"
import { Formik } from 'formik';

const socialIcons = [
  require('../../assets/facebook.png'),
  require('../../assets/twitter.png'),
  require('../../assets/google.png'),
]

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

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
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
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
          onSubmit={values => {
            Alert.alert(JSON.stringify(values, null, 2));
            Keyboard.dismiss();
          }
          }>
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <View style={MT[2]}>
                <InputField onChangeText={handleChange('email')} value={values.email} placeholder="Email" icon="envelope-o" />
              </View>

              <View style={MT[6]}>
                <InputField onChangeText={handleChange('password')} value={values.password} placeholder="Digite sua senha" icon="lock" hideText={true} />
              </View>

              <View style={MT[2]}>
                <InputField onChangeText={handleChange('passwordConfirm')} value={values.passwordConfirm} placeholder="Confirme sua senha" icon="lock" hideText={true} />
              </View>

              <View style={[FOOTER, MT[5]]}>
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
      </Screen>
    </View>
  )
}
