import * as React from "react"
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, View, ViewStyle } from "react-native"
import { SafeAreaView } from "react-navigation"
import { ScreenProps } from "./screen.props"
import { isNonScrolling, offsets, presets } from "./screen.presets"
import { color, spacing } from "../../../theme"
import { TopBar } from "../top-bar/top-bar"
import { FLEX } from "../../../theme/style"
import { BottomBar } from "../bottom-bar/bottom-bar"

const isIos = Platform.OS === "ios"

function ScreenWithoutScrolling(props: ScreenProps) {
  const preset = presets["fixed"]
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
  const Wrapper = props.unsafe ? View : SafeAreaView

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? "padding" : null}
      keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}
    >
      <StatusBar
        backgroundColor={props.statusBarColor || "#FFF"}
        barStyle={props.statusBar || "dark-content"} />
      <Wrapper style={[preset.inner, style]}>{props.children}</Wrapper>
    </KeyboardAvoidingView>
  )
}

function ScreenWithScrolling(props: ScreenProps) {
  const preset = presets["scroll"]
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
  const Wrapper = props.unsafe ? View : SafeAreaView

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? "padding" : null}
      keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}
    >
      <StatusBar
        backgroundColor={props.statusBarColor || "#FFF"}
        barStyle={props.statusBar || "dark-content"} />
      <Wrapper style={[preset.outer, backgroundStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
        >
          {props.children}
        </ScrollView>
      </Wrapper>
    </KeyboardAvoidingView>
  )
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export function Screen(props: ScreenProps, style?: ViewStyle) {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling style={style} {...props} />
  } else {
    return <ScreenWithScrolling style={style} {...props} />
  }
}

const container: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

export function ScreenContainer(props: ScreenProps) {
  return (
    <View style={FLEX[1]}>
      {Screen(props, container)}
    </View>
  )
}

export function ScreenContainerWithTopBar(props: ScreenProps) {
  return (
    <View style={FLEX[1]}>
      <TopBar />
      {Screen(props, container)}
      { (props.bottomNavBar && <BottomBar navigation={props.navigation} />) }
    </View>
  )
}
