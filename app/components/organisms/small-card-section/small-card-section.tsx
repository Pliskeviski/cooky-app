import * as React from "react"
import { View, ViewStyle, TextStyle, ScrollView, TouchableOpacity } from "react-native"
import { Text } from "../.."
import { spacing, color } from "../../../theme"
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { translate } from "../../../i18n"
import { FLEXROW, MT, FLEX } from "../../../theme/style";
import { CardProductSm } from "../../molecules/card-product-sm/card-product-sm";
import { useStores } from "../../../models/root-store";

export interface SmallCardSectionProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  viewMoreFunction?
}

const QUESTION: TextStyle = {
  flex: 2,
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

const LOCATIONICON: TextStyle = {
  flex: 1,
  textAlignVertical: "center",
  alignSelf: "flex-start"
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function SmallCardSection(props: SmallCardSectionProps) {
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
    <View style={style} {...rest}>
      <View style={FLEXROW}>
        <Text style={QUESTION}>
          {translate("feedScreen.nearYou") + " "}
          <Icon style={LOCATIONICON} name="location-pin" size={15} color={color.defaultText} />
          <Text style={{ fontSize: 10, color: color.defaultText }}>
            {" "}
            {"Curitiba, PR"}
          </Text>
        </Text>
        <TouchableOpacity onPressOut={() => props.viewMoreFunction()} style={FLEX[1]}>
          <Text style={SEEALL} tx="feedScreen.seeAll" />
        </TouchableOpacity>
      </View>
      <ScrollView style={[MT[2], { minHeight: 260, left: -35, marginRight: -35, paddingHorizontal: spacing[0] }]} showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={{ width: spacing[5] }} />
        {productHomeStore.getProducts().map(product => <CardProductSm product={product} />)}
        <View style={{ width: spacing[5] }} />
      </ScrollView>
    </View>
  )
}
