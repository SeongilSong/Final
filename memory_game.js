    //Image name array. This is a matching game, so this needs two copies of one image. 
    var imgSrcArray = ["bear0.jpg","bear0.jpg", "bear1.jpg","bear1.jpg","bear2.jpg","bear2.jpg","bear3.jpg","bear3.jpg","bear4.jpg","bear4.jpg","bear5.jpg","bear5.jpg","bear6.jpg","bear6.jpg","bear7.jpg","bear7.jpg","bear8.jpg","bear8.jpg","bear9.jpg","bear9.jpg","bear10.jpg","bear10.jpg","bear11.jpg","bear11.jpg"];		

        //At the beginning of the game, images will be randomly reassigned to imgArray. 
		var imgArray;  

		//A variable to keep track of matached image. 
		var matched; 

		//This interval will decide how long users can see the mis-matched pair. 
		var TIME_INTERVAL =2000; 

		//oddClick will be true when a user chose only one image. 
		var oddClick = true; 

		//A variable to save the object (the first image)
		var selectedOdd=null;

        //A variable to save the object (the second image)
		var selectedOven=null;  
		
		//A variable to save the location of selected image from the image list. 
		var selectedNum=-1; 

		//A variable to save the Timer Object. 
		var timerReset; 

		//A variable to disable mouse click for seconds until turn two unmatched cards back.  		
		var timerOn= false; 

		//A function will be called when the webpage is loaded. 
		function start(){
		    //Initialize this Game.  
            newGame(); 
            //Add mouse click event listeners. 
            addListeners();
		}

		//A function will intialize variables when user choose two unmatched cards. 
		function resetCards(){
				selectedOdd.src = "bearback.jpg"
				selectedEven.src = "bearback.jpg"
				selectedOdd = null;
                selectedEven = null; 
                timerOn = false; 
                //Will remove timer, then user can resume the game. 
                window.clearInterval(timerReset); 
		}

function newGame(){
  //Initialize variables for Game.  
	selectedOdd = -1;
	selectedEven = -1; 
	
  //A variable to track how many gards was matched. 
	matched = new Array(24); 
	for (var i =0; i< 24; i++){
	  matched[i]= false; 
	}
	
  //Assign images to an image Array.
	imgArray = new Array(24); 
	assignImages(); 
}

function addListeners(){ 
	//Add a event listener for mouse click to Image 0. 
	document.getElementById("bear0").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
	if(selectedOdd == document.getElementById("bear0") || timerOn == true)return; 
	// display the assigned face image, instead of the tail image. 
  document.getElementById("bear0").src = imgArray[0];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
		oddClick = false; 
    //Save the object, which was chosen by user. 
		selectedOdd = document.getElementById("bear0"); 
    //Save the number of image, which was chosen by user. 
		selectedNum = 0; 
  }	
  else{
    //oddClick is false when user choose two images to match. 
		oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear0").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[0]=true; 
      selectedOdd = null;
      selectedEven = null; 
 			// Check whether all images has been matched or not. 
 			if(allMatch()==true){
        //Starts new game if all images has been matched. 
 			  newGame(); 
 			}
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear0"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
			timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 1. 
  document.getElementById("bear1").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear1") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear1").src = imgArray[1];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear1"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 1; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear1").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[1]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear1"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 2. 
  document.getElementById("bear2").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear2") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear2").src = imgArray[2];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear2"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 2; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear2").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[2]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear2"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 3. 
  document.getElementById("bear3").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear3") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear3").src = imgArray[3];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear3"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 3; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear3").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[3]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear3"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 4. 
  document.getElementById("bear4").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear4") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear4").src = imgArray[4];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear4"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 4; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear4").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[4]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear4"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 5. 
  document.getElementById("bear5").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear5") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear5").src = imgArray[5];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear5"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 5; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear5").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[5]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear5"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 6. 
  document.getElementById("bear6").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear6") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear6").src = imgArray[6];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear6"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 6; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear6").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[6]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear6"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 7. 
  document.getElementById("bear7").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear7") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear7").src = imgArray[7];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear7"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 7; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear7").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[7]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear7"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 8. 
  document.getElementById("bear8").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear8") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear8").src = imgArray[8];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear8"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 8; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear8").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[8]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear8"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 9. 
  document.getElementById("bear9").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear9") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear9").src = imgArray[9];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear9"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 9; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear9").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[9]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear9"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 10. 
  document.getElementById("bear10").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear10") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear10").src = imgArray[10];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear10"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 10; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear10").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[10]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear10"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


  //Add a event listener for mouse click to Image 11. 
  document.getElementById("bear11").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear11") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear11").src = imgArray[11];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear11"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 11; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear11").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[11]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear11"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 12. 
  document.getElementById("bear12").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear12") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear12").src = imgArray[12];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear12"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 12; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear12").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[12]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear12"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 13. 
  document.getElementById("bear13").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear13") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear13").src = imgArray[13];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear13"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 13; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear13").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[13]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear13"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 14. 
  document.getElementById("bear14").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear14") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear14").src = imgArray[14];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear14"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 14; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear14").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[14]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear14"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 15. 
  document.getElementById("bear15").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear15") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear15").src = imgArray[15];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear15"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 15; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear15").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[15]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear15"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 16. 
  document.getElementById("bear16").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear16") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear16").src = imgArray[16];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear16"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 16; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear16").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[16]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear16"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

    //Add a event listener for mouse click to Image 17. 
  document.getElementById("bear17").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear17") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear17").src = imgArray[17];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear17"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 17; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear17").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[17]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear17"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });

  //Add a event listener for mouse click to Image 18. 
  document.getElementById("bear18").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear18") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear18").src = imgArray[18];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear18"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 18; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear18").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[18]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear18"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 19. 
  document.getElementById("bear19").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear19") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear19").src = imgArray[19];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear19"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 19; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear19").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[19]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear19"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 20. 
  document.getElementById("bear20").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear20") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear20").src = imgArray[20];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear20"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 20; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear20").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[20]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear20"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 21. 
  document.getElementById("bear21").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear21") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear21").src = imgArray[21];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear21"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 21; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear21").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[21]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear21"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 22. 
  document.getElementById("bear22").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear22") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear22").src = imgArray[22];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear22"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 22; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear22").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[22]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear22"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });


    //Add a event listener for mouse click to Image 23. 
  document.getElementById("bear23").addEventListener("click",function (){
  
  //No action when user click the same image again or for a few seconds when user choose unmatched images. 
  if(selectedOdd == document.getElementById("bear23") || timerOn == true)return; 
  // display the assigned face image, instead of the tail image. 
  document.getElementById("bear23").src = imgArray[23];
               
  if(oddClick== true){
    //oddClick is true, when user choose only one image.
    oddClick = false; 
    //Save the object, which was chosen by user. 
    selectedOdd = document.getElementById("bear23"); 
    //Save the number of image, which was chosen by user. 
    selectedNum = 23; 
  } 
  else{
    //oddClick is false when user choose two images to match. 
    oddClick = true; 
    //check wheether the first image and the second image is the same or not. 
    if(selectedOdd.src == document.getElementById("bear23").src){
      //When the first image and the second image is the same. 
      matched[selectedNum]= true; 
      matched[23]=true; 
      selectedOdd = null;
      selectedEven = null; 
      // Check whether all images has been matched or not. 
      if(allMatch()==true){
        //Starts new game if all images has been matched. 
        newGame(); 
      }
    }
    else
    {       
      //When the first image and the second image is not the same one. 
      //Set timerOn variable to true to prevent mouse click while turning the tail image back on.  
      timerOn = true; 
      //Save the image object to replace two tail images when user chooses two different images. 
      selectedEven = document.getElementById("bear23"); 
      //Two images will turn back to tail images after the designated TIME_INTERVAL. 
      timerReset = window.setInterval(resetCards,TIME_INTERVAL); 
      }
    }
  });
}
 
// First assign tail images to image objects. When user clicks, the face image will be shown. 
function assignImages(){
  var assigned = new Array(24);
	for (var i =0; i< 24; i++){
	  assigned[i]= false; 
		var idStr = "bear"+ parseInt(i); 
		document.getElementById(idStr).src = "bearback.jpg";
	}
			
	// Randomly assign the face images to an image Array.  
	for (var i =0; i< 24; i++){
	   var iFound = false; 
	   while(!iFound){
          var num = Math.floor((Math.random() * 100) + 1) % 24;
          if(assigned[num]==false){
              assigned[num]=true; 
              imgArray[i]= imgSrcArray[num]; 
              iFound = true; 
          }
	   }
	}
}

// A function, which will tell users whether all cards were matched or not. 
function allMatch(){
    var allMatched = true; 
		for (var i =0; i< 24; i++){
				if(matched[i]==false){
					allMatched = false; 
				} 
			}
		return allMatched; //return true when all cards were matched. 
}

<!-- listen for is a window object’s load event, which occurs when the HTML page has finished loading. -->
window.addEventListener("load",start,false);