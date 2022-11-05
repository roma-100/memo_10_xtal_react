import React from "react";
import { Link } from "react-router-dom";
 
const GenModel = (props) => {

    const modelActive =() => {
        return (
            <div className="gen-model">
            <div className="gen-model__title"><h4>{props.genModelTitle}</h4></div>
            <div className="gen-model__package">{props.genModelPackaging}</div>
            <div className="gen-model__picture"><img className="gen-model__picture--decor" 
            src={props.genModelPicture} alt="xtal XBO37/8" /></div> 
            
            <div className="gen-model__btn">
            <Link to="/specification">Specification</Link>
            </div>
        </div>
    )
    }
    const modelDisabled =() => {
        return (
          <div className="gen-model gen-model--disabled">
            <div className="gen-model__title">
              <h4>{props.genModelTitle}</h4>
            </div>
            <div className="gen-model__package">{props.genModelPackaging}</div>
            <div className="gen-model__picture">
              <img
                className="gen-model__picture--decor"
                src={props.genModelPicture}
                alt="xtal XBO37/8"
              />
            </div>

            <div className="gen-model__btn--disabled">Specification</div>
          </div>
        );
    }

    return (
    <>
        {props.genModelIsActive ? modelActive() : modelDisabled()}
    </>
    )    
}

export default GenModel