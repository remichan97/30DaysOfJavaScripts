// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount() {
	let firstname = "Binh";
	let lastName = "Truong Vu";
	let incomes = [
		{
			names: "work",
			income: 150,
		},
	];
	let expenses = [
		{
			names: "food",
			expense: 15,
		},
	];
	function totalIncome() {
		let sum = 0;
		incomes.forEach((it) => (sum += parseInt(it.income)));
		return sum;
	}
	function totalExpense() {
		let sum = 0;
		expenses.forEach((it) => (sum += parseInt(it.expense)));
		return sum;
	}
	function addIncome(names, income) {
		incomes.push({ names: names, income: income });
	}
	function addExpense(names, expense) {
		incomes.push({ names: names, expense: expense });
	}
	return {
		totalIncome: totalIncome(),
		totalExpense: totalExpense(),
		addIncome: addIncome("bonus", 50),
		addExpense: addExpense("bills", 75),
	};
}
