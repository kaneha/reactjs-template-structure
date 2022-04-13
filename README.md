# Setup and run guideline
This is a guideline to help you run this source stably.

## Install all necessary libraries 

In the project directory, you can run:

`npm install` or `yarn`

To install all necessary libraries

Then, run the following command:
`npm run start` or `yarn start`

To run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To run storybook to overview all components, run the following command:

`npm run storybook` or `yarn storybook`

## Generate all necessary files whenever you want to create new component

Run the following command:
`npm run generate` or `yarn generate`

And do as the guide appear in console

**Note: You have to make a component name in pascal case format.**

## Source structure
```
├── .storybook (storybook settings)
├── plop-templates (auto-generate templates)
├── public
├── src
│   ├── components (all common components)
│   │   ├── base (all base components)
│   │   ├── layout (all layout components)
│   │   ├── module (all common module components)
│   ├── page (all render page)
│   │   ├── Home (page)
│   │   ├── Login
│   ├── stories (all storybook item)
│   ├── types (all common types)
│   ├── utils (all common utilities)
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── yarn.lock / package-lock.json
├── README.md
```