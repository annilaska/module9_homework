// -----------------------задание 1-------------------------

// Вам дана заготовка и результат, который вы должны получить. 
// Ваша задача — написать код, который будет преобразовывать XML в JS-объект 
//и выводить его в консоль.


// -----------------------вариант 1-------------------------


const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const parser = new DOMParser();

const xmlDom = parser.parseFromString(xmlString, 'text/xml');


const listNode = xmlDom.querySelector('list');
const studentNode = listNode.querySelectorAll('student');
/* const nameNode = studentNode.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');
const langAttr = nameNode.getAttribute('lang'); */

let result = {
	list: []
};

for (let i = 0; i < studentNode.length; i++) {

	let name = studentNode[i].querySelector('first').textContent + ' ' + studentNode[i].querySelector('second').textContent;
	let age = Number(studentNode[i].querySelector('age').textContent);
	let prof = studentNode[i].querySelector('prof').textContent;
	let lang = studentNode[i].querySelector('name').getAttribute('lang');

	let student = {
    name: name,
    age: age,
    prof: prof,
    lang: lang
};

	result.list.push(student)
}

console.log(result)

// -----------------------вариант 2 (правда здесь выводится два массива)-----------------------


const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const parser = new DOMParser();

const xmlDom = parser.parseFromString(xmlString, 'text/xml');

const studentNode = xmlDom.querySelectorAll('student');



for (let i = 0; i < studentNode.length; i++) {

	let name = studentNode[i].querySelector('first').textContent + ' ' + studentNode[i].querySelector('second').textContent;
	let age = Number(studentNode[i].querySelector('age').textContent);
	let prof = studentNode[i].querySelector('prof').textContent;
	let lang = studentNode[i].querySelector('name').getAttribute('lang');


let result = {
  list: [`name: ${name}, age: ${age}, prof: ${prof}, lang: ${lang}`]
};
	
  console.log('result', result)
}


//-----------------------вариант 3---------------------------------------


const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');


const studentNode = listNode.firstElementChild;
const nameNode = studentNode.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');
const langAttr = nameNode.getAttribute('lang');

const studentNode2 = listNode.lastElementChild;
const nameNode2 = studentNode2.querySelector('name');
const firstNode2 = nameNode2.querySelector('first');
const secondNode2 = nameNode2.querySelector('second');
const ageNode2 = studentNode2.querySelector('age');
const profNode2 = studentNode2.querySelector('prof');
const langAttr2 = nameNode2.getAttribute('lang');


const result = {
	list: [{
		name: firstNode.textContent + ' ' + secondNode.textContent,
		age:  Number(ageNode.textContent),
		prof: profNode.textContent,
    lang: langAttr
  }, {
  	name: firstNode2.textContent + ' ' + secondNode2.textContent,
    age:  Number(ageNode2.textContent),
    prof: profNode2.textContent,
    lang: langAttr2
	}]
}

console.log(result);
