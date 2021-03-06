import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { LogoHeader } from "./logo-header"
import { Story, StoryScreen, UseCase } from "../../../../storybook/views"

declare var module

storiesOf("LogoHeader", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <LogoHeader />
      </UseCase>
    </Story>
  ))
