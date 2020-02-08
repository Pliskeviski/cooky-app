import * as React from "react"
import { View, ViewStyle, TextStyle, ScrollView } from "react-native"
import { Text } from "../.."
import { useStores } from "../../../models/root-store"
import { color, spacing } from "../../../theme"
import { MT } from "../../../theme/style"
import { CardFilterSm } from "../../molecules/card-filter-sm/card-filter-sm"

export interface DailyQuestionProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

const QUESTION: TextStyle = {
  color: color.defaultText,
  fontFamily: 'Poppins-Regular',
  fontSize: 20
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function DailyQuestion(props: DailyQuestionProps) {
  // grab the props
  const { dailyFilterStore } = useStores();

  React.useMemo(() => {
    if (dailyFilterStore.getFilters().length === 0) {
      dailyFilterStore.addFilter({
        id: "no-id",
        title: "Doces",
        text: "30 na sua área",
        image: "https://i.ibb.co/6mYyyff/burger.png"
      });
      dailyFilterStore.addFilter({
        id: "no-id",
        title: "Salgados",
        text: "10 na sua área",
        image: "https://i.ibb.co/x2VXVGG/doughnut.png"
      });
      dailyFilterStore.addFilter({
        id: "no-id",
        title: "Combos",
        text: "30 na sua área",
        image: "https://i.ibb.co/LhSPhfT/fast-food.png"
      })
    }
  }, []);

  return (
    <View style={[props.style]}>
      <Text style={QUESTION} tx="feedScreen.dailyQuestion" />
      <ScrollView style={[MT[2], { height: 55, left: -35, marginRight: -35, paddingHorizontal: spacing[0] }]} showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={{ width: spacing[5] }} />
        {dailyFilterStore.getFilters().map(filter => <CardFilterSm title={filter.title} imgUrl={filter.image} text={filter.text} />)}
        <View style={{ width: spacing[5] }} />
      </ScrollView>
    </View>
  )
}
