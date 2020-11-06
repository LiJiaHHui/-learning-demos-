import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class MyBind extends Component{
    constructor(props){
        super(props);
        this.state={value:"hi!"}
    }
    handleClick(event){
        this.setState({value:event.target.value})
    }
    render(){
    return (
        <div>
        <input type="text" value={this.state.value} onChange={this.handleClick.bind(this)}/>
         <p>{this.state.value}</p>
       </div>
    )
        
    }
}
class Demo extends Component{
    render(){
        return(
            <div>
                <MyBind>
                </MyBind>
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  );