const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [6,5,3,1,8,7,2,4]
//[5,6,3,1,8,7,2,4]//[3,5,6,1,8,7,2,4]//[1,3,5,6,7,8,2,4]

//this is my second solution
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[0] > array[i]) {
			let temp = array.splice(i, 1)[0]
			array.unshift(temp)
		} else {
			for (let j = 1; j <= i; j++) {
				if (array[i] > array[i-j] && array[i] < array[i-(j-1)]) {
					let temp = array.splice(i,1)[0]
					array.splice(i-(j-1), 0, temp)
				} 
			}
		}
    }
}

//this is my first solution
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            if (i === 0) {
                let temp = array.splice(i+1, 1)[0]
                array.splice(i, 0, temp)
            } else {
				let j = i;
				while (j > 0) {
					if (array[--j] > array[i+1]) {
						if (j === 0) {
							let temp = array.splice(i+1, 1)[0]
							array.splice(j, 0, temp)
						}
					} else {
						let temp = array.splice(i+1, 1)[0]
						array.splice(j+1, 0, temp)
						j=0;
					}
				}    
            }
        } 
    }
}


insertionSort(numbers);
console.log(numbers);


let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function insertionSort(array) {
	for (let i = 1; i < array.length; i++) { 
		let j = i-1;
		let k = i
			while(j >= 0) {
			  	if (array[k] < array[j]) {
					let tmp = array[k]
					array[k] = array[j]
					array[j] = tmp	
					j--
					k--
		  		} else {
					break;;
				} 
	  	}
  	}
}

insertionSort(numbers);
console.log(numbers);