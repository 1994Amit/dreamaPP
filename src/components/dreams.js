import React, { Component } from "react";


import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol } from 'mdbreact';
export default class Display extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            
            
           
    }
}


  
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));
     
      
    }

    gotodreams(index){
      this.props.history.push('/dreams/' + index)
    }

   

    render() {
      let dreams = JSON.parse(localStorage.getItem('document'))
      let displayer = '';
      if(dreams !== null && dreams !== []){
        displayer = dreams.map((values, index) => {
          return(
            <div>

          <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardBody>
                    <MDBCardTitle>{values.firstname}</MDBCardTitle>
                    <div className="row">
                      
                      
                    </div>
                    <a href={"/dreams/" + index} className="stretched-link"></a>
                    {/* <MDBBtn onClick={this.gotodreams.bind(this,index)}>View dreams</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
                  </div> 
          )
          
        })
      }
        return (displayer);
    }
}