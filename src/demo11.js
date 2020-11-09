import React from 'react';
import ReactDOM from 'react-dom';
// 高阶组件
function HOC(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: '',
        };
        this.onChange = this.onChange.bind(this);
      }
      
      onChange = (event) => {
        this.setState({
          name: event.target.value,
        })
      }
      
      render() {
        const newProps = {
          name: {
            value: this.state.name,
            onChange: this.onChange,
          },
        };
        return <WrappedComponent {...this.props} {...newProps} />;
      }
    };
  }
  
  // 使用
  class Example extends React.Component {
    render() {
      return (
      <div>
      <input name="name" {...this.props.name} />
      {this.props.name.value}
      </div>
      )
    }
  }
  
  
const HOCWrap= HOC(Example)
ReactDOM.render(
    <HOCWrap />,
    document.getElementById('root')
  );