// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCYFnea02ad-7uQegA-4q8IQOp1lLdnGOA',
      authDomain: 'foodtruckapp-d1c66.firebaseapp.com',
      databaseURL: 'https://foodtruckapp-d1c66.firebaseio.com',
      projectId: 'foodtruckapp-d1c66',
      storageBucket: 'foodtruckapp-d1c66.appspot.com',
      messagingSenderId: '673354347059'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
