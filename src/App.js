import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { defaultTheme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import srcConfig from './srcConfig.json'

const myTheme = {
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        ...srcConfig.theme.palette,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
};

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin 
      dataProvider={dataProvider}
      theme={myTheme}
    >
        <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;