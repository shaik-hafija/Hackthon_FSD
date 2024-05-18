var Expense = /** @class */ (function () {
    function Expense() {
        this.details = [];
        this.amountInputHtml = document.getElementById("amountInput");
        this.catInputHtml = document.getElementById("catInput");
        this.dateInputHtml = document.getElementById("dateInput");
        this.tableBody = document.getElementById("expenseTableBody");
        this.Display = document.getElementById("display");
    }
    Expense.prototype.addDetails = function (detail) {
        this.details.push(detail);
        console.log(this.details);
        this.details.forEach(function (detail) {
            console.log("Amount: ".concat(detail.amount, ", Category: ").concat(detail.category, ",Date:").concat(detail.edate));
        });
        this.renderTable();
    };
    Expense.prototype.deleteDetails = function (index) {
        this.details.splice(index, 1);
        this.renderTable();
    };
    // editDetails(index: number) {
    //     const amount = parseFloat(this.amountInputHtml.value);
    //     const category = this.catInputHtml.value;
    //     const edate = new Date(this.dateInputHtml.value);
    //     this.details[index] = { amount, category, edate };
    //     this.renderTable();
    // }
    Expense.prototype.getTotal = function () {
        if (!Array.isArray(this.details)) {
            throw new Error('details should be an array');
        }
        var total = this.details.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.amount;
        }, 0);
        return total;
    };
    Expense.prototype.renderTable = function () {
        var _this = this;
        this.tableBody.innerHTML = '';
        this.details.forEach(function (detail, index) {
            var row = document.createElement('tr');
            row.innerHTML = "\n                <td>".concat(detail.amount, "</td>\n                <td>").concat(detail.category, "</td>\n                <td>").concat((detail.edate), "</td>\n                <td>\n                    <button onclick=\"editExpense(").concat(index, ")\" style=\"width:130px\";background-color:\"#f2f2f2\">Edit</button>\n                    <button onclick=\"deleteExpense(").concat(index, ")\" style=\"width:130px\";background-color:\"#f2f2f2\">Delete</button>\n                </td>\n            ");
            _this.tableBody.appendChild(row);
        });
        var totalRow = document.createElement('tr');
        totalRow.innerHTML = "\n          <td colspan=\"3\">Total</td>\n          <td>".concat(this.getTotal(), "</td>\n        ");
        this.tableBody.appendChild(totalRow);
    };
    return Expense;
}());
var ex = new Expense();
