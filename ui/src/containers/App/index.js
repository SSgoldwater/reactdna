import React from 'react';
import TopNav from 'components/Layout/TopNav';

const App = (props) => {
  return (
    <div>
      <TopNav />
      { props.children }
    </div>
  );
}

export default App;
