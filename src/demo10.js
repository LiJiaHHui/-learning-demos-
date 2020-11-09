// HOC的简单使用
import React from 'react';
import ReactDOM from 'react-dom';

/* 返回无状态的函数组件
function HOC(WrappedComponent) {
    const newProps = { type: 'HOC' };
    return props => <WrappedComponent {...props} {...newProps}/>;
  }
*/
function HOC(WrappedComponent){
    return class extends React.Component{
        render(){
            const newProps={ type:'HOC'} // eslint-disable-next-line
            return <WrappedComponent {...this.props}{...this.newProps}></WrappedComponent>
        }
    }
}
class WrappedComponent extends React.Component{
        render(){
        return(
            <h1>
                {this.props.type}
            </h1>
        )}
}
const HOCWrap= HOC(WrappedComponent)
ReactDOM.render(
    <HOCWrap />,
    document.getElementById('root')
  );