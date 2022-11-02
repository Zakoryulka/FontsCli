import { View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { closeColorModal, closeFontSettingsModal,
} from "../store/modal";
import { setFontsValuesForSliders } from "../store/fontParametrs";
import { setColorsValuesForSliders } from "../store/colorParametrs";
import { inputText, clearText, setNumberOfLines, setFonts,
 } from "../store/textInput";

import ButtonIcon from "../components/ButtonIcon";

import { appStyles } from "../styles/appStyles";

const TextItemInput = () => {
  const numberOfLines = useSelector(state => state.textInput.numberOfLines);
  const enteredText = useSelector(state => state.textInput.enteredText);
  const textHeight = useSelector(state => state.textInput.textHeight);
  const dispatch = useDispatch();

  return (
    <View style={appStyles.textInputWrapper}>
      <TextInput
        style={[appStyles.textInput, {fontSize: textHeight}]}
        placeholder="Enter your text"
        onChangeText={async(text) => {
          dispatch(inputText({ newText: text }));
          dispatch(setFonts());
        }}
        onPressIn={() => {
          dispatch(closeColorModal());
          dispatch(closeFontSettingsModal());
          dispatch(setFontsValuesForSliders());
          dispatch(setColorsValuesForSliders());
        }}
        value={enteredText}
        enablesReturnKeyAutomatically={true}
        multiline={true}
        textAlignVertical={'top'}
        numberOfLines={numberOfLines}
        onContentSizeChange={(event) => dispatch(setNumberOfLines(event.nativeEvent.contentSize.height))}
      />
      <ButtonIcon
        style={appStyles.clearTextBtn}
        icon={"clearText"}
        onPress={() => {
          dispatch(clearText());
          dispatch(setFonts());
        }}
      />
    </View>
  )
};

export default TextItemInput;
