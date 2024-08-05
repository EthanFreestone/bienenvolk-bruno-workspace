# bienenvolk_bruno
A test repository set up to store Bienenvolk Bruno collections for developers

## Installing
git clone this repository to your local environment, and you should be ready to open `Bienenvolk Collection` directly inside Bruno.

## Making changes to bruno_shared_scripts
After making changes to the scripts, run:
```
cd <path_to_bienenvolk_bruno>/Bienenvolk Collection
npm run install-all
```

This will build bruno_shared_scripts to its internal "es" folder in the cjs format, which is necessary for the bruno scripts to work with `require`, and then install that via npm locally to the `node_modules` of Bienenvolk Collection.

If we extend to other collections which also use these scripts, `npm install` would be needed there too in order to use the local copy.

## Future
This can and should be made simpler by instead requiring bruno_request_scripts to publish to npm, and then using npm install instead.