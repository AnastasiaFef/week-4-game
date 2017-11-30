$(document).ready(function(){
	// your_char should have fight points = ? (that is taken from char), life points = ? (that is taken from char), also char that is choosen by user
	var your_char 
	// enemie should have fight points = ? that is taken from char, life points = ? (that is taken from char), also char that is choosen by user
	//developer     should have fight points = *think later*,  life points = *think later*
	//qa            should have fight points = *think later*,  life points = *think later*
	//product_owner should have fight points = *think later*,  life points = *think later*
	//designer      should have fight points = *think later*,  life points = *think later*

	//add on-load wrapping func

	//On click at .select_char:
	$(".select_char").on("click", function(){
	// Once user selects charachter to play, that char is moved to .your_char and saved to your_char variable
		your_char=$(this).val();
		console.log(your_char);
	// Other 3 char-s are moved to .enemies_box and take place on one of .enemie
	})





	//On click at .enemie:
	//Move that char to .defenter, save as defender
	//other char-s left in .enemies_box are moved to the left, if no more - say so


	//on click on "attack":
	//deduct your_char's fight points from defender's life points
	//display defender's life points: if <=0 the killed, pick new one
	//deduct defender's fight points from your_char's life points
	//display your_char's life points: if <=0 your_char is killed, you lost, restart the game


	//on click restart:
	//restart the game




})