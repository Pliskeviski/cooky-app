import * as React from "react"
import { View, ViewStyle, TextStyle, Image, ImageStyle } from "react-native"
import { Text } from "../.."
import { color, spacing } from "../../../theme"
import { FLEX } from "../../../theme/style"
import { palette } from "../../../theme/palette"
import Icon from 'react-native-vector-icons/FontAwesome';

const logoIcon = require("../../../assets/cotton_candy.png");

export interface TopBarProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  children?: React.ReactNode
}

const NAME: TextStyle = {
  color: color.default,
  alignSelf: "center",
  fontFamily: "Asap-Bold",
  fontSize: 14
}

const logoStyle: ImageStyle = {
  alignSelf: "center",
  maxWidth: "5%",
  resizeMode: 'contain'
}

const VIEW: ViewStyle = {
  ...FLEX[1],
  backgroundColor: palette.white,
  elevation: 5
}

const CONTAINER: ViewStyle = {
  ...VIEW,
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: 52,
  paddingTop: spacing[1],
}

const ICON: TextStyle = {
  position: 'absolute',
  left: spacing[5]
}

export function TopBar(props: TopBarProps) {
  // grab the props
  const { tx, text, style, children, ...rest } = props

  return (
      <View style={[style, CONTAINER]} {...rest}>
        <Icon style={ICON} name="bars" size={18} color={color.default} />
        <View style={{ flexDirection: "column" }}>
          <Image source={logoIcon} style={[logoStyle, { flex: 1 }]} />
          <Text tx={tx || "app.name"} text={text} style={[style, NAME, { flex: 1 }]} />
        </View>
        {children}
      </View>
  )
}
