<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- set browser color to them color. only supported in sertain mobile devices as of 5/13/19-->
	<meta name="theme-color" content="color">
	<link rel="stylesheet preload" type="text/css" href="css/styles.css">

	<!-- ADD DESCRIPTION SEO OPT JASON LD---->
	<meta name="description" content="" />
	<link rel="icon" href="link">
	<title>R&amp;C Compressors</title>
</head>

<body>
	<?php include("shared/header.php")?>
	<div class="contact_hero_section"></div>
	<div class="blank_space wide_skinny"></div>
	<div class="blank_space"></div>
	<?php 
	$service = "";
	if(isset($_GET['service'])){ 
	  $service = $_GET['service'];
	}
		switch($service){
			case "eva":
				$service_msg = "for a FREE evaluation!";
				break;
				
			case "area":
				$service_msg = "to see if your in our service area.";
				break;
				
			case "repair":
				$service_msg = "for compressor repair.";
				break;
				
			case "question":
				$service_msg = "for awnsers to your question!";
				break;
				
			default:
				$service_msg = "for all you compressor needs!";
		}
	?>
	<section class="contact_call">
		<h1>Contact us <?php echo $service_msg; ?></h1>
		<div class="contact_align">
			<ul>
				<li>Email: asdnasdkjasdkjas</li>
				<li>Phone: 000-000-0000</li>
			</ul>
		</div>
	</section>
	<section class="contact_form">
		<h1>Contact us <?php echo $service_msg; ?></h1>
		<form action="contact.php" method="post">
			<h3>What Service do you need?</h3>
			<div class="contact_align">
				<input type="checkbox" id="Evaluation" name="check_list[] " value="Evaluation">
				<label for="Evaluation">Evaluation</label>
				<br><br>
				<input type="checkbox" id="Preventive Maintance" name="check_list[]" value="Preventive Maintance">
				<label for="Preventive Maintance">Preventive Maintance</label>
				<br><br>
				<input type="checkbox" id="Installs" name="check_list[]" value="Installs">
				<label for="Installs">Installs</label>
				<br><br>
				<input type="checkbox" id="Rebuild" name="check_list[]" value="Rebuild">
				<label for="Rebuild">Rebuild</label>
				<br><br>
				<input type="checkbox" id="Parts" name="check_list[]" value="Parts">
				<label for="Parts">Parts</label>
				<br><br>
				<input type="checkbox" id="Service Area" name="check_list[]" value="Service Area">
				<label for="Service Area">Service Area</label>
				<br><br>
				<input type="checkbox" id="Repair" name="check_list[]" value="Repair">
				<label for="Evaluation">Repair</label>
				<br><br>
				<input type="checkbox" id="Q&A" name="check_list[]" value="Q&A">
				<label for="Q&A">Questions and Contact</label>
				<br>
				<br>
				<label for="Name">Name: </label>
				<input type="text" name="Name" id="Name">
				<br><br>
				<label for="Email">Email: </label>
				<input type="Email" name="Email" id="Email">
				<br><br>
				<label for="Phone">Phone: </label>
				<input type="tel" name="Phone" id="Phone">
				<br><br>
				<input type="submit" name="submit" value="Contact Us">
			</div>
		</form>
	</section>


	<?php include("shared/footer.php")?>
</body>

</html>
<?php
	$subject="R&C Request For ";
	if(isset($_POST['submit'])){	
		if(!empty($_POST['check_list'])){
			foreach($_POST['check_list'] as $service){
				$subject = $subject . ", " . $service;
				print_r($_POST['check_list']);
			}			
			unset($_POST['submit']);
			unset($_POST['check_list']);
			$subject = "";
		}
	}
	

/*	$to = "somebody@example.com";
  $txt = "Hello world!";
  $headers = "From: webmaster@example.com" . "\r\n" .
  "CC: somebodyelse@example.com";*/

/*mail($to,$subject,$txt,$headers);*/
?>
