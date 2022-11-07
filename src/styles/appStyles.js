import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Sizes } from '../constants/stylesConst';

export const appStyles = StyleSheet.create({
  header: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryBg,
  },
  headerLabel: {
    paddingTop: 7,
    color: Colors.text,
    fontSize: FontSizes.main,
  },

  fontsContainer: {
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.primaryBg1
  },
  title: {
    marginBottom: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
    fontSize: FontSizes.main,
    backgroundColor: "#262626",
    opacity: 0.8,
    color: Colors.text,
  },
  fontWrapper: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  footerBar: {
    flexBasis: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 8,
    backgroundColor: Colors.primaryBg,
    alignItems: 'center'
  },
  textInputWrapper: {
    marginHorizontal: 10,
    paddingLeft: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryBg1,
    borderRadius: 15
  },
  textInput: {
    paddingVertical: 3,
    flex: 1,
    color: Colors.text,
    backgroundColor: Colors.primaryBg1,
    borderRadius: 15
  },
  clearTextBtn: {
    width: 16,
    height: 16
  },
  buttonString: {
    width: 32,
    height: 32
  },
  buttonStringText: {
    color: Colors.text,
    textAlign: 'center',
    width: 32,
    height: 32,
  },
  buttonIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
  buttonIconMR: {
    marginRight: 15
  },

  buttonRound: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    backgroundColor: "red",
  },
  buttonRoundLast: {
    marginRight: 0
  },
  buttonItemText: {
    color: Colors.text,
  },
  buttonTextWrapper: {
    height: 30
  },
  buttonText: {
    color: Colors.btnResetText,
    marginTop: 'auto',
    fontSize: 17,
  },


 // ------modal styles------ //

 view: {
  backfaceVisibility: 'green',
  flex: 1
 },
  modalWrapper: {
    marginTop: 'auto',
    padding: 10,
    backgroundColor: Colors.primaryBg,
  },
  modalCloseHandler: {
    marginBottom: 20,
    alignSelf: 'center',
    width: 50,
    height: 4,
    backgroundColor: '#DADBDB',
    borderRadius: 2
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  settingsSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  settingsSection: {
    marginTop: 15,
  },
  settingsSectioLabel: {
    marginBottom: 10,
    color: Colors.text,
    fontSize: FontSizes.main,
  },
  settingsWrapper: {
    flexDirection: 'row',
  },
  colorPickerButton: {
    marginTop: 2.5,
    marginRight: 20,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: '#ffffff',
    borderWidth: 2
  },
  colorButtonBorder: {
    borderRadius: 18,
    marginRight: 10,
    borderWidth: 2.5,
  },
  colorButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.primaryBg
  },

  transparentButton: {
    width: 32,
    height: 32
  },

  textTEST: {            // for test
    color: 'white'
  },


 // ------slider styles------ //

  slider: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: -16, // delete auto margin from lib
    marginRight: -10,
    marginTop: 10,
    height: 25,
  },


   // ------color Picker styles------ //

  colorPickerModal: {
    marginTop: 'auto',
    padding: 10,
    paddingBottom: 20,
    height: Sizes.colorPickerModalHeight,
    backgroundColor: Colors.primaryBg,
  },
  colorPickerCloseBtnContainer: {
    marginLeft: 'auto',
  },
  colorPicker: {
    marginTop: -15,
    flex: 1,
    zIndex: -1
  },


     // ------Info Modal styles------ //

  infoModal: {
    height: Sizes.infoModalHeight,
  },
  infoModalWrapper: {
    flex: 1,
    marginTop: 'auto',
  },
  infoModalLineWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  infoModalItem: {
    margin: 12,
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },


    // ------Show More Modal styles------ //

    showMoreModal: {
      height: Sizes.showMoreModalHeight,
    },
    showMoreModalBtnLabel: {
      padding: 18,
      fontSize: FontSizes.main,
      color: Colors.text
    },
    ModalBtnsContainer: {
      backgroundColor: Colors.btn1,
      borderRadius: Sizes.mainBtnRadius,
    },
    showMoreModalBtnDivider: {
      alignSelf: 'center',
      width: '100%',               // исправить
      height: 1,
      backgroundColor: Colors.primaryBg,
      borderRadius: 1
    },


    // ------ AltSharingModal styles ------ //

    altSharingModal: {
      position: 'relative',
      margin: 0,
      flex: 1,
      backgroundColor: Colors.alertBG,
      justifyContent: 'center'
    },
    altSharingModalContainer: {
      position: 'absolute',
      width: Sizes.altSharingModalWidth,
      // marginLeft: 30
    },


    // ------Alert styles ------ //
    alertScreen: {
      margin: 0,
      flex: 1,
      backgroundColor: Colors.alertBG,
      justifyContent: 'center'
    },
    AlertContainer: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 250,
      backgroundColor: Colors.btn1,
      borderRadius: Sizes.mainBtnRadius,
    },
    AlertHeader: {
      padding: 18,
    },
    AlertLabel: {
      textAlign: 'center',
      fontSize: FontSizes.main,
      color: Colors.text,
    },
    AlertMessage: {
      marginTop: 5,
      textAlign: 'center',
      fontSize: FontSizes.mainSmall,
      color: Colors.text
    },
    AlertBtnContainer: {
      flexDirection: 'row'
    },
    AlertButtonText: {
      padding: 18,
      textAlign: 'center',
      fontSize: FontSizes.main,
      color: Colors.text
    },
    AlertDivider: {
      alignSelf: 'center',
      width: 1,
      height: '100%',
      backgroundColor: Colors.primaryBg,
      borderRadius: 1
    },

    // ------ Notifivation styles------ //

    imgNotificationWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: Colors.notificationBg,
    opacity: 0.9,
    borderRadius: 12
  },
  imgNotificationText: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: FontSizes.notification,
    color: Colors.notificationText
  },


      // ------ Buttons styles------ //

    MainButton: {
      flex: 1
    },
});
