import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Sizes } from '../constants/stylesConst';

export const appStyles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  header: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: Sizes.mainPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  headerRight: {
    justifyContent: 'flex-end'
  },
  headerLabel: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 7,
    fontSize: FontSizes.main,
  },
  fontsContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'stretch',
  },


   // ------font item styles------ //

  fontButton: {
    paddingHorizontal: Sizes.mainPadding,
    paddingVertical: 12,
    backgroundColor: 'transparent'
  },
  fontIconIcon: {
    width: 18,
    height: 18,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    fill: Colors.crownColor
  },
  fontWrapper: {
    marginTop: 12
  },
  fontItemDivider: {
    alignSelf: 'center',
    width: '100%',               // исправить
    height: 1,
    borderRadius: 1
  },



       // ------sketch list and item styles------ //
    sketchList: {
      flex: 1,
      paddingVertical: Sizes.mainPadding,
      paddingHorizontal: Sizes.mainPadding,
    },
    sketchListRow: {
      // paddingVertical: Sizes.mainPadding/2,
      // paddingHorizontal: Sizes.mainPadding,
    },

    sketchButton: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'transparent',
      paddingBottom: Sizes.mainPadding,
    },
      sketchWrapper: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        maxHeight: 100,
        maxWidth: 100,

        backgroundColor: 'transparent',
        // shadowColor: 'red',
        // elevation: 5,
      },
      sketchWrapperActive: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        borderRadius: Sizes.mainBtnRadius,

        backgroundColor: 'transparent',
        // shadowColor: '#FFFFFF',
        // elevation: 15,
      },


 // ------footer styles------ //


  footerBar: {
    flexBasis: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: Sizes.mainPadding,
    alignItems: 'center'
  },

  SketchsFooter: {
    paddingVertical: 5,
    paddingRight: 0
  },

 // ------ContentGroupsLabelsSlider styles------ //

  groupLabelBtnSlider: {
    paddingVertical: 5,
    paddingHorizontal: Sizes.mainPadding / 2,
    paddingRight: 20,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15

  },
  groupLabelBtn: {
    marginRight: Sizes.mainPadding / 2,
    borderRadius: 13
  },
  groupLabelBtnText: {
    paddingVertical: 8,
    paddingHorizontal: Sizes.mainPadding,
    fontSize: FontSizes.main,
  },


  textInputWrapper: {
    marginHorizontal: 10,
    paddingLeft: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15
  },
  textInput: {
    paddingVertical: 3,
    flex: 1,
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
  },
  buttonTextWrapper: {
    height: 30
  },
  resetButtonText: {
    color: Colors.btnResetText,  // оставить
    marginTop: 'auto',
    fontSize: 17,
  },


 // ------modal styles------ //

  modalWrapper: {
    zIndex: 2,
    marginTop: 'auto',
    padding: Sizes.mainPadding,
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
    fontSize: FontSizes.main,
  },
  settingsWrapper: {
    flexDirection: 'row'
  },

   // ------colorPickerButton styles------ //

  colorPickerButton: {
    marginRight: 18,
  },

  colorPickerButtonBG: {
    width: 41,
    height: 41,
  },
  colorPickerColorRnd: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: 33,
    height: 33,
    borderRadius: 16,
    borderWidth: 3
  },


  // ------color Button Item styles------ //

  colorButtonWrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 37,
    borderRadius: 18,
    marginRight: 10,
    borderWidth: 2.5,
  },
  colorButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
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
    },
    ModalBtnsContainer: {
      borderRadius: Sizes.mainBtnRadius,
    },
    showMoreModalBtnDivider: {
      alignSelf: 'center',
      width: '100%',               // исправить
      height: 1,
      borderRadius: 1
    },


    // ------ AltSharingModal styles ------ //

    altSharingModal: {
      position: 'relative',
      margin: 0,
      flex: 1,
      justifyContent: 'center'
    },
    altSharingModalContainer: {
      position: 'absolute',
      width: Sizes.altSharingModalWidth,
    },


    // ------Alert styles ------ //
    alertScreen: {
      margin: 0,
      flex: 1,
      justifyContent: 'center'
    },
    AlertContainer: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 250,
      borderRadius: Sizes.mainBtnRadius,
    },
    AlertHeader: {
      padding: 18,
    },
    AlertLabel: {
      textAlign: 'center',
      fontSize: FontSizes.main,
    },
    AlertMessage: {
      marginTop: 5,
      textAlign: 'center',
      fontSize: FontSizes.mainSmall,
    },
    AlertBtnContainer: {
      flexDirection: 'row'
    },
    AlertButtonText: {
      padding: 18,
      textAlign: 'center',
      fontSize: FontSizes.main,
    },
    AlertDivider: {
      alignSelf: 'center',
      width: 1,
      height: '100%',
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
    opacity: 0.9,
    borderRadius: 12
  },
  imgNotificationText: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: FontSizes.notification,
    color: Colors.notificationText // оставить
  },

    // ------ contentBtns styles------ //

  contentSwitcherBtns: {
    flexDirection: 'row'
  },
  contentSwitcherBtn: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
  },
  contentSwitcherBtnLabel: {
    textAlign: 'center',
    fontSize: FontSizes.main,
  },



    // ------ StickersModal styles------ //
  stickersModalWrapper: {
    zIndex: 2,
    flex: 1,
    // marginTop: 'auto',
    // padding: Sizes.mainPadding,
  },

});
