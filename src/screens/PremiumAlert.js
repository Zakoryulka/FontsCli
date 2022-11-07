import { useSelector, useDispatch } from "react-redux";

import Alert from '../components/Alert';

import { premiumAlertHide } from "../store/alertSettings";
import { useLinks } from "../hooks/useLinks";

const PremiumAlert = () => {
  const premiumAlertVisible = useSelector(state => state.alertSettings.premiumAlertVisible);
  const { upgrateToPro } = useLinks();

  const dispatch = useDispatch();

  const onPressCancel = () => {
    dispatch(premiumAlertHide());
  };

  const onPressDownload = () => {
    upgrateToPro();
    dispatch(premiumAlertHide());
  };

   return (
     <Alert
        visible={premiumAlertVisible}
        alertLabel={'This font is available only in Pro version'}
        alertMessage={'Download Sticker Fonts Pro to use all 200+ fonts'}
        cancelBtnLabel={'Cancel'}
        actionBtnLabel={'Download'}
        onPressBg={onPressCancel}
        onPressCancel={onPressCancel}
        onPressAction={onPressDownload}
     />
  )
};

export default PremiumAlert;
