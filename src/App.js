import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { defaultTheme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const myTheme = {
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        // primary: '#e8eaf6',
        // secondary: '#fce4ec',
        // error: '#ffebee',
        contrastThreshold: 3,
        tonalOffset: 0.2,
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