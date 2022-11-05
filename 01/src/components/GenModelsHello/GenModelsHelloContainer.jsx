// ==== gen_modelsShowContainer.jsx ====
import React from "react";
import GenModelsHello from "./GenModelsHello";
import { filterFrequencyTypeTC,
  filterInitTC,
  filterTemperatureRangeTC } from "../../redux/reducer-gen_models";
import { connect } from "react-redux";
//import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class GenModelsHelloContainer extends React.Component {
  componentDidMount() {
    //console.log ('DialogsContainer props: ' + this.props.dialogPages.dialogs[0].name)
    //console.log(this.props)
    this.props.filterInitTC() // Initialise Frequency Type, Temperature Range
  
  }
  render() {
    //debugger
    return (
      <div>
        <GenModelsHello {...this.props} 
        /* frequencyTypeCreator = {this.propsfrequencyTypeCreator} */
        />
      </div>
    );
  }
}

// Let's make 2 wrap connect
/* const authDialogsContainerBurger = withAuthRedirect(DialogsContainer)
const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
const authDialogsContainer = connect(mapStateToPropsForRedirect)(authDialogsContainerBurger)

 */
//const authDialogsContainer = withAuthRedirect(DialogsContainer)

const mapStateToProps = (state) => {
  return {
    gen_models: state.gen_modelsReducer,
  };
};

const mapDispatchToProps = { 
  filterFrequencyTypeTC,
  filterInitTC,
  filterTemperatureRangeTC

}

//const ComplexDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authDialogsContainer);
const ComplexDialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
  //withAuthRedirect
)(GenModelsHelloContainer);

export default ComplexDialogsContainer;
