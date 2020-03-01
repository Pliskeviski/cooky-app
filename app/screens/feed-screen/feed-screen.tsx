import * as React from "react"
import { View, ViewStyle } from "react-native"
import { ScreenContainerWithTopBar, DailyQuestion, LargeCardSection, SmallCardSection } from "../../components"
import { NavigationScreenProps } from "react-navigation"
import { FLEX, MT } from "../../theme/style"
import { observer } from "mobx-react-lite"
import { SearchSection } from "../../components/organisms/search-section/search-section"
import { spacing } from "../../theme"

export interface FeedScreenProps extends NavigationScreenProps<{}> {
}

const VIEW: ViewStyle = {
  ...MT[5],
  left: 10,
}

const SEARCH: ViewStyle = {
  ...MT[1],
  width: '90%',
  alignSelf: 'center'
}

export const FeedScreen: React.FunctionComponent<FeedScreenProps> = observer((props) => {
  const viewMore = React.useMemo(() => () => props.navigation.navigate("listScreen"), [props.navigation]);
  
  return (
    <View style={FLEX[1]}>
      <ScreenContainerWithTopBar bottomNavBar={true} preset="scroll">
        <View style={{marginBottom: -spacing[8]}}>
          <DailyQuestion style={VIEW} />
          <SearchSection style={SEARCH} />
          <LargeCardSection showMore={true} tx="feedScreen.promotions" viewMoreFunction={viewMore} style={VIEW} />
          <SmallCardSection viewMoreFunction={viewMore} style={VIEW} />
        </View>
      </ScreenContainerWithTopBar>
    </View>
  )
})
