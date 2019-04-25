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
    return (
      <OverallView>
        <div className="container">

          <div className="alert alert-primary text-center" role="alert">
            Please enter the name of the GITHUB-USER
          </div>

          <form noValidate className="form-inline justify-content-center" onSubmit={this.onSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <input type="text" className="form-control" id="ghInput" placeholder="Github username" name="githubUsername" onChange={this.onChange} value={this.state.githubUsername}/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">GO!</button>
          </form>

        </div>
      </OverallView>
    )
  }
}

const mapStateToPros = state => ({
  index: state.index
})

export default connect(mapStateToPros ,{fetchRepos})(Landing)
