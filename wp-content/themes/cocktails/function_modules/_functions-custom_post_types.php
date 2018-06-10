<?php
	////////////////////////////////////////////////
	// Add Custom Post Type
	////////////////////////////////////////////////
	function custom_post_type() {
		// Custom post
		register_post_type('cocktails',
			array(
				'capability_type' => 'post',
				'has_archive' => true,
				'label' => 'cocktails',
				// label text
				'labels' => array(
					'name' => 'Cocktails',
					'singular_name' => 'Cocktails',
					'add_new' => 'Add New'
				),
				'menu_icon' => 'dashicons-plus',
				'menu_position' => 5,
				'query_var' => true,
				'supports' => array(
					'title',
					// 'editor',
					'thumbnail',
					'revisions',
					// 'excerpt',
					// 'comments',
					// 'author',
					// 'trackbacks',
					// 'custom-fields',
					// 'page-attributes',
				),
				'public' => true,
				'publicly_queryable' => true,
				'hierarchical' => false,
				'show_ui' => true,
				'show_in_menu' => true,
				'show_in_admin_bar' => true,
				'rewrite' => array('slug' => 'cocktails', 'with_front' => false),
				'taxonomies' => array(),
				'show_in_rest' => true,
				'rest_base' => 'cocktails',
			)
		);

		register_post_type('products',
			array(
				'capability_type' => 'post',
				'has_archive' => true,
				'label' => 'products',
				// label text
				'labels' => array(
					'name' => 'Products',
					'singular_name' => 'Products',
					'add_new' => 'Add New'
				),
				'menu_icon' => 'dashicons-plus',
				'menu_position' => 5,
				'query_var' => true,
				'supports' => array(
					'title',
					// 'editor',
					'thumbnail',
					'revisions',
					// 'excerpt',
					// 'comments',
					// 'author',
					'trackbacks',
					// 'custom-fields',
					// 'page-attributes',
				),
				'public' => true,
				'publicly_queryable' => true,
				'hierarchical' => false,
				'show_ui' => true,
				'show_in_menu' => true,
				'show_in_admin_bar' => true,
				'rewrite' => array('slug' => 'products', 'with_front' => false),
				'taxonomies' => array(),
				'show_in_rest' => true,
				'rest_base' => 'products',
			)
		);


	}
	add_action('init', 'custom_post_type', 0 );

