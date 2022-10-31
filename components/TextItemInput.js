import { View, TextInput } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { closeColorModal, closeFontSettingsModal,
} from "../store/modal";
import { inputText, clearText, setNumberOfLines } from "../store/textInput";

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
        onChangeText={(text) => {
          dispatch(closeColorModal());
          dispatch(closeFontSettingsModal());
          dispatch(inputText({ newText: text }));
        }}
        onPressIn={() => {
          dispatch(closeColorModal());
          dispatch(closeFontSettingsModal());
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
        onPress={() => dispatch(clearText())}
      />
    </View>
  )
};

export default TextItemInput;
