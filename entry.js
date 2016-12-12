import React from 'react';
import { render } from 'react-dom';

class HelloReact extends React.Component {
  render() {
    return(
      <div id='helloreact'>
        Hello
      </div>
    )
  }
}

render(<HelloReact />, document.getElementById('app'))
