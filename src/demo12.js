import React from 'react';
import ReactDOM from 'react-dom'
function HOC(WrappedComponent) {
    function wrappedComponentStaic () {
        WrappedComponent.sayHello();
      }
  
      return (props) => (
        <div>
          <WrappedComponent
            {...props}
          />
          <input
            type="button"
            value="调用子组件static"
            onClick={wrappedComponentStaic}
          />
        </div>
      );
  
  }
  
  // 使用
  class Example extends React.Component {
    static sayHello () {
        console.error('hello world'); 
      }
    render() {
      return (
      <div>
      <input name="name" />
      </div>
      )
    }
  }
  
  
const HOCWrap= HOC(Example)
ReactDOM.render(
    <HOCWrap />,
    document.getElementById('root')
  );