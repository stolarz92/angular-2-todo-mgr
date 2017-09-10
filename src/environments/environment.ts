// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  token_auth_config: {
    apiBase: 'http://localhost:3000',
    globalOptions: {
      headers: {
        'content-type':  'application/json',
        'accept':  'application/json',
        'access-token': localStorage.getItem('accessToken'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid'),
        'expiry': localStorage.getItem('expiry'),
        'token-type': 'Bearer'
      }
    }
  }
};
