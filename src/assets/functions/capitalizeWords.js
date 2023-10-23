


export default capitalizeWords = (string) => {
	return string.split(" ").map(word => {
		if (word.length > 2) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		} else {
			return word;
		}
	}).join(" ");
}