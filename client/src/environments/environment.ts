// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
const baseUrl = '';
export const environment = {
  production: false,
  baseUrl: baseUrl,
  url: 'http://localhost:4200/' + baseUrl,
  urlLogOut: 'http://localhost:4200/' + baseUrl,
  // urlOneDriveService:
  //   'https://pruebas.espoch.edu.ec:8181/WebCorreoInstitucional/ServiciosCorreos/TokenOneDrive',
  //  urlApi: 'https://192.168.1.111:8000/',            //Wifi de Ruben
  // urlApi: 'https://api-inventario.rubenvn.com/',   //Servidor de Ruben en la Nube
  //  urlApi: 'https://26.241.69.100:8000/',             //Servidor de Homero radmin VPN
  // urlApi: 'https://26.63.14.26:8001/',             //Servidor de Daniel radmin VPN
  // urlApi: 'https://26.157.36.117:8000/',              //Servidor VyV readmi
  // urlApi: 'https://192.168.1.107:8001/',           //Wifi Ruben
  //urlApi: 'https://localhost:8001/',               //Local de Daniel
  //urlApi: 'http://localhost:4400/', //Local de Homero
  // urlApi: 'https://localhost:8001/',               //Local de Daniel
    urlApi: 'http://localhost:4400/'
  // urlApi: 'https://localhost:8000/',               //Local de Homero
  // CodigoSistemaOneDrive: 'ARCHPOLI',
};
