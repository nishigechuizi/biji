import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HashRouter  } from "react-router-dom";

import { Provider } from "react-redux"
import store from "./store"

import "normalize.css"
import "./assets/css/index.less"

// @ => src: webpack
//问题 react脚手架隐藏webpack
//解决一 npm run eject
//解决二 craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
);

  // <React.StrictMode> 
  // <React.StrictMode> 
  // {/* //严格模式 会执行两次请求，第二次看有没有问题 */}
