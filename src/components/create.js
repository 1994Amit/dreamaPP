import React, { Component } from "react";


export default class SignUp extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
           
            dreams: JSON.parse(localStorage.getItem('document'))
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
getdreams(){
    return this.state.dreams
   }
  
onAdd(firstname,Description){
    const dreams = this.getdreams();
    dreams.push({
    firstname,
    Description,
   
    })
    this.setState({dreams})

}

handleFormSubmit(e) {
    console.log(this.firstname.value);
    e.preventDefault()
    let dreams = this.getdreams();
    if(dreams == null){
        let dreamsa=[]
        dreamsa.push({
            firstname: this.firstname.value,
            description: this.description.value,
           
           })
           this.setState({dreams})
           localStorage.setItem('document',JSON.stringify(dreamsa));
    }   
    else{
        dreams.push({
            firstname: this.firstname.value,
            description: this.description.value,
            
           })
           this.setState({dreams})
           localStorage.setItem('document',JSON.stringify(this.state.dreams));
    }
    this.props.history.push('/dreams');

   
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
//     if (localStorage.getItem('document')) {
//         this.setState({
//             name: this.documentData.name,
//            lname: this.documentData.lname,
//            email: this.documentData.email,
//            password:this.documentData.password
//     })
// } else {
    this.setState({
        name: '',
            lname: '',
            email: '',
            password:'',
    })
//}
}
    
    render() {
        
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h3>What Did You Dream Last Night?</h3>
                <div className = "row">
                    <div className = "col-md-12">
                        <div className="form-group">
                            <label>FirstName</label>
                            <input type="text" className="form-control"  name="firstname" ref={firstname => this.firstname = firstname} placeholder="FirstName" value={this.state.firstname} onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-md-12">
                        <div className="form-group">
                            <label>Description</label>
                            <textarea type="textfield" className="form-control"  name="description" placeholder="Description"  ref={description => this.description = description} value={this.state.description} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>

               

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
        );
    }
}