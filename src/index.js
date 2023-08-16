import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HashRouter  } from "react-router-dom";

import "normalize.css"
import "./assets/css/index.less"

// @ => src: webpack
//问题 react脚手架隐藏webpack
//解决一 npm run eject
//解决二 craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
);

