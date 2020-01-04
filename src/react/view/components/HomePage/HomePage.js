import React                        from "react";
import { connect }                  from "react-redux";

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>Home</p>
            </div>
        );
    }
}

function _mapStateToPropsTop(state) {
    return {
    };
}
export default connect(_mapStateToPropsTop)(HomePage);
