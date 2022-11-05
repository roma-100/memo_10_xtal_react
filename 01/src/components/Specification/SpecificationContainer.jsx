//***********  SpecificationContainer.jsx ****** */
//http://localhost:3000/specification
import React from "react";

import { connect } from 'react-redux'
import {compose} from 'redux'
import {specFormInputStep1,
  specFormInputStep2,
  setStabilituVsTemperature,
  initFrequencyBlurAC,
  specFormInitObjectsStep2TC
  } from '../../redux/reducer-spec-form'

//import SpecificationBannerStep1 from "./SpecificationBannerStep1"
import SpecificationStep1 from './SpecificationStep1';
import {
    Navigate, // == redirect
    useLocation,
    useNavigate,
    useParams,
    useMatch,
  } from "react-router-dom";

class SpecificationContainer extends React.Component {
  state = {
    modelId: this.props.router.params.generatorId,
    temperatureRangeSelected: this.props.stGenModels.filterTemperatureRange,
    stepsLevel: this.props.stepsLevel
  }

  componentDidMount() {

    //Getting selected model
    const selectedModel = this.props.stGenModels.models
    .filter((value, index) => {
      //console.log(JSON.stringify(value.id, null, 2))
      return value.id === this.props.router.params.generatorId
      //return value.id === "5"
    })[0];
/* Object { id: "2", name: "XBO8S", frequencyRange: "8-150 Fundamental", frequencyMin: "8", frequencyMax:  */

    // Get array StabilityVsTemperature
    const selectedModelStabilityVsTemperature = this.props.stGenModels.temperatureRange
    .filter((value, index) => {
      //console.log(JSON.stringify(value.id, null, 2))
      return value.range === this.props.stGenModels.filterTemperatureRange
    })[0] .modelsStability
    .filter((value, index)=> {
      return value.modelId === this.props.router.params.generatorId
    })[0].stabilityVsTemperature
/*         stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[5, 10, 20],
        } */
/* window.bb = selectedModel */

    //test previous step and change state Step = 0
    if (this.props.stGenModels.filterTemperatureRange) {
      this.props.specFormInputStep1 (
        {inputValueStep1: {
          "id": this.props.router.params.generatorId,
          "temperatureRangeSelected": this.props.stGenModels.filterTemperatureRange
        },
        stabilityVsTemperature: selectedModelStabilityVsTemperature
      },
        selectedModel
      )

    }
    
    window.bb = this.props.specFormInitObjectsStep2TC(5)

    console.log ('SpecificationContainer did mount')

/*     console.log ('filterFrequencyType: ' + this.props.stGenModels.filterFrequencyType)
    console.log ('filterTemperatureRange: ' + this.props.stGenModels.filterTemperatureRange)
    console.log ('generatorId: ' + this.props.router.params.generatorId) //Receive from Router <Link to={`/specification/${props.genModelId}`}>Specification</Link>

    */
    //get data from store
    //debugger

    //Update selected data Step1 if filterTemperatureRange passed

    //debugger
  }

  render() {
    console.log('hello1: ' 
    + "../../assets/img/types200/"+
    this.props.stSpecForm.selectedModel.pictureTag +
    "_200px.png")
    //window.bb = this.props.stSpecForm.selectedModel.pictureTag
    //debugger
    return (
      <div>
        
      {/* <Banner /> */}

        <SpecificationStep1
        specFormInputStep2 = {this.props.specFormInputStep2}
        picturePath = {"../../pimages/types200/"+
        this.props.stSpecForm.selectedModel.pictureTag +
        "_200px.png"}
        selectedModel = {this.props.stSpecForm.selectedModel}
        stabilityVsTemperature = {this.props.stSpecForm.stabilityVsTemperature}
        setStabilituVsTemperature = {this.props.setStabilituVsTemperature}

            />
        <StateSpecFormShow 
        stSpecForm = {this.props.stSpecForm}
        />    
    </div>      
    );
  }
}

const mapStateToProps = (state) => {
    return {
      stGenModels: state.gen_modelsReducer,
      stSpecForm: state.specFormReducer
    };
  };
  
  const mapDispatchToProps = { 
    specFormInputStep1,
    specFormInputStep2,
    setStabilituVsTemperature,
    specFormInitObjectsStep2TC,
    initFrequencyBlurAC
/*     filterFrequencyTypeTC,
    filterInitTC,
    filterTemperatureRangeTC */
  
  }

/* 
const ComplexDialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer) */

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      let match = useMatch("/profile/25714");
      return (
        <Component {...props} router={{ location, navigate, params, match }} />
      );
    }
  
    return ComponentWithRouterProp;
  }

  const ComplexSpecificationContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter //, withAuthRedirect
  )(SpecificationContainer);

  const StateSpecFormShow = (props) => {
    return (
        <>
        <h1>Hello  JSON Show!</h1>
        <div><pre>{JSON.stringify(props, null, 2) }</pre></div>;
        </>
    )
}

export default ComplexSpecificationContainer