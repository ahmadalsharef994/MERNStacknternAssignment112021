import styled from "styled-components";
import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import Popup from 'reactjs-popup';

import { Table } from "react-bootstrap";


const Container = styled.div`
width: fit-content;
block-size: fit-content;
height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;
  padding-left: 33%;
  margin-bottom: 50px;
`;


const DeleteButton = styled.button`
background: #e62143;
  border-radius: 11px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: Mija,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  text-shadow: rgba(0, 0, 0, .3) 1px 1px 1px;
  text-underline-offset: 1px;
  transition: all .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  word-break: break-word;
`;
const InsertButton = styled.button`
margin: 30px;
background-color: #36A9AE;
  background-image: linear-gradient(#37ADB2, #329CA0);
  border: 1px solid #2A8387;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #FFFFFF;
  cursor: pointer;
  display: block;
  font-family: -apple-system,".SFNSDisplay-Regular","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 19px;
  line-height: 100%;
  outline: 0;
  padding: 11px 15px 12px;
  text-align: center;
  transition: box-shadow .05s ease-in-out,opacity .05s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;




function University() {

  const [universities, setUniversities] = useState([]);

  useEffect(() => {
  const fetchUniversities = async () =>{
    const response = await fetch("https://whispering-fjord-47147.herokuapp.com/getUniversities");
    const data = await response.json()
    setUniversities(data);
  
  }
  fetchUniversities();
  }, [])

  // const [alpha, setAlpha] = useState("")
  // const [country, setCountry] = useState("")
  // const [domain, setDomain] = useState("")
  // const [name, setName] = useState("")
  // const [page, setPage] = useState("")

  // function onChangeAlpha(e){setAlpha(e)};
  // function onChangeContry(e){setCountry(e)};
  // function onChangeDomain(e){setDomain(e)};
  // function onChangeName(e){setName(e)};
  // function onChangePage(e){setPage(e)};

  const  handleSubmit = async (e) => {
    e.preventDefault();
      console.log(e.target[0].value)
      await axios.post('https://whispering-fjord-47147.herokuapp.com/create',
        JSON.stringify({
          "alpha_two_code": e.target[0].value,
          "country": e.target[1].value,
          "domain": e.target[2].value,
          "name": e.target[3].value,
          "web_page":e.target[4].value
      }),{
      headers: { 'Content-Type': 'application/json'}
    });
    alert("Created")
  }
  


return (
<Container>
  <Table striped hover>
  <thead>
    <tr>
      <th>Alpha_two_Code</th>
      <th>Country</th>
      <th>Domain</th>
      <th>Name</th>
      <th>Web Page</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
    universities.map((univ)=>{
      return(
          <tr key={univ._id}>
          <td>{univ.alpha_two_code} </td>
          <td>{univ.country}</td>
          <td>{univ.domain}</td>
          <td>{univ.name}</td>
          <td>{univ.web_page}</td>
          <td><DeleteButton onClick={async ()=>{
            await axios.delete("https://whispering-fjord-47147.herokuapp.com/delete/"+univ._id)
            alert("deleted")
            }}>Delete</DeleteButton></td>
        </tr>
        )
    })
    }
  </tbody>
</Table>

<div >

<Popup trigger={<InsertButton>Insert University</InsertButton>} position="bottom center" >
    <form style={{
        fontFamily: '-apple-system',
        fontSize: "1.6rem",
        color: "#292b2c",
        backgroundColor: "#fff",
        padding: "10px 10px",
        margin: "10px 10px",
        justifContent: "space-between",
        width: "100%"
        
      }}  onSubmit={e=>{handleSubmit(e)}}> 

  <label style={{margin: '15px'}}>
  alpha_two_code: <input type="text"/>
  </label>
  <label style={{margin: '15px'}}>
  country: <input type="text"  />
  </label>
  <label style={{margin: '15px'}}>
  domain: <input type="text"  />
  </label>
  <label style={{margin: '15px'}}>
  name: <input type="text"  />
  </label>
  <label>
  web_page: <input type="text"  />
  </label>

  <input type="submit" value="Submit" style={{
     backgroundColor: 'rgb(84, 105, 212)',
     boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px,                  rgba(0, 0, 0, 0) 0px 0px 0px 0px,   rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,  rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,  rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px',
     color: '#fff',
     fontWeight: '700',
     cursor: 'pointer',
     marginLeft: "10px",
     fontSize:"1.2rem"
  }}/>

  
  {/* <Button onClick={async ()=> {
    await axios.post('http://localhost:3001/create',
      JSON.stringify({
        "alpha_two_code": alpha,
        "country": country,
        "domain": domain,
        "name": name,
        "web_page": page
    }),{
    headers: {
      'Content-Type': 'application/json'
    }}
    );
  }}>Add</Button> */}
</form>
  </Popup>
  </div>

        </Container>
    )
}

export default University
