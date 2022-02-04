// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
	firstName: "Binh",
	lastName: "Truong Vu",
	incomes: [150, 50, 250],
	expenses: [10, 15],
	totalIncome() {
		let sum = 0;
		this.incomes.forEach((it) => (sum += parseInt(it)));
		return sum;
	},
	totalExpense() {
		let sum = 0;
		this.expenses.forEach((it) => (sum += parseInt(it)));
		return sum;
	},
	accountInfo() {
		console.log(`
			First name: ${this.firstName}
			Last name: ${this.lastName}
			Total incomes: ${this.totalIncome()}
			Total expenses: ${this.totalExpense()}
		`);
	},
};
