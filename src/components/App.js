import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props)
    {
        super(props)
        this.calcRelationship = this.calcRelationship.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.processInp1 = this.processInp1.bind(this);
        this.processInp2 = this.processInp2.bind(this);
        this.matchString = this.matchString.bind(this);
        this.state={
            inp1:"",
            inp2:""
        }


    }

    matchString(str1, str2)
    {
	    let len1= str1.length;
	    let len2= str2.length;

        //console.log("len1:", len1)
        //console.log("len2:", len2)

       let astr1= [...str1];
       let astr2= [...str2];

 	    for (let i=0; i<astr1.length; i++ )
 	    {
            


		    let found=false;
		    for(let j=0; j<astr2.length; j++)
		    {
                //console.log("str2 charAt:", j, "=" , str2.charAt(j))

  
			    if(astr1[i] ==astr2[j] && !found)
			    {

				    len1=len1-1;
				    len2=len2-1;

				    found=true;
                    //console.log("astr2:", astr2);
                    //console.log("removing char at:", j);

                    astr2.splice(j,1);
                    //console.log("astr2:", astr2); 

				    break;
			    }
  
		    }
	    }

        //console.log("len1:", len1)
        //console.log("len2:", len2)

	    switch((len1+len2)%6)
	    {
		    case 0: return "Siblings";

     		case 1:  return "Friends";
      
     		case 2: return "Love";
      
		    case 3: return "Affection";
			
		    case 4: return "Marriage";
		
		    case 5: return "Enemy";
		
		   
	    }

    }
    
    calcRelationship(){
        let xelement =document.getElementById("answer");

        if(this.state.inp1.trim().length==0 || this.state.inp2.trim().length==0)
        {
            xelement.innerText='Please Enter valid input';
            return;
        }


        xelement.innerText=this.matchString(this.state.inp1,this.state.inp2);

    }

    clearFields(){
        //console.log("clearFields");
        this.setState({
            inp1:""
          });

          this.setState({
            inp2:""
          });


    }

    processInp1(event)
    {
        //console.log("Inp1:",event.target.value )

        this.setState({
            inp1:event.target.value 
          });


    }

    processInp2(event)
    {
        //console.log("Inp1:",event.target.value )

        this.setState({
            inp2:event.target.value 
          });

    }


    render() {

        //console.log("inp1:", this.state.inp1);
        //console.log("inp2:", this.state.inp2);

        return(
            <div id="main">
               <input type="text" data-testid="input1" id="input1" value={this.state.inp1} onChange={this.processInp1}/>
               <input type="text" data-testid="input2" id="input2"  value={this.state.inp2} onChange={this.processInp2} />
               <br/>

               <button data-testid="calculate_relationship" onClick={this.calcRelationship} >Calculate Relationship </button>
               <button data-testid="clear" onClick={this.clearFields} >Clear Inputs </button>
               <h3 data-testid="answer" id="answer"> </h3>


            </div>
        )
    }
}


export default App;
