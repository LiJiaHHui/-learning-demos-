import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class MyClick extends Component{
    constructor(props){
        super(props);
        this.value=React.createRef();
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.value.current.focus();
    }
    render(){
    return (
        <div>
        <input type="text" ref={this.value} />
        <input type="button"  value="click me" onClick={
            this.handleClick
        }></input>
       </div>
    )
        
    }
}
class Demo extends Component{
    render(){
        return(
            <div>
                <MyClick>
                </MyClick>
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  );