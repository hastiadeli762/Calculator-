let myInput = document.getElementById("myInput");

function insertClick(val){

    myInput.value +=val;

}
function calculate(){
    let data = myInput.value ;

    let newData= eval(data);

    myInput.value= newData;

}

function deletingEverything(){

      myInput.value= " ";

}