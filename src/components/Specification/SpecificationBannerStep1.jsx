//***********  SpecificationBannerStep1.jsx **** */
import React from "react";

const SpecificationBannerStep1 = (props) => {
  //window.bb = props
    const picturePath = "../../pimages/types200/"+
          props.selectedModel.pictureTag +
          "_200px.png"
          console.log (picturePath)
/*     const extractFeatures = props.selectedModel.features.map((feature,index) =>{
      <p>hello</p>
    })   */

/*     const extractFeatures =   props.features.map((x, index) => {
      return <h5 key={index}>{x}</h5>;
    })
    window.bb  = props.features */

/* window.bb = props.features.forEach((element, index) => {
  console.log(element, index)
}) */
let myArray = []
const extractFeatures = (a) => {
  //window.bc = myArray
  if (a) {
    return a.map((x, index) => {
      return <h5 key={index}>{x}</h5>;
    })
  }
}
//window.bb = extractFeatures(props.features)

      return (
          <div className="speciication__wrap">
        <div className="speciication-model__name"><h1>Model: {props.selectedModel.name} </h1></div>
        <div className="speciication-model__info-wrap">
          <div className="speciication-model__left-side">
            <div className="speciication-model__picture">
              <img src={picturePath} alt="OCXO pict" />
            </div>
            <div className="speciication-model__package">
              <span>Packaging</span>
              <p>{props.selectedModel.packaging}</p> 
            </div>
          </div>
          <div className="speciication-model__right-side">
            <h5>{props.selectedModel.frequencyRange}</h5>

            {extractFeatures(props.features)}


          </div>
        </div>
      </div>
      )
  }


export default SpecificationBannerStep1