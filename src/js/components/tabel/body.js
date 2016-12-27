
import React from "react";


  

export default class Body extends React.Component {






render() {
	var Data = this.props.data;
  var self =this;
  console.log(self.props.allChecked)
    return (
      <tbody>
          {Data.map(function(Row, i) {
          	let amount = "";
          	if (Row.Amount2 == "") {
				amount = <td class="text-center"><strong>+ {Row.Amount1} EUR </strong> <span class="sort-order color-info fa fa-caret-up"></span></td>
									}
			else{
			  amount = <td class="text-center"><div><strong>- {Row.Amount1} EUR</strong> <span class="sort-order color-danger fa fa-caret-down"></span></div><div class="minus-amount">- {Row.Amount2} GBP</div> </td>
	            }
            return (
                    <tr key={Math.random()}>
                         <td><input type="checkbox" checked={self.props.allChecked}   data-id={Row.uid} /></td>
						 <td><strong>{Row.date}</strong></td>
						 <td>{Row.CounterpartyName}</td>
						 <td>{Row.PaymentType}</td>
						 {amount}
						 <td class="text-center"><i class="fa fa-paperclip"></i> 1</td>
                </tr>
            );
        })}
		</tbody>
    	  );
  }
};



 
