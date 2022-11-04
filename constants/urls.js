import { Platform } from 'react-native';

export const urls = Object.freeze({
  appProUrl: Platform.OS === 'ios' ? 'https://www.apple.com' : 'https://www.apple.com',  // исправить
  appFreeUrl: Platform.OS === 'ios' ? 'https://www.apple.com' : 'https://www.apple.com', // исправить
  mailToUrl: 'aroslanova.y@icloud.com',                                                // исправить
  mailToSubject: "My Subject",                                                         // исправить
  mailToSubjectMessage: "My Message",                                                   // исправить
  rateUrl: Platform.OS === 'ios' ? 'https://www.apple.com' : 'https://www.apple.com'  // исправить
});
