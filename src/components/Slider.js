import React, { Component } from 'react';



class componentName extends Component {
    
    render() {
        const barWidth = `${this.props.level}%`
        return (
            
            <div className="bar">
                <div className="bar-wrapper" style={{'width': barWidth}}>
                    <span className="bar-name">
                        <img src={this.props.icon} alt="icon" className="bar-icon"/>
                        {this.props.name}
                    </span>
                </div>
            </div>
        );
    }
}

export default componentName;



// import React from 'react';

// const componentName = ({value: {icon,name,level}}) => {
//     return (
        // <div className="bar">
        //     <div className="bar-wrapper">
        //         <span className="bar-name">
        //             <img src={icon} alt="icon" className="bar-icon"/>
        //             <p>{name}</p>
        //         </span>
        //     </div>
        // </div>
//     );
// };

// export default componentName;