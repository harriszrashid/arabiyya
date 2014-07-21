<?php

/**
 * Implements hook_preprocess_page().
 */
function arabiyya_preprocess_page(&$variables) {
  // You can use preprocess hooks to modify the variables before they are passed
  // to the theme function or template file.
  drupal_add_css('http://fonts.googleapis.com/css?family=Crete+Round','external');  
}
