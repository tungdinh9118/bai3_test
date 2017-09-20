function myfunction(array){
	var x = [1,2,3,4,5,6,7];
	var y = [1,9,25,49];
	var type = typeof array;
		if ( array.length == x.length){
			var mode = true;
			for (i=0;i<= x.length;++i){
				if ( x[i] != array[i]){
					mode = false;
					break;
				}
			}
			if (mode == true){
				console.log(y);
			}
			else{
			console.log("em rất tốt nhưng anh rất tiếc =))");
		}
		}
		else{
			console.log("em rất tốt nhưng anh rất tiếc =))");
		}

}
myfunction([1,2,3,4,5,6,7]);