import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { BottomBar } from "./bottom-bar"

declare var module

storiesOf("BottomBar", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <BottomBar text="BottomBar" />
      </UseCase>
    </Story>
  ))
