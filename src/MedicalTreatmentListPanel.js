import React, {useState} from 'react';

function MedicalTreatmentListPanel(){

  const [treatmentId, setTreatmentId] = useState("");
  const [treatmentCourseId, setTreatmentCourseId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [display, setDisplay] = useState();

  const handleTreatChange = e => setTreatmentId(e.target.value);
  const handleTreatCourseChange = e => setTreatmentCourseId(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleTypeChange = e => setType(e.target.value);
  const handleCategoryChange = e => setCategory(e.target.value);
  const handleStartDateChange = e => setStartDate(e.target.value);
  const handleDisplay = e => setDisplay("truth");
  

  function DisplayTreatment() {
    if (display){
      return(
        <div>
       <li> {treatmentId} </li> 
       <li> {treatmentCourseId}</li> 
       <li> {name}</li> 
       <li> {type} </li> 
       <li>  {category}</li> 
       <li>  {startDate} </li> 
       </div> 
      )

    }
    return null;
      
  }
  
  function removeData () {
    setTreatmentId('');
    setTreatmentCourseId('');
    setType('');
    setCategory('');
    setName('');
    setStartDate('');
    setDisplay();
  }
  

  return(

    <div>
      <input
placeHolder="Treatment ID"
name = "treatmentId"
value={treatmentId}
type="number"
onChange={handleTreatChange}  
      />
 <input
placeHolder="Treatment Course ID"
name = "treatmentCourseId"
value={treatmentCourseId}
type="number"
onChange={handleTreatCourseChange}  
      />
 <input
placeHolder="Full Name"
name = "Name"
value={name}
type="string"
onChange={handleNameChange}  
      />
 <input
placeHolder="Category"
name = "category"
value={category}
type="string"
onChange={handleCategoryChange}  
      />

<input
placeHolder="Type"
name = "type"
value={type}
type="string"
onChange={handleTypeChange}  
      />

<input
placeHolder="Start Date"
name = "startDate"
value={startDate}
type="Date"
onChange={handleStartDateChange}  
      />




<input
value="Remove Data"
name = "remove"
type="submit"
onClick={removeData}  
      />

<input
placeHolder="Display Data"
name = "display"
value={display}
type="submit"
onClick={handleDisplay}  
      />
<DisplayTreatment/>



    </div>

  )
 



  }

  export default MedicalTreatmentListPanel;