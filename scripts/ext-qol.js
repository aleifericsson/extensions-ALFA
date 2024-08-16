import React from 'react';
import ReactDOM from 'react-dom/client';

function injectReact(Component, root_ele) {
    ReactDOM.createRoot(root_ele).render(
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    );
  }

export {injectReact}