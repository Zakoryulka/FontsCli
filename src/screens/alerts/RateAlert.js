import { useSelector, useDispatch } from "react-redux";

import Alert from '../../components/Alert';

import { rateAlertHide } from "../../store/alertSettings";
import { useLinks } from "../../hooks/useLinks";

const RateAlert = () => {
  const rateAlertVisible = useSelector(state => state.alertSettings.rateAlertVisible);
  const dispatch = useDispatch();
  const { addRate } = useLinks();

  const onPressCancel = () => {
    dispatch(rateAlertHide());
  };

  const onPressAddRate = () => {
    addRate();
    dispatch(rateAlertHide());
  };

   return (
     <Alert
        visible={rateAlertVisible}
        alertLabel={'??? Alert label ???'}
        alertMessage={'??? Alert Message ???'}
        cancelBtnLabel={'Cancel'}
        actionBtnLabel={'??? Rate ???'}
        onPressBg={onPressCancel}
        onPressCancel={onPressCancel}
        onPressAction={onPressAddRate}
     />
  )
};

export default RateAlert;
