<?php require("shared/header.php")?>
<section class="hero_section" id="hero_id">
	<!-- smoke effect-->
	<video autoplay loop muted id="video">
		<source src="images/smoke.mp4" type="video/MP4">
	</video>
	<div class="hero_content">
		<h1 id="title">C&amp;R first time customer get a free evaluation!</h1>
		<span><a href="contact.php?service=eva" class="contact_button">Get Free Evaluation</a></span>
	</div>
</section>
<!-- *****SERVICES***** -->
<section class="wide_skinny services" id="services_id">
	<div class="grd_col_2">
		<div class="grd_item_1">
			<ul>
				<li id="services_evalution"><span class="services_option service_active">Evalution</span></li>
				<li id="services_maintance" ><span class="services_option">Preventive Maintance</span></li>
				<li id="services_installs"><span class="services_option">Installs</span></li>
				<li id="services_rebuilds"><span  class="services_option">Rebuilds</span></li>
				<li id="services_parts"><span  class="services_option">Parts</span></li>
			</ul>
		</div>
		<div class="grd_item_2">
			<h3 id="service_name"></h3>
			<p id="service_description"></p>
		</div>
	</div>
</section>
<!-- *****SERVICE AREA***** -->
<section class="normal_content area" id="area_id">
	<div class="grd_col_2">
		<div class="grd_item_1">
			<h3 id="header_3">Area</h3>
			<p id="paragraph">We service Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aliquid illo eveniet ducimus animi dicta ab, vitae voluptates autem accusamus quis, ipsa voluptatem consequuntur. Nostrum consequuntur sed deserunt libero tempore!</p>
		</div>
		<div class="grd_item_2" id="contact_area">
			<h3>See if your in our service area.</h3>
			<span><a href="contact.php?service=area" class="contact_button">Service area</a></span>
		</div>
	</div>
</section>
<!-- ******SERVICE TIME***** -->
<section class="normal_content time" id="time_id">
	<div class="grd_col_2">
		<div class="grd_item_1" id="i_need_repair">
			<h3>Is your sytem running right?</h3>
			<span><a href="contact.php?service=repair" class="contact_button">I Need Repairs</a></span>
		</div>
		<div class="grd_item_2" id="emergancy">
			<h3>24/7 Emergency Repair</h3>
		</div>
	</div>
</section>
<!-- ******ABOUT US***** -->
<section class="skinny_wide about" id="about_id">
	<div class="grd_col_2">
		<div class="grd_item_1">
			<h3 id="who_header">Who We Are</h3>
			<p id="who_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni facilis optio recusandae eum, omnis iusto. Ratione est, praesentium aspernatur, voluptatem minus pariatur cumque quo facilis omnis libero doloribus tenetur, ea!</p>
		</div>
		<div class="grd_item_2" id="questions">
			<h3>Have questions about us?</h3>
			<span><a href="contact.php?service=question" class="contact_button">Questions</a></span>
		</div>
	</div>
</section>
<?php include("shared/footer.php")?>
