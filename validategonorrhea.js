try{
function validategonorrhea(){
  let dateofreport = document.forms.gonorrhea.dateofreport.value;
  let nameofreport = document.forms.gonorrhea.nameofreport.value;
  let healthprovider = document.forms.gonorrhea.healthprovider.value;
  let contactofhealthprovider = document.forms.gonorrhea.contactofhealthprovider.value;
  let fullname = document.forms.gonorrhea.fullname.value;
  let dob = document.forms.gonorrhea.dob.value;
  let gender = document.forms.gonorrhea.gender.value;
  let ethnicity = document.forms.gonorrhea.ethnicity.value;
  let race = document.forms.gonorrhea.race.value;
  let gendersexpartner = document.forms.gonorrhea.gendersexpartner.value;
  let testresulttype = document.forms.gonorrhea.testresulttype.value;
  let rforexam = document.forms.gonorrhea.rforexam.value;
  let diagnosis = document.forms.gonorrhea.diagnosis.value;
  let sites = document.forms.gonorrhea.sites.value;


if(!dateofreport){
  document.getElementById('dateofreportErr').innerHTML ="Date is required";
  document.forms.gonorrhea.dateofreport.focus();
  return false;
}
if(!nameofreport){
  document.getElementById('nameofreportErr').innerHTML ="Name is required";
  document.forms.gonorrhea.nameofreport.focus();
  return false;
}
if(!healthprovider){
  document.getElementById('healthproviderErr').innerHTML ="Name is required";
  document.forms.gonorrhea.healthprovider.focus();
  return false;
}
if(!contactofhealthprovider){
  document.getElementById('contactofhealthproviderErr').innerHTML ="Contact is required";
  document.forms.gonorrhea.contactofhealthprovider.focus();
  return false;
}
if(!fullname){
  document.getElementById('fullnameErr').innerHTML ="Full name is required";
  document.forms.gonorrhea.fullname.focus();
  return false;
}
if(!dob){
  document.getElementById('dobErr').innerHTML ="DOB is required";
  document.forms.gonorrhea.dob.focus();
  return false;
}
if(!gender){
  document.getElementById('genderErr').innerHTML ="Gender is required";
  document.forms.gonorrhea.gender.focus();
  return false;
}
if(!ethnicity){
  document.getElementById('ethnicityErr').innerHTML ="Ethnicity is required";
  document.forms.gonorrhea.ethnicity.focus();
  return false;
}
if(!race){
  document.getElementById('raceErr').innerHTML ="Race is required";
  document.forms.gonorrhea.race.focus();
  return false;
}
if(!gendersexpartner){
  document.getElementById('gendersexpartnerErr').innerHTML ="This field is required";
  document.forms.gonorrhea.gendersexpartner.focus();
  return false;
}
if(!testresulttype){
  document.getElementById('testresulttypeErr').innerHTML ="Field is required";
  document.forms.gonorrhea.testresulttype.focus();
  return false;
}
if(!rforexam){
  document.getElementById('rforexamErr').innerHTML ="Ethnicity is required";
  document.forms.gonorrhea.rforexam.focus();
  return false;
}
if(!diagnosis){
  document.getElementById('diagnosisErr').innerHTML ="Race is required";
  document.forms.gonorrhea.diagnosis.focus();
  return false;
}
if(!sites){
  document.getElementById('sitesErr').innerHTML ="This field is required";
  document.forms.gonorrhea.sites.focus();
  return false;
}

function validatefullname(){
let namepattern = /^[A-Za-z\s]*$/;
let fullname = document.forms.gonorrhea.fullname.value;
if(fullname){
  let x=namepattern.test(fullname);
  if(x==false){
    document.getElementById('fullnameErr').innerHTML = "<br/>Contact can only contain letters";
    document.forms.gonorrhea.fullname.focus();
  }
else{
      document.getElementById('fullnameErr').innerHTML="";
      document.forms.gonorrhea.fullname.style.borderColor='green';
  }
}
}
}
}
catch(err){
  window.alert(err.message);
}
