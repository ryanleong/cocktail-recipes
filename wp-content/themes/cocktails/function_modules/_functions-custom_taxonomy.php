<?php
	////////////////////////////////////////////////
	// Add Custom Taxonomy
	////////////////////////////////////////////////
	function custom_taxonomy() {

		register_taxonomy(
			'product_cat',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
			array('products', 'cocktails'),        //post type name
			array(
				'hierarchical' => true,
				'label' => 'Category',  //Display name
				'query_var' => true,
				'rewrite' => array(
					'slug' => 'taxonomy_name_slug', // This controls the base slug that will display before each term
					'with_front' => false // Don't display the category base before
				),
				'show_in_rest' => true,
				'rest_base' => 'product_cat',
			)
		);

		register_taxonomy(
			'distillery',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
			'products',        //post type name
			array(
				'hierarchical' => true,
				'label' => 'Distillery',  //Display name
				'query_var' => true,
				'rewrite' => array(
					'slug' => 'taxonomy_name_slug', // This controls the base slug that will display before each term
					'with_front' => false // Don't display the category base before
				),
				'show_in_rest' => true,
				'rest_base' => 'distillery',
			)
		);

	}
	add_action( 'init', 'custom_taxonomy');
