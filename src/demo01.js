import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Demo extends Component{
    render(){
        const names = ['Alex','swift','jony']
        return(
            <div>
                <ul>{
                names.map((name,index)=>{
                    return(
                    <h1 key={index}>hello{name}</h1>
                    )
                })
                }</ul>
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  );