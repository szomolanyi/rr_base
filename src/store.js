/*jshint esversion:6*/

import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
