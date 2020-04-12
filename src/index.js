import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Modular Pattern!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var array1 = [1, 2, 4, 5, 6, 7, 8, 2].sort();
var array2 = [2, 4, 5, 6, 7, 8, 9, 0, 8].sort();
var array3 = array1.concat(array2);
console.log("array3 " + array3);

var uniquex = [],
  duplicate = [];

function returnUnique(arr) {
  arr.forEach(function(value, index, arr) {
    let first_index = arr.indexOf(value);
    let last_index = arr.lastIndexOf(value);
    if (first_index === last_index) {
      console.log("hhh");
      uniquex.push(value);
    } else {
      if (!duplicate.includes(value)) {
        duplicate.push(value);
      }
    }
  });
  console.log(uniquex.sort());
  console.log(duplicate.sort());
}

returnUnique(array3);

DARE.MAIN.start({});
