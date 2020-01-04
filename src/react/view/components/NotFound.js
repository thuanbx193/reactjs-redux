import React                        from "react";
import { connect }                  from "react-redux";

class NotFound extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>NotFound</p>
            </div>
        );
    }
}

function _mapStateToPropsTop(state) {
    return {
    };
}
export default connect(_mapStateToPropsTop)(NotFound);
