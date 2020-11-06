import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class MyClick extends Component{
    constructor(props){
        super(props);
        this.state={success:false}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({success:!this.state.success})
    }
    render(){
        const text=this.state.success?'yes':'no'
    return (
        <button onClick={
            this.handleClick
        }>
            {text}
        </button>
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