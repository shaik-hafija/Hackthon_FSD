interface manageExpense
{
amount:number,
category:string,
edate:Date,
}

class Expense
{
    details:manageExpense[]
    amountInputHtml:HTMLInputElement
    catInputHtml:HTMLInputElement
    dateInputHtml:HTMLInputElement
    Display:HTMLElement
    tableBody: HTMLElement;

    constructor()
    {
        this.details=[]

        this.amountInputHtml=document.getElementById("amountInput") as HTMLInputElement
        this.catInputHtml=document.getElementById("catInput") as HTMLInputElement
        this.dateInputHtml=document.getElementById("dateInput") as HTMLInputElement
        this.tableBody = document.getElementById("expenseTableBody") as HTMLElement;

        this.Display=document.getElementById("display") as HTMLElement


    }
    addDetails(detail:manageExpense)
    {
        this.details.push(detail)
        console.log(this.details)
        this.details.forEach((detail) => {
            console.log(`Amount: ${detail.amount}, Category: ${detail.category},Date:${detail.edate}`)
        })
        this.renderTable()
    }
    deleteDetails(index: number) {
        this.details.splice(index, 1);
        this.renderTable();
    }
    // editDetails(index: number) {
    //     const amount = parseFloat(this.amountInputHtml.value);
    //     const category = this.catInputHtml.value;
    //     const edate = new Date(this.dateInputHtml.value);
    //     this.details[index] = { amount, category, edate };
    //     this.renderTable();
    // }
    getTotal() {
        if (!Array.isArray(this.details)) {
          throw new Error('details should be an array');
        }
    
        const total = this.details.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.amount;
        }, 0);
    
        return total;
      }
    renderTable() {
        this.tableBody.innerHTML = ''; 
        this.details.forEach((detail, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${detail.amount}</td>
                <td>${detail.category}</td>
                <td>${(detail.edate)}</td>
                <td>
                    <button onclick="editExpense(${index})" style="width:130px";background-color:"#f2f2f2">Edit</button>
                    <button onclick="deleteExpense(${index})" style="width:130px";background-color:"#f2f2f2">Delete</button>
                </td>
            `;
            this.tableBody.appendChild(row);
        });
        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `
          <td colspan="3">Total</td>
          <td>${this.getTotal()}</td>
        `;
        this.tableBody.appendChild(totalRow);
    }
}

const ex=new Expense()



