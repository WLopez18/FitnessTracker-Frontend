import React from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Routes, Route, HashRouter } from 'react-router-dom';
import App from './App'

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);