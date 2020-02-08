import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { CardFilterSm } from "./card-filter-sm"

declare var module

storiesOf("CardFilterSm", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <CardFilterSm text="CardFilterSm" />
      </UseCase>
    </Story>
  ))
