import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { PhoneNumberPartial } from "./phone-number"
import { Story, UseCase, StoryScreen } from "../../../../storybook/views"

declare var module

storiesOf("PhoneNumberPartial", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <PhoneNumberPartial />
      </UseCase>
    </Story>
  ))
