import { View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { modalsHandlers } from '../handlers/modalsHandlers';
import { inputText,
  clearText,
  setNumberOfLines,
  setFonts,
} from "../store/textInput";

import ButtonIcon from "../components/buttons/ButtonIcon";

import { appStyles } from "../styles/appStyles";

const TextItemInput = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const numberOfLines = useSelector(state => state.textInput.numberOfLines);
  const enteredText = useSelector(state => state.textInput.enteredText);
  const textHeight = useSelector(state => state.textInput.textHeight);
  const dispatch = useDispatch();

  const { closeFontSettingsHandler, closeColorModalHandler } = modalsHandlers();

  const onPressClearBtnHandler = () => {
    dispatch(clearText());
    dispatch(setFonts());
  };

  const renderClearBtn = () => {
    return (
      <ButtonIcon
        style={appStyles.clearTextBtn}
        icon={"clearText"}
        onPress={onPressClearBtnHandler}
      />
    )
  };

  const onPressInputHandler = () => {
    closeFontSettingsHandler();
    closeColorModalHandler();
  };

  const onChangeTextHandler = (text) => {
    dispatch(inputText({ newText: text }));
    dispatch(setFonts());
  };

  const onContentSizeChangeHandler = (event) => {
    dispatch(setNumberOfLines(event.nativeEvent.contentSize.height))
  };

  const clearBtn = enteredText !== "" ? renderClearBtn() : null;

  return (
    <View style={[appStyles.textInputWrapper, {backgroundColor: colorsStyle.primaryBg1}]}>
      <TextInput
        style={[appStyles.textInput,
          {
            fontSize: textHeight,
            backgroundColor: colorsStyle.primaryBg1,
            color: colorsStyle.text
          }
        ]}
        placeholder="Enter your text"
        placeholderTextColor={colorsStyle.placeholderTextColor}
        value={enteredText}
        enablesReturnKeyAutomatically={true}
        multiline={true}
        textAlignVertical={'top'}
        numberOfLines={numberOfLines}
        onChangeText={onChangeTextHandler}
        onPressIn={onPressInputHandler}
        onContentSizeChange={(evt) => onContentSizeChangeHandler(evt)}
      />
      {clearBtn}
    </View>
  )
};

export default TextItemInput;
