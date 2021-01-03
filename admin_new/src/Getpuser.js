import React, { Component } from "react";
 
class getpuserform extends Component {
  render() {
    return (
      <div>

      
                          <div class="container">
                          <form action="/#">
                            
                            <div class="row">
                              <div class="col-25">
                                <label for="fname">User Id</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="_id" name="_id" placeholder="mandatory"></input>
                              </div>
                              </div>

                              <div>
                            <div class="row">
                              <input type="submit" value="Execute"></input>
                            </div>
                            </div>

                              </form>
                              </div>
      
    </div>
    
    );
  }
}
 
export default getpuserform;