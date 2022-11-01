//Task 1
let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [0, 0, 0, 0, 0, 0];
let lab8 = [5, 10, 10, 0, 5]

//Task 2
let sum1 = 0;
for (let i = 0; i < lab1.length; i++){
  sum1 += lab1[i];
}
console.log(sum1);

//Task 3
function get_sum(lab){
  let sum = 0;
  for (let i = 0; i < lab.length; i++){
    sum += lab[i];
  }
  return sum
}

//Task 4
function main(lab1, lab2, lab3, lab4_5, lab6, lab8){
  let quiz_1 = 36;
  total_score = ((get_sum(lab1) + get_sum(lab2) + get_sum(lab3) + get_sum(lab4_5) + get_sum(lab6) + get_sum(lab8)) / 6 * 0.6 + 0.4 * quiz_1) * 2.5
  res1 = get_sum(lab1)
	res2 = get_sum(lab2)
	res3 = get_sum(lab3)
	res4_5 = get_sum(lab4_5)
	res6 = get_sum(lab6)
	res8 = get_sum(lab8)
  results = {res1, res2, res3, res4_5, res6, res8, quiz_1, total_score}
  return results;
}

console.log(get_sum(lab1));
console.log(main(lab1, lab2, lab3, lab4_5, lab6, lab8))
