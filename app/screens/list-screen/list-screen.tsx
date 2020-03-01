import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { ScreenContainerWithTopBar, SearchSection, LargeCardSection } from "../../components"
import { spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { FLEX, MT, PT, VIEW } from "../../theme/style"

export interface ListScreenProps extends NavigationScreenProps<{}> {
}

const SEARCH: ViewStyle = {
  ...MT[1],
  width: '90%',
  alignSelf: 'center'
}

export const ListScreen: React.FunctionComponent<ListScreenProps> = observer((props) => {
  return (
    <View style={FLEX[1]}>
      <ScreenContainerWithTopBar bottomNavBar={true} preset="scroll">
        <View style={{ marginBottom: -spacing[8] }}>
          <SearchSection style={SEARCH} />
          <LargeCardSection tx="listScreen.closer" style={VIEW} />
          <LargeCardSection tx="listScreen.popularInArea" style={[VIEW, PT[5]]} />
        </View>
      </ScreenContainerWithTopBar>
    </View>
  )
})