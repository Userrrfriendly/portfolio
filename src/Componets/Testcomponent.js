import React from 'react';

const TestComponent = (props)=> {
  return (
    <div>This is a testComponent {props.title}</div>
  )
}

TestComponent.defaultProps = {
  name: 'This is a testComponent'
};
export default TestComponent;