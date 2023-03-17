// ** For development only **
// You will find all necessary variables there
// To add more variables for production environment go to `src/environments/set-env.ts`
// Edit envConfigFile constant to add the new variables


// *************************************************
// IMPORTANT : GIVE THE SAME VAR NAME IN ``environment.ts` AND envConfigFile constant from `src/environments/set-env.ts`
// *************************************************
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
