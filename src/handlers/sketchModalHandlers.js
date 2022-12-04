import { useSelector, useDispatch } from "react-redux";
import { changeCurrentSketchColor,
  sketchesGroupListShow,
  setColorValueForSketchCPicker,
  cPickerSketchShow,
  cPickerSketchHide,
  openSketchSettingsModal,
  closeSketchSettingsModal
} from "../store/sketchesScreen";

export const sketchModalHandlers = () => {
  const sketchSettingsModalShow = useSelector(state => state.sketchesScreen.sketchSettingsModalShow);

  const dispatch = useDispatch();

  const pressOpenCPickerSketchHandler = () => {
    dispatch(cPickerSketchShow());
    dispatch(setColorValueForSketchCPicker());
  };

  const pressCloseCPickerSketchHandler = () => {
    dispatch(cPickerSketchHide());
  };

  const pressSketchSettingsHandler = () => {
    sketchSettingsModalShow ?
    dispatch(closeSketchSettingsModal()) :
    dispatch(openSketchSettingsModal())
  };

  const closeSketchSettingsHandler = () => {
    dispatch(closeSketchSettingsModal());
  };

  return {
    pressOpenCPickerSketchHandler,
    pressCloseCPickerSketchHandler,
    pressSketchSettingsHandler,
    closeSketchSettingsHandler
  }
}
