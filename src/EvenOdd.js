import{ useState } from "react";

function EvenOdd()
{
	const [num,setNum]=useState("");
	const [msg,setMsg]=useState("");
	const hNum=(event)=>{setNum(event.target.value);}
	
	const find=(event)=>{
	event.preventDefault();
	let n=parseInt(num);
	let r=n%2===0?"even":"odd";
	setMsg(r);
	}

	return(
	<>
	<center>
		<h1>Even Odd App </h1>
		<form onSubmit={find}>
		<input type="number" placeholder="enter integer" onChange={hNum}/>
		<br/><br/>
		<input type="submit" value="Find Even/Odd"/>

		</form> 
		<h2>{msg}</h2>
	</center>
	</>
	);
}

export default EvenOdd;