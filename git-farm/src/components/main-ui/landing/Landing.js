import React, { Component } from 'react'

// ------------- Redux --------------
import {connect} from 'react-redux'
// ----------------------------------

import { fetchRepos } from '../../../redux/actions/indexActions';

// ------------- Customization UI ------------
import styled from 'styled-components'
// -------------------------------------------


// ----------- Styling ------------
const OverallView = styled.div`
  padding-top: 5em;
`
// --------------------------------


class Landing extends Component {
  //eslint-disabled-nextline
  constructor(){
    super()
    this.state = {
      loaded: false,
      githubUsername: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    console.log(`[System] : redux work ? = ${this.props.index.isWork}`)
  }

  onChange(e){
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    const githubData = {
      name: this.state.githubUsername
    }

    this.props.fetchRepos(githubData);

  }

  render() {
    const {fetchData} = this.props.index

    let renderContent;
    let dataFetched;

    if (Object.keys(fetchData).length > 0) {
      //was fetched
      dataFetched = fetchData.map((repos, key) => (
        <div key={key} className="col-xs-12 col-sm-4">
          <div className="card border-info mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">Reposity</div>
            <div className="card-body text-info">
              <h5 className="card-title">{repos.name}</h5>
              <p className="card-text">{repos.description}</p>
            </div>
          </div>
        </div>
      ))

      renderContent = (
        <div className="row justify-content-center">
          {dataFetched}
        </div>
      )
      
    }else{
      renderContent = (
        <div>
          <div className="alert alert-primary text-center" role="alert">
            Please enter the name of the GITHUB-USER
          </div>

          <form noValidate className="form-inline justify-content-center" onSubmit={this.onSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <input type="text" className="form-control" id="ghInput" placeholder="Github username" name="githubUsername" onChange={this.onChange} value={this.state.githubUsername} />
            </div>
            <button type="submit" className="btn btn-primary mb-2">GO!</button>
          </form>
        </div>
      )
    }

    return (
      <OverallView>
        <div className="container">

          {renderContent}

        </div>
      </OverallView>
    )
  }
}

const mapStateToPros = state => ({
  index: state.index
})

export default connect(mapStateToPros ,{fetchRepos})(Landing)
