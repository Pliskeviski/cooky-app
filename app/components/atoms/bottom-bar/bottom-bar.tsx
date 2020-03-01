import * as React from "react"
import { View, ViewStyle, TextStyle, TouchableOpacity } from "react-native"
import { FLEX } from "../../../theme/style"
import { palette } from "../../../theme/palette"
import { color, spacing } from "../../../theme"
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFE from 'react-native-vector-icons/Feather';
import IconFO from 'react-native-vector-icons/Fontisto';
import { useStores } from "../../../models/root-store"

export interface BottomBarProps {
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

const VIEW: ViewStyle = {
  ...FLEX[1],
  backgroundColor: palette.white,
  elevation: 5
}

const CONTAINER: ViewStyle = {
  ...VIEW,
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: 44,
  paddingTop: spacing[1],
}

const MENU: ViewStyle = {
  ...FLEX[1],
}

const ICON: TextStyle = {
  textAlignVertical: "center",
  textAlign: "center",
  fontSize: 20,
  color: color.defaultText
}

export function BottomBar(props: BottomBarProps) {
  // grab the props
  const { tx, text, style, children, ...rest } = props

  const { navigationStore } = useStores();

  return (
    <View style={[style, CONTAINER]} {...rest}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={MENU} onPress={() => { navigationStore.navigateTo("feed") }} >
          <IconFE style={ICON} name="home" />
        </TouchableOpacity>
        <TouchableOpacity style={MENU} >
          <IconFA style={ICON} name="comment-o" />
        </TouchableOpacity>
        <TouchableOpacity style={MENU} onPress={() => { navigationStore.navigateTo("register") }} >
          <IconFO style={ICON} name="bell" />
        </TouchableOpacity>
        <TouchableOpacity style={MENU} >
          <IconFA style={ICON} name="user-o" onPress={() => { navigationStore.navigateTo("profile") }} />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  )
}

