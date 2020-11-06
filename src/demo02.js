import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Hello extends Component{
    render(){
    return <h1>hello {this.props.name}</h1>
    }
}
class Demo extends Component{
    render(){
        const arr = [
            <h1 key="1">hello</h1>,
            <h2 key="2">react</h2>
        ]
        return(
            <div>
                <Hello name="john"></Hello>
                <ul>{
                    arr
                }</ul>
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  );