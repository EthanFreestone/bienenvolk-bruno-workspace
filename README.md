# bienenvolk-bruno-workspace
Setting up a ready-to-go example workspace for using Bruno with the kint shared-bruno-scripts npm and bienenvolk-bruno-collection.

The main point here is that this is an _example_ of how to set up a Bruno workspace, but this can (and perhaps should) be done by the individual developer, bringing in the shared scripts repository if and only if they need it, as well as bringing in individual git repository collections (or private ones) as they see fit, without muddying the waters of this example workspace.

## Installing
git clone this repository to your local environment, and you should be ready to open `Bienenvolk Collection` directly inside Bruno.

This repository can be git cloned with `git clone git@github.com:EthanFreestone/bienenvolk-bruno-workspace.git --recurse-submodules` to bring in both the collection and the shared scripts npm.

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