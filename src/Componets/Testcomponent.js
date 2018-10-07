import React from 'react';

const TestComponent = (props)=> {
  return (
    <div>This is a testComponent{props.name}</div>
  )
}

TestComponent.defaultProps = {
  name: 'This is a testComponent'
};
export default TestComponent;