import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentSketchColor,
  setColorValueForSketchCPicker,
  cPickerSketchShow,
  cPickerSketchHide,
  openSketchSettingsModal,
  closeSketchSettingsModal,
  resetSketchSettings,
  changeSketchOpacity
} from "../store/sketchesScreen";
import { setSketchesGroupList, deleteSketchesGroupList } from "../store/content";

export const sketchModalHandlers = () => {
  const sketchSettingsModalShow = useSelector(state => state.sketchesScreen.sketchSettingsModalShow);

  const dispatch = useDispatch();

  const pressOpenCPickerSketchHandler = useCallback(() => {
    dispatch(cPickerSketchShow());
    dispatch(setColorValueForSketchCPicker());
  }, []);

  const pressCloseCPickerSketchHandler = useCallback(() => {
    dispatch(cPickerSketchHide());
  }, []);

  const changeCurrentSketchColorHandler = useCallback((color) => {
    dispatch(changeCurrentSketchColor({ newColor: color }));
  }, []);

  const pressSketchSettingsHandler = useCallback(() => {
    sketchSettingsModalShow ?
    dispatch(closeSketchSettingsModal()) :
    dispatch(openSketchSettingsModal())
  }, []);

  const closeSketchSettingsHandler = useCallback(() => {
    dispatch(closeSketchSettingsModal());
  }, []);

  const pressResetSketchSettings = useCallback(() => {
    dispatch(resetSketchSettings());
  }, []);

  const onChangeOpacityHandler = useCallback((opacity) => {
    dispatch(changeSketchOpacity({ opacity: opacity}))
  }, []);

  const setSketchGroupItemHandler = useCallback((id) => {
    console.log(id);                                            // Delete
    dispatch(setSketchesGroupList({newSketchGroup: id}));
  });

  const deleteSketchesGroupItemHandler = useCallback(() => {
    dispatch(deleteSketchesGroupList());
  });


  return {
    pressOpenCPickerSketchHandler,
    pressCloseCPickerSketchHandler,
    changeCurrentSketchColorHandler,

    pressSketchSettingsHandler,
    closeSketchSettingsHandler,
    pressResetSketchSettings,
    onChangeOpacityHandler,

    setSketchGroupItemHandler,
    deleteSketchesGroupItemHandler
  }
}
