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

// Margin Right
export const MR: ViewStyle[] = [
    { marginRight: spacing[0] },
    { marginRight: spacing[1] },
    { marginRight: spacing[2] },
    { marginRight: spacing[3] },
    { marginRight: spacing[4] },
    { marginRight: spacing[5] },
    { marginRight: spacing[6] },
    { marginRight: spacing[7] },
    { marginRight: spacing[8] }
]

// Margin Left
export const ML: ViewStyle[] = [
    { marginLeft: spacing[0] },
    { marginLeft: spacing[1] },
    { marginLeft: spacing[2] },
    { marginLeft: spacing[3] },
    { marginLeft: spacing[4] },
    { marginLeft: spacing[5] },
    { marginLeft: spacing[6] },
    { marginLeft: spacing[7] },
    { marginLeft: spacing[8] }
]

// Margin Bottom
export const MB: ViewStyle[] = [
    { marginBottom: spacing[0] },
    { marginBottom: spacing[1] },
    { marginBottom: spacing[2] },
    { marginBottom: spacing[3] },
    { marginBottom: spacing[4] },
    { marginBottom: spacing[5] },
    { marginBottom: spacing[6] },
    { marginBottom: spacing[7] },
    { marginBottom: spacing[8] }
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

// Padding Right
export const PR: ViewStyle[] = [
    { paddingRight: spacing[0] },
    { paddingRight: spacing[1] },
    { paddingRight: spacing[2] },
    { paddingRight: spacing[3] },
    { paddingRight: spacing[4] },
    { paddingRight: spacing[5] },
    { paddingRight: spacing[6] },
    { paddingRight: spacing[7] },
    { paddingRight: spacing[8] }
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

export const FLEXROW: ViewStyle = {
    display: "flex",
    flexDirection: "row"
}

export const VIEW: ViewStyle = {
    ...MT[5],
    left: 10,
}