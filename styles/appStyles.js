import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  header: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flexBasis: 'auto',
    backgroundColor: "#1E1E1E",
  },
  headerLabel: {
    paddingTop: 7,
    color: "#FFFFFF",
    fontSize: 16,
  },

  fontsContainer: {
    position: 'relative',
    flex: 1,
    backgroundColor: "#000000"
  },
  title: {
    marginBottom: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#262626",
    opacity: 0.8,
    color: "#FFFFFF",
  },
  fontWrapper: {
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 15,
    borderRadius: 8
  },
  footerBar: {
    flexBasis: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 8,
    backgroundColor: "1E1E1E"
  },
  textInputWrapper: {
    marginHorizontal: 10,
    paddingLeft: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // height: 35,
    backgroundColor: "#000000",
    borderRadius: 15
  },
  textInput: {
    paddingVertical: 3,
    flex: 1,
    color: "#ffffff",
    backgroundColor: "#000000",
    borderRadius: 15
  },
  clearTextBtn: {
    width: 16,
    height: 16
  },
  buttonString: {
    // backgroundColor: "red",
    width: 32,
    height: 32
  },
  buttonStringText: {
    color: "#ffffff",
    textAlign: 'center',
    width: 32,
    height: 32,
  },
  buttonIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    // backgroundColor: "red",
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
    color: "#ffffff",
  },
  buttonTextWrapper: {
    height: 30
  },
  buttonText: {
    color: "#027AF9",
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
    backgroundColor: '#1E1E1E',
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

  settingsSection: {
    marginTop: 15,
  },
  settingsSectioLabel: {
    marginBottom: 10,
    color: "#ffffff",
    fontSize: 16,
  },
  settingsWrapper: {
    flexDirection: 'row',
  },
  colorPickerButton: {
    marginRight: 22,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: '#ffffff',
    borderWidth: 2
  },

  colorButton: {
    marginRight: 10,
    width: 32,
    height: 32,
    borderRadius: 16
  },
  transparentButton: {
    marginRight: 10,
    width: 32,
    height: 32
  },

  textTEST: {            // for test
    color: 'white'
  },


 // ------slider styles------ //

  slider: {
    marginTop: 10,
    width: '100%',
    height: 25
  },


   // ------color Picker styles------ //

  colorPickerModal: {
    marginTop: 'auto',
    padding: 10,
    paddingBottom: 20,
    height: '50%',
    backgroundColor: '#1E1E1E',
  },
  colorPicker: {
    marginTop: -15,
    flex: 1,
    zIndex: -1
  },


     // ------Info Modal styles------ //

  infoModal: {
    height: '60%',
  },

  infoModalWrapper: {
    flex: 1,
    marginTop: 'auto',
    // alignItems: 'center'
    // marginVertical: 'auto'
    // alignSelf: 'center'
    // justifyContent: 'space-around'
    // justifyContent: 'center'

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
      height: '60%'

    },
    showMoreModalBtn: {
      marginBottom: 35,
      // backgroundColor: '#000000',
      backgroundColor: '#3D3939',
      borderRadius: 10
    },
    showMoreModalBtnLabel: {
      padding: 18,
      fontSize: 16,
      color: '#ffffff'
    },
    ModalBtnsContainer: {
      backgroundColor: '#3D3939',
      borderRadius: 10
    },
    showMoreModalBtndevider: {
      alignSelf: 'center',
      width: '100%',               // исправить
      height: 1,
      backgroundColor: '#1E1E1E',
      borderRadius: 1
    },

    // ------AltSharingModal styles------ //

    altSharingModal: {
      height: '40%',
    },

    // ------Img Saved Notifivation styles------ //

  imgSavedNotWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#D0CACA',
    opacity: 0.9,
    borderRadius: 12
  },
  imgSavedNotText: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 24,
    color: '#666666'
  }
});
