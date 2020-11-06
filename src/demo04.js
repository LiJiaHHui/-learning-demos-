import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-type';
class MyTitle extends Component{
    render(){
    return <h1>{this.props.title}</h1>
        
    }
}
MyTitle.propTypes={
    title:PropTypes.string
};
class Demo extends Component{
    render(){
        const arr="123"
        // const num=123
        return(
            <div>
                <MyTitle title={arr}>
                </MyTitle>
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  );