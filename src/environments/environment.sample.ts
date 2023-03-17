// ** For development only **
// You will find all necessary variables there
// To add more variables for production environment go to `src/environments/set-env.ts`
// Edit envConfigFile constant to add the new variables


// *************************************************
// IMPORTANT : GIVE THE SAME VAR NAME IN ``environment.ts` AND envConfigFile constant from `src/environments/set-env.ts`
// *************************************************
export const environment = {
  production: false,
  apiUrl: 'yourApiUrl',
  apiDomain: 'yourApiDomain',
  apiKey: 'YourApiKey',
  encryptionKey: 'YourEncryptionKey1234'
};
