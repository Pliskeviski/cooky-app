import * as React from "react"
import { View, ViewStyle, TextStyle, ScrollView, TouchableOpacity } from "react-native"
import { Text } from "../.."
import { color, spacing } from "../../../theme"
import { CardProductLg } from "../../molecules/card-product-lg/card-product-lg"
import { MT, FLEXROW, FLEX } from "../../../theme/style"
import { useStores } from "../../../models/root-store"

export interface LargeCardSectionProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  tx?: string

  viewMoreFunction?

  showMore?: boolean
}

const QUESTION: TextStyle = {
  flex: 1,
  color: color.defaultText,
  fontFamily: 'Poppins-Regular',
  fontSize: 20
}

const SEEALL: TextStyle = {
  flex: 1,
  color: color.defaultText,
  fontFamily: 'Poppins-Regular',
  fontSize: 12,
  textAlign: "right",
  textAlignVertical: "center",
  paddingRight: 20
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function LargeCardSection(props: LargeCardSectionProps) {
  // grab the props
  const { style, ...rest } = props

  const { productHomeStore } = useStores();

  React.useMemo(() => {
    if (productHomeStore.getProducts().length === 0) {
      productHomeStore.addProduct({
        id: 'no-id',
        title: 'Brigadeiro Caseiro',
        tag: 'Doces',
        description: 'Brigadeiro que não é doce demais, que derrete na boca, que une ingredientes diferentes e deliciosos.',
        image: 'https://i.ibb.co/RhXZtSP/Chocolate-Cupcakes-Recipe-1.jpg',
        packageQuantity: 10,
        price: 10,
        rating: 4.6
      });
      productHomeStore.addProduct({
        id: 'no-id',
        title: 'Hamburger',
        tag: 'Salgados',
        description: 'Pão brioche, burger de carne e cheddar cremoso.',
        image: 'https://i.ibb.co/tbFvrMx/Homemade-Veggie-Burgers-Grillable-Vegan-Gluten-Free.jpg',
        packageQuantity: 1,
        price: 8,
        rating: 4.1
      });
      productHomeStore.addProduct({
        id: 'no-id',
        title: 'Sanduiche Natural',
        tag: 'Salgados',
        description: 'Sanduiche natural com peito de frango.',
        image: 'https://i.ibb.co/MDMW36S/IMG-7289-466x700.jpg',
        packageQuantity: 1,
        price: 6,
        rating: 3.8
      })
    }
  }, []);

  return (
    <View style={[style, MT[1]]} {...rest}>
      <View style={FLEXROW}>
        <Text style={QUESTION} tx={props.tx} />
        {
          props.showMore &&
          <TouchableOpacity onPressOut={() => props.viewMoreFunction()} style={FLEX[1]}>
            <Text style={SEEALL} tx="feedScreen.seeAll" />
          </TouchableOpacity>
        }
      </View>
      <ScrollView style={[MT[2], { height: 162, left: -35, marginRight: -35, paddingHorizontal: spacing[0] }]} showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={{ width: spacing[5] }} />
        {productHomeStore.getProducts().map(product => <CardProductLg product={product} />)}
        <View style={{ width: spacing[5] }} />
      </ScrollView>
    </View>
  )
}
