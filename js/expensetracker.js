const name1 = document.querySelector("#name")
const date = document.querySelector("#date")
const amount = document.querySelector("#amount")
const expenseList = document.querySelector("#expenseList")
const addExpense = document.querySelector("#addExpense")
const defaultExepense = document.querySelector("#defaultExpense")

function addToList (){
    let expenseRow = document.createElement("tr")
    let expenseName = document.createElement("td")
    let expenseDate = document.createElement("td")
    let expenseAmount = document.createElement("td")
    let deleteBtnCol = document.createElement("td")

    expenseName.innerHTML = name1.value
    expenseDate.innerHTML = date.value
    expenseAmount.innerHTML = "$" + amount.value
    if (name1.value ==="" || date.value ==="" || amount.value ==="") {
        alert("Please fill out the whole form!")
    }
    else{
        expenseList.appendChild(expenseRow)
        expenseRow.appendChild(expenseName)
        expenseRow.appendChild(expenseDate)
        expenseRow.appendChild(expenseAmount)
        defaultExepense.setAttribute("hidden", true)

        let deleteBtn = document.createElement("button")
        deleteBtn.type =  "button";
        deleteBtn.className = "btn btn-primary p-1";
        deleteBtn.innerHTML = "X";
        deleteBtn.onclick = deleteRow;
        
        
        deleteBtnCol.appendChild(deleteBtn)
        expenseRow.appendChild(deleteBtnCol)
 
        function deleteRow() { 
            this.parentNode.parentNode.remove();
            if (expenseList.rows.length === 1){
                defaultExepense.removeAttribute("hidden")
            }
        }

        name1.value = ""
        date.value = ""
        amount.value = ""
    }
}

addExpense.addEventListener("click", addToList)