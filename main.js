function swap(i,j,array){
    const temp = array[j];
    array[j]= array[i];
    array[i]= temp;
}
function insertionSort(array) {
    for (let i =0 ; i< array.length ; i++ ){
			let j=i ; 
			while (j>0 && array[j]< array[j-1]){
				swap(j,j-1,array);
				j --;
			}
		}
	return array; 
}
	
var tab =[1,5,7,6,9,8]
n=insertionSort(tab)
console.log(n)
tab.push(4)
n=insertionSort(tab)
console.log(n)