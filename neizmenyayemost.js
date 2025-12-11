// Неизменяемость

/**
//Первый пример объекта, оригинал которого нельзя менять
let color_lawn = {
	title: "lawn",
	color: "#00FF00",
	rating: 0
};
**/

/**
//1 вариант. Неподходящий пример работы с неизменяемым обьектом.
//оригинальный обьект изменится.
function rateColor(color, rating) {
	color.rating = rating;
	return color;
}

console.log(rateColor(color_lawn, 5). rating); //5
console.log(color_lawn.rating);	//рейтинг оригинала тоже изменён с 0 на 5.
**/

/**
//второй способ, делает тоже самое, но не затрагивающий оригинал.
//метод возвращает измененную копию объекта.
const rateColor = function(color, rating) {
	return Object.assign({}, color, {rating: rating});
};

console.log(rateColor(color_lawn, 5). rating); //5
console.log(color_lawn.rating);	//0 - рейтинг оригинала не затронут.
**/

/**
//третий способ. Но с использованием стрелочной функции, и оператора распространения.
//Делает то-же, что и второй.
const rateColor = (color, rating) => ({
	...color,
	rating
});

console.log(rateColor(color_lawn, 5). rating); //5
console.log(color_lawn.rating);	//0 - рейтинг оригинала не затронут.
**/

//-----

//Второй пример объекта, оригинал которого нельзя изменять.
//Массив
let list = [{title: "Red Red"}, {title: "Lawn"}, {title: "Party Pink"}];

/**
//1 функция простого добавления обьекта в массив.
//не подходит т.к. он изменяет оригинальный массив
const addColor = function(title, colors) {
	colors.push({title: title});
	return colors;
};

console.log(addColor("Glam Green", list).length); //4
console.log(list.length); //4
**/

/**
//2 функция, не менает оригинал
//с использованием стрелочной функции и array.concat
const addColor = (title, array) => array.concat({title});

console.log(addColor("Glam Green", list).length); // 4
console.log(list.length);	// 3
**/

//3 функция, аналог 2, но короче, с оператором распространения
const addColor = (title, list) => [...list, {title}];

console.log(addColor("Glam Green", list).length); // 4
console.log(list.length);	// 3