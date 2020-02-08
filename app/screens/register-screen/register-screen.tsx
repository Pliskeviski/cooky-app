import * as React from "react"
import { View, TouchableOpacity } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { LogoHeader, ScreenContainer, PhoneNumberPartial, ConfirmPhoneNumberPartial, LoginPartial } from "../../components"
import { MT, FLEX } from "../../theme/style"
import { RegisterPartial } from "../../components/organisms/register/register"

export enum ScreenStep {
  Login = 0,
  Register = 1,
  PhoneNumber = 2,
  ConfirmPhoneNumber = 3
  // TODO: Password recovery
}

type RegisterScreenProps = NavigationScreenProps

export const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = ({
  navigation,
}) => {
  const initialScreenStep = React.useMemo<ScreenStep>(() => ScreenStep.Login, [])
  const navigateToFeed = () => { navigation.navigate("feed"), [ navigation ]}

  const [currentScreenStep, setCurrentScreenStep] = React.useState<ScreenStep>(initialScreenStep)

  const nextScreen = (step: ScreenStep) => {
    setCurrentScreenStep(step)

    navigation.setParams({
      screenStep: currentScreenStep
    })
  }

  return (
    <View style={FLEX[1]}>
      <ScreenContainer navigation={navigation} preset="scroll">
        <TouchableOpacity onPress={() => { nextScreen(ScreenStep.Login) }}>
          <View style={[MT[2]]}>
            <LogoHeader />
          </View>
        </TouchableOpacity>
        {(currentScreenStep === ScreenStep.Login) && <LoginPartial submitFunction={navigateToFeed} />}
        {(currentScreenStep === ScreenStep.Register) && <RegisterPartial submitFunction={nextScreen} />}
        {(currentScreenStep === ScreenStep.PhoneNumber) && <PhoneNumberPartial submitFunction={nextScreen} />}
        {(currentScreenStep === ScreenStep.ConfirmPhoneNumber) && <ConfirmPhoneNumberPartial submitFunction={nextScreen} />}
      </ScreenContainer>
    </View>
  )
}
