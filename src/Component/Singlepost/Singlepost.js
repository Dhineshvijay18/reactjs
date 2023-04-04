const { Component } = require("react");

class Singlepost extends Component{
    render(){
        
        return(
            
        <div className=" m-4 p-3 border border-gray-400 shadow">
        <div className="text-xl text-blue font-bold">{this.props.title}</div>
        <div>{this.props.description}</div>
    </div>

        );   
    }
}

export default Singlepost;