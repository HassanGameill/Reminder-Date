import {  Container } from "react-bootstrap";
import personData from "./person-data";
import DatesCount from "./Components/DatesCount";
import DatesList from "./Components/DatesList";
import DatesAction from "./Components/DatesAction";
import { useState } from "react";






function App() {

  const person = personData;
  const [personInfo, setPersonInfo] = useState(person);


  const onDelete = () => {
    setPersonInfo([]);
  }


  const showData = () => {
    setPersonInfo(person);
  }
  





  return (
    <div className="font color-body">
      

      <Container className="py-5">

        <DatesCount person={personInfo}/>
        
        <DatesList person={personInfo}/>

        <DatesAction deleteData={onDelete} onShowData={showData}/>

      </Container>
      
    </div>
  );
}

export default App;
