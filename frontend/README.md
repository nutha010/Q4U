# Q4U Frontend

Below are some guides on code formatting for both webpages and components as well as styling both.

This project is built with ReactJS using the `create-react-app` boilerplate.

## Components

Components belong in the [`/src/Components`](/src/Components) folder. You can define components with either the
functional or class-based paradigms, but functional components are preferred.

** If a component has associated styles please make a sub-folder for that component file (JS, JSX) along with its stylesheet (CSS) **

## Making a Page

Pages (or more accurately: React components that are being used do describe pages) belong in the [`/src/Views`](/src/Views) folder.

### Each Page must contain

An SEO tag (Found in the components folder). Fill in a title and description that describes the page.

### Routing

We are using the [Reach Router](https://reach.tech/router). If you are familiar with React Router v3+ or 'react-router-dom' this is basically a simplified version of that.

## Using BootStrap

### Layout

The [`/src/App.js`](/src/App.js) file already wraps the website in a Container so you only have to worry about internal Rows and Columns. The documentation for this can be [found here](https://react-bootstrap.github.io/layout/grid/).

### Components

Take advantage of prexisting Bootstrap components. Documentation can be [found here](https://react-bootstrap.github.io/components/alerts/).

## Generated By `create-react-app`

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.