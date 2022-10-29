const table = document.getElementById("stdntTable");

let count = 0;

const checkedRows = table.getElementsByTagName("input");
loadPage();


//this function is called as soon as the browser is loaded
function loadPage() {
    var count = 0;
    let submitBtn = document.getElementById("button");
    for (var i = 0; i < checkedRows.length; i++) {
        var row = checkedRows[i].parentNode.parentNode;

        if (!checkedRows[i].checked) {
            count++;
            row.querySelectorAll("td")[8].classList.add("columnHide");
            row.querySelectorAll("td")[9].classList.add("columnHide");
        }

        if (checkedRows.length === count) {

            submitBtn.style.backgroundColor = "gray";
            submitBtn.style.border = "";
            submitBtn.style.cursor = "initial";
            submitBtn.disabled = true;
            document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
            document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
        }
    }
}


selectRow();

let boolean = true;

let check = true;  

//this method is called to show the hidden coulumns and buttons when checkbox is checked
function selectRow() {
    for (let i = 0; i < checkedRows.length; i++) {
        const row = checkedRows[i].parentNode.parentNode;

        checkedRows[i].addEventListener("click", () => {
            if (checkedRows[i].checked) {
                count++;
                row.style.backgroundColor = "yellow";
                row.lastElementChild.innerHTML = "<td><button onClick='editRow(this)'>Edit</button></td>";
                row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete</button></td>";
                document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("columnHide");
                document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("columnHide");
                row.querySelectorAll("td")[8].classList.remove("columnHide");
                row.querySelectorAll("td")[9].classList.remove("columnHide");
            } else {
                count--;
                row.style.backgroundColor = "white";
                row.lastElementChild.innerHTML = "";
                row.lastElementChild.previousElementSibling.innerHTML = "";
                document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
                document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
                row.querySelectorAll("td")[8].classList.add("columnHide");
                row.querySelectorAll("td")[9].classList.add("columnHide");
            }
        })
    }
}

//this function is called to display the dropdown area
function expandedRow(r) {
    const i = r.parentNode.parentNode.rowIndex;
    const row = r.parentNode.parentNode;
    const descRow = row.nextSibling;
    if (check) {
        descRow.style.display = "table-row";
        check = false;
    } else {
        descRow.style.display = "none";
        check = true;
    }
}

//this function is called to display changes when checkbox is checked
function showRow(r) {
    const row = r.parentNode.parentNode;
    const descRow = row.nextSibling.nextSibling;
    if (boolean) {
        descRow.style.display = "table-row";
        boolean = false;
    } else {
        descRow.style.display = "none";
        boolean = true;
    }
}

//this function is called to delete the selected row
function deleteRow(row) {
    const i = row.parentNode.parentNode.rowIndex;
    document.getElementById("stdntTable").deleteRow(i);
    document.getElementById("stdntTable").deleteRow(i);
    alert(`Deleted Student Row Successfully`);
    loadPage();
   
}

function editRow(row) {
    prompt("Edit the details");
    selectRow();
}

//this method is called to add rows dynamically to the table
function addRow() {
    const row = table.insertRow(table.rows.length);

    const rowCount = table.rows.length;
    const checkboxNew = row.insertCell(0);
    const student = row.insertCell(1);
    const advisor = row.insertCell(2);
    const awardStatus = row.insertCell(3);
    const semester = row.insertCell(4);
    const type = row.insertCell(5);
    const budget = row.insertCell(6);
    const percentage = row.insertCell(7);
    const deleteBtn = row.insertCell(8);
    const editBtn = row.insertCell(9);

    checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="expandedRow(this)" src="/images/down.png" width="25px" /></td>`;

    student.innerHTML = `Student ${Math.ceil(rowCount / 2)}`;
    advisor.innerHTML = `Teacher ${Math.ceil(rowCount / 2)}`;
    awardStatus.innerHTML = "Approved";
    semester.innerHTML = "Fall";
    type.innerHTML = " TA ";
    budget.innerHTML = Math.ceil(Math.random() * 10000);
    percentage.innerHTML = "100%";

    try {
        setTimeout(() => { alert(`Next Student Added ${Math.ceil(rowCount / 2)}`) }, 100);
    } catch (error) {
        alert("Something went wrong!");
    }

    selectRow();

    expandedRowAdd();
    loadPage();
}



window.addEventListener("click", () => {

    let submitBtn = document.getElementById("button");

    if (count > 0) {
        submitBtn.style.backgroundColor = "orange";
        submitBtn.style.border = "2px solid orange";
        submitBtn.style.cursor = "pointer";
        submitBtn.disabled = false;
    } else {
        submitBtn.style.backgroundColor = "gray";
        submitBtn.style.border = "";
        submitBtn.style.cursor = "initial";
        submitBtn.disabled = true;
    }
}
)

//this method is called to display the dropdown area
function expandedRowAdd() {
    const row = table.insertRow(table.rows.length);

    row.classList.add("dropDownTextArea")

    row.innerHTML =
        '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

    loadPage();
    selectRow();
}

