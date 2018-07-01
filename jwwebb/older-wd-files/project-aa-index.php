<?php
$page="home";
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kennesaw Mountain Accounting</title>
    <!-- Bootstrap -->
	<link href="css/bootstrap.css" rel="stylesheet">

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
  </head>
  <body>
   <?php include 'includes/project-aa-incl-nav.php';
     ?> 
  <div class="container"><h1>Kennesaw Mountain Accounting</h1><br>
<h3>Accounting for Business</h3>
  </div>
  <div id="carousel1" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <div class="container"><br>
          <p>For 25 years Kennesaw Mountain Accounting (KMA) has been serving the business community of Northwest Georgia. We provide services for businesses from small to enterprise.</p>
          <img src="pulpitrock.jpg" alt="Mountain View"> </div>
        <div id="carousel2" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel1" data-slide-to="1"></li>
            <li data-target="#carousel1" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item active"><img src="file:///D:/dev%202/Images/poshoffice..jpg" alt="Accounting is a balancing act" class="center-block">
              <div class="carousel-caption" style="background-color:rgb(180, 180, 180, 0.5)";>
                <h4>Accounting is a balancing act.</h4>
                <h5>We keep you balanced.</h5>
              </div>
            </div>
            <div class="item"><img src="images/money-garden.jpg" alt="Watch your money grow" class="center-block">
              <div class="carousel-caption" style="background-color:rgb(180, 180, 180, 0.5)";>
                <h4>Watch your money grow.</h4>
                <h5>We can help you place your money.</h5>
              </div>
            </div>
            <div class="item"><img src="images/money-plants.jpg"../images/carousel_placeholder.png alt="Coins multiply and grow" class="center-block">
              <div class="carousel-caption" style="background-color:rgb(180, 180, 180, 0.5)";>
                <h4>Wealth builds over time.</h4>
                <h5>We can help you accumulate weath.</h5>
              </div>
            </div>
          </div>
          <a class="left carousel-control" href="#carousel1" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel1" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>
      </div>
    </div>
  </div>
  <?php include 'includes/project-aa-incl-footer.php';
     ?> 
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
	<script src="js/jquery-1.11.3.min.js"></script>

	<!-- Include all compiled plugins (below), or include individual files as needed --> 
	<script src="js/bootstrap.js"></script>
  </body>
</html>