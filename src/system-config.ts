/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {

}

/** User packages configuration. */
const packages: any = {
  'teambition-sdk': {
    format: 'cjs'
  },
  'async-teambition-sdk': {
    format: 'cjs'
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'services',
  'utils',
  'pipes',
  'app/shared',
  /** @cli-barrel */
]

const cliSystemConfigPackages: any = {}
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' }
})

/** Type declaration for ambient System. */
declare var System: any

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'teambition-sdk': 'vendor/teambition-sdk/dist/bundle/tbsdk.umd.js',
    'async-teambition-sdk': 'vendor/teambition-sdk/dist/bundle/tbsdk.async.js'
  },
  packages: cliSystemConfigPackages
})

// Apply the user's configuration.
System.config({ map, packages })
