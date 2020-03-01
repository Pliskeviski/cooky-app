import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Dimensions } from "react-native"
import { ScreenContainerWithTopBar } from "../../components"
// import { useStores } from "../models/root-store"
import { spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { FLEX } from "../../theme/style"
import CardView from 'react-native-cardview'

export interface ProfileScreenProps extends NavigationScreenProps<{}> {
}

export const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = observer((props) => {
  // const { someStore } = useStores();

  return (
    <View style={FLEX[1]}>
      <ScreenContainerWithTopBar bottomNavBar={true} preset="scroll">
        <View style={{ flex: 1, flexDirection: "column", height: Dimensions.get('window').height }}>
          <View style={{ position: "absolute", left: -15, top: -15}}>
            <CardView
              cardElevation={5}
              cardMaxElevation={2}
              cornerRadius={22} >
              <View style={{ height: 165, width: Dimensions.get('window').width }}>

              </View>
            </CardView>
          </View>
        </View>
      </ScreenContainerWithTopBar>
    </View>
  )
})
