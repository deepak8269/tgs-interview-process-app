# TGS interview App

Branches:

- `master` - for production
- `dev` - for development
- `qa` - For quality testing

Development:

- `npm run start:dev` - for running application on LOCAL

Adding Environment Variables in:

- On LOCAL env, we read environment variables from ".env" file at root level of directory.

- On PRODUCTION env, we read them ".env" file but we inject them into application code at the time of compilation. Henceforth please add the environment variable in the webpack.config.js file as well.
