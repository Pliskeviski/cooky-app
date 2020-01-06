import { TextStyle, ViewStyle } from "react-native";
import { spacing } from "./spacing";

export const BOLD: TextStyle = { fontWeight: "bold" }

// Margin Top
export const MT: ViewStyle[] = [
    { marginTop: spacing[0] },
    { marginTop: spacing[1] },
    { marginTop: spacing[2] },
    { marginTop: spacing[3] },
    { marginTop: spacing[4] },
    { marginTop: spacing[5] },
    { marginTop: spacing[6] },
    { marginTop: spacing[7] },
    { marginTop: spacing[8] }
]

// Padding Top
export const PT: ViewStyle[] = [
    { paddingTop: spacing[0] },
    { paddingTop: spacing[1] },
    { paddingTop: spacing[2] },
    { paddingTop: spacing[3] },
    { paddingTop: spacing[4] },
    { paddingTop: spacing[5] },
    { paddingTop: spacing[6] },
    { paddingTop: spacing[7] },
    { paddingTop: spacing[8] }
]

// Flex
export const FlexRow: ViewStyle = {
    flexDirection: "row"
}

export const FLEX: ViewStyle[] = [
    { flex: 0 },
    { flex: 1 },
    { flex: 2 },
    { flex: 3 },
    { flex: 4 },
    { flex: 5 }
]