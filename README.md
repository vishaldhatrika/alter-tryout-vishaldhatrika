# Alter Developer Tryout

This is a tryout for a web develop position at Alter.

It simulates a typical work assignment from a design we have already built.

You should spend between 2-4 (flow) hours on this task.

The instructions are simple:

- Create a private github repo called `alter-tryout-[YOUR_GITHUB_USERNAME]`
  - add `initplatform` as a collaborator to the repo
  - It should be an empty repo. Don't add a README.
  - You will populate the repo in the next steps
- Download and extract the starter project from here: TODO
- Add the remote repo to the starter project

  ```bash
  cd alter-tryout
  git
  ```

- NPM install and start the dev server

  ```bash
  npm install
  npm run dev
  ```

- Refence the Figma file
  - <https://www.figma.com/design/GFh4DVANBiNk2nIuj1UJuC/Alter-Dev-Tryout>
- Finish the page
  - Do not worry about the carousel. You can leave it as is.
  - Complete the rest of the page.
  - If you have time, feel free to extend the carousel to fit the comp.
- Create issues in the repo for any bugs of enhancements
- If you can not finish within 2-4 hours
  - Create issues in the repo for anything you were not able to get to

## Tips for Success

Our engineering values are:

- Efficiency
- Quality
- Velocity

With that in mind:

### Typescript

Everything is in Typescript. `any` is poison

### Linting

Be sure everything passes the linting rules.

If you are using VSCode (Strongly suggest you do) then the project has settings to automatically lint on save.

### Components

Use them. Lot's of them.

`.tsx` files should be 50-100 lines max.
