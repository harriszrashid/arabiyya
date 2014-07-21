<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<li>
	<?php if (!empty($title)): ?>
	  <!--<h3><?php // print $title; ?></h3>-->
	<?php endif; ?>
	<?php foreach ($rows as $id => $row): ?>
	  <div
	  	<?php if ($classes_array[$id]) { 
	  		print ' class="' . $classes_array[$id] .'"';
	  	} 
	  	?>>
	  	<div class="row-wrapper">
		    <?php print $row; ?>
		  </div>
	  </div>
	<?php endforeach; ?>
</li>