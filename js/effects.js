
$( document ).ready(function(){
		$( ".nav-item1" ).click(function() {
			greyOut();
			$( this.firstElementChild ).removeClass("disabled"); 
			$( this.firstElementChild ).addClass("enabled"); 
			$( this ).effect( "bounce", "slow" );
			
	 	});
	 	$( ".nav-item2" ).click(function() {
			greyOut(); 
			$( this.firstElementChild ).removeClass("disabled"); 
			$( this.firstElementChild ).addClass("enabled"); 
  			$( this ).effect( "bounce", "slow" );
	 	});
	 	$( ".nav-item3").click(function() {
			greyOut();
			$( this.firstElementChild ).removeClass("disabled"); 
			$( this.firstElementChild ).addClass("enabled"); 
  			$( this ).effect( "bounce", "slow" );
	 	});
		$( ".nav-item4").click(function() {
			greyOut();
			$( this.firstElementChild ).removeClass("disabled"); 
			$( this.firstElementChild ).addClass("enabled"); 
  			$( this ).effect( "bounce", "slow" );
	 	});
		$( ".nav-item5").click(function() {
			greyOut();
			$( this.firstElementChild ).removeClass("disabled"); 
			$( this.firstElementChild ).addClass("enabled"); 
  			$( this ).effect( "bounce", "slow" );
	 	});
		  var greyOut = function(){
			 for (i=1; i<=5; i++){
				$("#nav-" +i).removeClass("enabled"); 
				 $("#nav-" +i).addClass("disabled"); 
			}
		  }
});