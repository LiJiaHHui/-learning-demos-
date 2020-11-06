import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class MyBind extends Component{
    constructor(props){
        super(props);
        this.state={
            opacity:1.0
        }
    }
    componentDidMount(){
        this.timer=setInterval(function(){
            var opacity=this.state.opacity;
            opacity-=.05;
            if(opacity<0.1){
                opacity=1
            }
            this.setState({
                opacity:opacity
            })
        }.bind(this),100
        )
    }
    render(){
    return (
        <div style={{opacity:this.state.opacity}}>
            hello {this.props.name}
       </div>
    )
        
    }
}
class Demo extends Component{
    render(){
        return(
            <div>
                <MyBind name="girl">
                </MyBind>
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  );