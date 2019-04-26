import React, { Component } from 'react'

// ------------- Redux --------------
import {connect} from 'react-redux'
// ----------------------------------

import { fetchRepos, emptyRepos } from '../../../redux/actions/indexActions';

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

  //------------------ Function -------------------
  onBackToSearch(){
    //set to the empty object to be able to auto re-render for searching
    this.props.emptyRepos();
  }

  //-----------------------------------------------


  render() {
    const {fetchData , loading} = this.props.index

    let renderContent;
    let dataFetched;

    if(loading){
      renderContent = (
        <div className="progress justify-content-center">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}></div>
        </div>
      )
    }else{
      if (Object.keys(fetchData).length > 0) {
        //was fetched
        dataFetched = fetchData.map((repos, key) => (
          <div key={key} className="col-xs-12 col-sm-4">
            <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header">Repository</div>
              <div className="card-body text-info">
                <h5 className="card-title">{repos.name}</h5>
                <p className="card-text">{repos.description}</p>
              </div>
            </div>
          </div>
        ))

        renderContent = (
          <div>
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">successfully fetched the repos!</h4>
              <p>This is the list of the reposity of {this.state.githubUsername}</p>
              <hr/>
                <p className="mb-0">
                If you want to go and looking for another people's repos <button onClick={this.onBackToSearch.bind(this)} type="button" className="btn btn-info">CLICK HERE!</button>
                  </p>
            </div>
            <div className="row">
              {dataFetched}
            </div>
            </div>
        )

      } else {
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

export default connect(mapStateToPros ,{fetchRepos,emptyRepos})(Landing)
