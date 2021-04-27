## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Organisation:

The application is divided into Pages. Pages are root level routes. In this case:
1. Popular
2. Favorites

Each logical component might be separated into following:

### Domain:
Domain consists of schemas and models that could be business domains(like in this case Repository) or application domain(like in this case SearchParams). Domain can consist of mappers. Mappers convert one domain object to another. Usually translations reside in this folder as well.

### Infra:
This is where the infrastructure like api services reside

### View:
View consists of components. But when component is big and has business logic associated with it, it can be grouped into another sub folders of domain, state, view and app.

### State:
State is where the component state lies. This is where application state and context providers reside
