import React, { Component } from "react";
 
  // function userdataFill() {
  
  //   const myForm=document.getElementById("myForm");
  // myForm.addEventListener('submit',function(e){
  //   e.preventDefault();
  
  //   const formData=new formData(this);
  //   fetch('',{
  //   body : formData
  
  //   }).then(function(response){
  //     return response.text();
  
  //   }).then(function(text){
  //     console.log(text);
  
  //   } ).catch(function(error){
  //     console.error(error);
  //   }
  //   )
  
  // } );
    
  // }
  
   

class userdataform extends Component {
  render() {
    return ( 
      <div>

      
                          <div class="container">
                          <form action="http://dev.syncore.com:8099/apidocs/#/admin/post_admin_resource" id="myForm">
                            
                            <div class="row">
                              <div class="col-25">
                                <label for="fname">First Name</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="first_name" name="firstname" placeholder="mandatory"></input>
                              </div>
                              </div>
                              
                              
                            <div class="row">
                              <div class="col-25">
                                <label for="lname">Last Name</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="last_name" name="lastname" placeholder="mandatory"></input>
                              </div>
                              
                              
                              
                                </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="lname">User Email</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="user_email" name="useremail" placeholder="mandatory"></input>
                              </div>
                              
                                </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="lname">Company Name</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="company_name" name="companyname" placeholder="mandatory"></input>
                              </div>
                              
                                </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="lname">Password</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="Password" name="Password" placeholder="mandatory"></input>
                              </div>
                              
                              
                            </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="Active">Active</label>
                              </div>
                              <div class="col-75">
                                <select id="Active" name="Active ">
                                  <option value="True">Active</option>
                                  <option value="False">False</option>
                                </select>
                              </div>
                            </div>
                          
                          <div>
                            <div class="row">
                              <div class="col-25">
                                <label for="Agree">Agree</label>
                              </div>
                              <div class="col-75">
                                <select id="Active" name="Active ">
                                  <option value="True">Agree</option>
                                  <option value="False">Not Agree</option>
                                </select>
                              </div>
                            </div>
                            </div>
                          
                          
                          
                            <div>
                            <div class="row">
                              <input type="submit" value="Submit"></input>
                            </div>
                            </div>
                          </form>
                          </div>
                         
                         
                  



    </div>

    
    );
  }
}


  





export default userdataform;

