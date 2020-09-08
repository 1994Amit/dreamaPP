import React from "react";

export default class dreamsdetails extends React.Component {
 state = {
    loading: true,
    person: null,
    showMessage: false,
    dreams: JSON.parse(localStorage.getItem('document')),
    id: this.props.match.params.id,
    dreams_display: {}
  };


  async componentDidMount() {
    this.setState({
      dreams_display: this.state.dreams[this.state.id],
      loading: false
    })
  }

  
  showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  deletedreams(){
    let dreamsa = this.state.dreams;
    dreamsa.splice(this.state.id, 1);

    localStorage.setItem('document',JSON.stringify(dreamsa))
    this.props.history.push('/dreams');
    }

    backdreams(){

      this.props.history.push('/dreams');
      }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

   
 return (
   
      <form onSubmit={this.handleFormSubmit}>
      <h3>OHH ....{this.state.dreams_display.firstname} Last Night Dreamzzz</h3>
      <div className = "row">
          <div className = "col-md-12">
              <div className="form-group">
                  <label>FirstPerson</label>
                  <input  disabled   type="text" className="form-control"  name="Firstname" placeholder={this.state.dreams_display.firstname} readOnly/>
                  
              </div>
          </div>
      </div>

      <div className = "row">
          <div className = "col-md-12">
              <div className="form-group">
                  <label>Description</label>
                  <textarea  disabled type="textfield" className="form-control"  name="description" placeholder= {this.state.dreams_display.description}/>
              </div>
          </div>
      </div>

      
          
   
      <div className = "row">
      <div className = "col-md-6">
      <button onClick={this.deletedreams.bind(this)} className="btn btn-primary btn-block">delete</button></div>
      <div className = "col-md-6">
       <button onClick={this.backdreams.bind(this)} className="btn btn-primary btn-block">back</button></div>
  </div></form>
    );
  }
}