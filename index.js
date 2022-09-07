/*
 * Utility Functions
 *
 */

function time() {
	return moment().format("h:mm:ss a");
}

function removeKey(key) {
	const field = document.getElementById(key + "-field");
	if (field) {
		field.value = "";
	}
	localStorage.removeItem(key);
}

function removeKeys(...keys) {
	keys.forEach((key) => {
		removeKey(key);
		const field = document.getElementById(key + "-field");
		if (field) {
			field.value = "";
		}
	});
}

function setKey(key, value) {
	localStorage.setItem(key, value);
	alert(`${key.toUpperCase()} : ${value} is stored in Local Storage`);
}

/* ---- Task 1 ---- */
console.log("Start:\t", time());
setTimeout(() => {
	console.log("Middle:\tI will be printed after 3.5 seconds", time());
}, 3500);
console.log("End:\t", time());

/* ---- Task 2 ---- */
const someNumber = prompt("Enter Sugar amount (in Grams)");
alert(
	`250 gm Sugar is Free for you.\nCurrent Sugar Amount: ${someNumber && !isNaN(someNumber) ? parseFloat(someNumber) + 250 : 250
	} gm`
);

/* ---- Practice Level: 1 ---- */

// 1.1: Clearing Local Storage
function clearLocalStorage() {
	localStorage.clear();
	console.log("Cleared Entire LocalStorage");

	//Initializing Counter
	//to avoid UI error
	initializeCounter(true);
}

// 1.2: Set a Local Storage Item
localStorage.setItem("name", "Sakib Khan");

// 1.3: Set a Local Storage Item by Clicking button. Show the Item in UI
function setAgeLocally(age) {
	localStorage.setItem("age", age);
	alert(`Age: ${localStorage.getItem("age")} is stored in Local Storage`);
}

// 1.4: Get the Local Storage Item by Clicking button. Show the Item in UI
function readLocal(key) {
	alert(
		`${key.toUpperCase()}: ${localStorage.getItem(key) ? localStorage.getItem(key) : "No Value"
		} is stored in Local Storage`
	);
}

// 1.5: Delete the Local Storage Item by Clicking button.
// Check in Utilities

// 1.6: Store an Object in Local Storage
function storeObj(obj) {
	const json = JSON.stringify(obj);
	localStorage.setItem("Legend", json);
}

function storeTheObj() {
	const theObj = {
		firstName: "Abraham",
		lastName: "Linkon",
	};

	storeObj(theObj);
	readLocal("Legend");
}

/* ---- Practice Level: 2 ---- */

//Setting initial value
//If counter value doesn't exist
//or Reset Signal is sent
function initializeCounter(reset = false) {
	if (!localStorage.getItem("counter") || reset) {
		localStorage.setItem("counter", "0");
	}

	document.getElementById("counter-value").innerText =
		localStorage.getItem("counter");
}

//Initializing counter when page loads
initializeCounter();

//Counter Update Functionality
function updateCounter(change) {
	const _counterValue = document.getElementById("counter-value");

	const storageValue = localStorage.getItem("counter");
	const newValue = parseInt(change) + parseInt(storageValue);

	localStorage.setItem("counter", newValue);
	_counterValue.innerText = newValue;
}

/* ---- Practice Level: 3 ---- */
function addInputToLocalStorage(key, id) {
	const field = document.getElementById(id);
	const value = field.value;
	//field.value = "";

	setKey(key, value);
}

/* ---- Practice Level: 4 ---- */
function setObj(objName, ...keys) {
	const theObj = keys.reduce((acc, key) => {
		const field = document.getElementById(key + "-field");
		acc[key] = field.value;
		//field.value = "";
		return acc;
	}, {});

	localStorage.setItem(objName, JSON.stringify(theObj));
}
