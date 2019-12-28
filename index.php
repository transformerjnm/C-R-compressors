<?php require("shared/header.php")?>
<section class="hero_section" id="hero_id">
	<!-- smoke effect-->
	<video autoplay loop muted id="video">
		<source src="images/smoke.mp4" type="video/MP4">
	</video>
	<div class="hero_content">
		
		<div class="grd_col_2">
			<div class="grd_item_1">
				<img src="images/r&c_logo.png" alt="C&R Compressors logo" class="logo">
			</div>
			<div class="<div class="grd_item_2">
				<span class="email">lakfjdlkdfjlkdsf@yahoo.com</span>
				<span class="phone">770-054-9786</span>
			</div>
		</div>
		
		<h1 id="title">C&amp;R first time customers get a free evaluation!</h1>
		<span><a href="contact.php?service=eva" class="contact_button">Get A Free Evaluation</a></span>
	</div>
</section>
<!-- *****SERVICES***** -->
<section class="color_section services" id="services_id">
	<div class="grd_col_2">
		<div class="grd_item_1">
			<ul>
				<li><span id="services_evalution" class="services_option service_active">Evalution</span></li>
				<li><span id="services_maintance" class="services_option">Preventive Maintance</span></li>
				<li><span id="services_installs" class="services_option">Installs</span></li>
				<li><span id="services_rebuilds"  class="services_option">Rebuilds</span></li>
				<li><span id="services_parts"  class="services_option">Parts</span></li>
			</ul>
		</div>
		<div class="grd_item_2">
			<p id="service_description"></p>
		</div>
	</div>
</section>
<!-- *****SERVICE AREA and Service Time***** -->
<section class="normal_content area" id="area_id">
	<div class="grd_col_2">
		<div class="grd_item_1">
			<h3 id="header_3">Service Areas</h3>
			<p id="paragraph">We gladly service most areas in Georgia.</p>
			<h3>See if you're in our service area.</h3>
			<span><a href="contact.php?service=area" class="contact_button">Service area</a></span>
		</div>
		<div class="grd_item_2" id="contact_area">
		<h3>24/7 Emergency Repairs</h3>
		<h3>Is your system not running right?</h3>
			<span><a href="contact.php?service=repair" class="contact_button">I Need Repairs</a></span>
		</div>
	</div>
</section>
<!-- ******ABOUT US***** -->
<section class="color_section about" id="about_id">
			<h3 id="who_header">Who We Are</h3>
			<p id="who_p">We are a proud family owned business. Passed down through multiple generations our company has survived by treating its customers like family. Our service will always be done to the best of our ability and we strive to build relationships with our customers. </p>
</section>
<?php include("shared/footer.php")?>
