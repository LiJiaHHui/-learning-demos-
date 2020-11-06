import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Hello extends Component{
    render(){
    return (
    <ol>
        {this.props.children.map((child,index)=><li key={index}>{child}</li>)
        }
    </ol>)
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
                <Hello>
                   { arr}
                </Hello>
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  );