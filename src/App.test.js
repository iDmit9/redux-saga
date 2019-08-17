// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});