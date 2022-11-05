import React from "react";
import GenModel from "./GenModel/GenModel";
import FilterFrequencyType from "./GenFilter/FlterFrequencyType"
import FilterTemperatureRange from "./GenFilter/FlterTemperatureRange"

/* https://mui.com/material-ui/react-radio-button/#api */

const GenModelsHello = (props) => {


const genModel = props.gen_models.models.map((x, index) => {
  return (
      
      <GenModel
      key={x.id}
      genModelId={x.id} 
      genModelTitle={x.name} 
      genModelFrequencyRange={x.frequencyRange}
      genModelPackaging={x.packaging} 
      genModelPicture={"./pimages/types200/" + x.pictureTag + "_200px.png"}
      genModelIsActive ={x.isActive}
      genModelTemperatureRange ={x.temperatureRangeSelected}
      genModelStabilityLimit ={x.stabilityLimit}
      />      
    );
  })
  /* const ModelsStabilityArray */
  return (
    <>
      <div className="gen-models-filter__wrap">
        <h2>Assistant</h2>
        <div className="gen-models-filter">
          <div className="gen-models-filter__title"><span>Frequency Type</span></div>
          <div className="gen-models-filter__source">
          <FilterFrequencyType filterFrequencyTypeTC={props.filterFrequencyTypeTC}/>
          </div>
        </div>
        <div className="gen-models-filter">
          <div className="gen-models-filter__title"><span>Temperature Range</span></div>
          <div className="gen-models-filter__source">
          <FilterTemperatureRange 
            filterTemperatureRangeTC={props.filterTemperatureRangeTC}
            temperatureRangeArray={props.gen_models.temperatureRangeArray}
      />
          </div>
        </div>


      {/* {temperatureRange()} */}
      </div>
      <div className="gen-models__wrap">
        <h2>OCXO Models</h2>
        <div className="gen-models">{genModel}</div>
      </div>

{/*       <div>
        {" "}
        <p>GenModelsHello Props:</p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div> */}
    </>
  );
};





export default GenModelsHello;
