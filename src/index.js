import React from 'react';
import ReactDOM from 'react-dom';

const Title = () => <h1>Hello, World</h1>;

const titleContainer = document.getElementById('title-container');
ReactDOM.render(<Title />, titleContainer);
