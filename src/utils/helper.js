export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
	var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
}

export function checkBlank(field) {
	var re = /^\s*$/;
	return re.test(String(field).toLowerCase());
}