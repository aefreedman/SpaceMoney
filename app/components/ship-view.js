import React from 'react'
import ParameterList from './parameter-list'
import CrewList from './crew-list'
import PayloadList from './payload-list'
import ModuleList from './module-list'


class ShipView extends React.Component {

  constructor(props, context){
    super(props, context);
  }

  render() {
    return <div className="shipView">
        <h1>Ship <span className="much-smaller japanese">船</span> <span className="much-smaller">/</span> <span className="much-smaller russian">судно</span></h1>
        <div className="slim-container">
          <div className="row">
            {/* <div className="column"><ParameterList data={this.props.data.parameters} /></div> */}
            <div className="column"><CrewList data={this.props.data.crew} /></div>
            <div className="column"><PayloadList data={this.props.data.payload} /></div>
            <div className="column"><ModuleList data={this.props.data.modules} /></div>
          </div>
        </div>
      </div>
  }

}

export default ShipView;