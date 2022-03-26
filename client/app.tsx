import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouterConfig } from './src/routes/RouterConfig';

ReactDOM.render(
    <RouterConfig />,
    document.getElementById('app') as HTMLElement
  );