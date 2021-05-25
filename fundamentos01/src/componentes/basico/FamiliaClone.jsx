import React, { cloneElement} from 'react';
 
export default props => {
 
    return(
        <div>
            {/* Para um énico elemento filho*/}
            {/* {CcloneElement(props.children, {...props})}*/}
 
            {/* Para várias elementos filhos*/}
            {props.children.map((child) => {
                return cloneElement(child, {...props})
            })}
        </div>
    )
}