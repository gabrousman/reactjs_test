
import React from "react";


export default class Header extends React.Component {

	checkIt(){
		
      this.props.callback(!this.props.allChecked);
      return;
	}


  render() {
  	var self = this;
    return (
    	 <thead>
    	 <tr>
    	<th><input id="checkall" checked={self.props.allChecked} type="checkbox" onChange={(e)=>self.checkIt(e)}  /></th>
									<th>Date</th>
									<th>Counterparty Name</th>
									<th>Payment Type</th>
									<th class="text-center">Amount <span class="sort-order color-yellow fa fa-caret-down"></span></th>
									<th class="text-center"><i class="fa fa-paperclip"></i></th>
								</tr>
							</thead>

    	  );
  }
}