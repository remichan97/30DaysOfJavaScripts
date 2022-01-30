// try-catch
try {
	let lastName = "Yetayeh";
	let fullName = fistName + " " + lastName;
} catch (err) {
	console.log(err);
}

// try-catch-finally
try {
	let lastName = "Yetayeh";
	let fullName = fistName + " " + lastName;
} catch (err) {
	console.error(err); // we can use console.log() or console.error()
} finally {
	console.log("In any case I will be executed");
}
