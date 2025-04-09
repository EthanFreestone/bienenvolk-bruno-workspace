# bienenvolk-bruno-workspace
Setting up a ready-to-go example workspace for using Bruno with the kint shared-bruno-scripts npm and bienenvolk-bruno-collection.

The main point here is that this is an _example_ of how to set up a Bruno workspace, but this can (and perhaps should) be done by the individual developer, bringing in the shared scripts repository if and only if they need it, as well as bringing in individual git repository collections (or private ones) as they see fit, without muddying the waters of this example workspace.

## Installing
git clone this repository to your local environment, and you should be ready to open `Bienenvolk Collection` directly inside Bruno.

This repository can be git cloned with `git clone git@github.com:EthanFreestone/bienenvolk-bruno-workspace.git --recurse-submodules` to bring in both the collection and the shared scripts npm.

Once installed, run `npm install` from the top level. This should symlink the bruno-shared-scripts and bienenvolk-bruno-collection so it can be worked on in unison.

## Making changes
This workspace makes use of git submodules, so any changes should be made on branches in the requisite git repository, and submitted for PRs there. Once those are accepted and tested, the submodules can be brought up to the latest commit in this workspace. This should be done extremely carefully, so as not to leave the onboarding example in a state where it does not work.