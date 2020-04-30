import { registerThemes } from "react-native-themed-styles"

const light = { backgroundColor: "white", textColor: 'black'}
const dark = { backgroundColor: "black", textColor: "white"}

const styleSheetFactory = registerThemes(
  { light, dark },
  () => "dark"
)

const themeStyles = styleSheetFactory( theme => ({
  container: {
    backgroundColor: theme.backgroundColor,
    flex: 1

  },
  text: {
    color: theme.textColor
  },
  font: {
    fontSize: 76
  }
}))


export { themeStyles }