import * as React from "react"
import { View, ViewStyle, Keyboard } from "react-native"
import { Text } from "../.."
import { Formik } from "formik"
import * as Yup from 'yup'
import { InputField } from "../../atoms/input-field/input-field"
import { MT } from "../../../theme/style"

export interface SearchSectionProps {
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
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function SearchSection(props: SearchSectionProps) {
  // grab the props
  const { tx, text, style, ...rest } = props

  return (
    <View style={style} {...rest}>
      <Formik
        initialValues={{
          search: '',
        }}
        validationSchema={
          Yup.object().shape({
            search: Yup.string()
          })
        }
        onSubmit={values => {
          Keyboard.dismiss();
          // api
        }
        }>
        {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
          <View>
            <View style={MT[2]}>
              <InputField onChangeText={handleChange('search')} onBlur={handleBlur('search')}
                value={values.search} txPlaceholder={'placeholders.search'} icon="search"
                error={touched.search ? errors.search : null} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}
