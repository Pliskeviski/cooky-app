import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { MoleculesLogoHeader } from "./logo-header"
import { Story, StoryScreen, UseCase } from "../../../../storybook/views"

declare var module

storiesOf("MoleculesLogoHeader", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <MoleculesLogoHeader />
      </UseCase>
    </Story>
  ))
