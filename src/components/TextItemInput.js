import { View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { modalsHandlers } from '../handlers/modalsHandlers';
import { inputText,
  clearText,
  setNumberOfLines,
  setFonts,
} from "../store/textInput";

import ButtonIcon from "../components/ButtonIcon";
import { Colors } from "../constants/stylesConst";

import { appStyles } from "../styles/appStyles";

const TextItemInput = () => {
  const numberOfLines = useSelector(state => state.textInput.numberOfLines);
  const enteredText = useSelector(state => state.textInput.enteredText);
  const textHeight = useSelector(state => state.textInput.textHeight);
  const dispatch = useDispatch();

  const { closeFontSettingsHandler, closeColorModalHandler } = modalsHandlers();

  const onPressInputHandler = () => {
    closeFontSettingsHandler();
    closeColorModalHandler();
  };

  const renderClearBtn = () => {
    return (
      <ButtonIcon
        style={appStyles.clearTextBtn}
        icon={"clearText"}
        onPress={() => {
          dispatch(clearText());
          dispatch(setFonts());
        }}
      />
    )
  };

  const clearBtn = enteredText !== "" ? renderClearBtn() : null;

  return (
    <View style={appStyles.textInputWrapper}>
      <TextInput
        style={[appStyles.textInput, {fontSize: textHeight}]}
        placeholder="Enter your text"
        placeholderTextColor={Colors.placeholderTextColor}
        onChangeText={async(text) => {
          dispatch(inputText({ newText: text }));
          dispatch(setFonts());
        }}
        onPressIn={onPressInputHandler}
        value={enteredText}
        enablesReturnKeyAutomatically={true}
        multiline={true}
        textAlignVertical={'top'}
        numberOfLines={numberOfLines}
        onContentSizeChange={(event) => dispatch(setNumberOfLines(event.nativeEvent.contentSize.height))}
      />

      {clearBtn}
    </View>
  )
};

export default TextItemInput;
