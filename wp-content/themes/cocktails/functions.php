<?php
	/**
	 *
	 * @package WordPress
	 * @subpackage WP_BASE
	 * @since WP_BASE
	 */

	/**
	 *
	 * @uses load_theme_textdomain() For translation/localization support.
	 * @uses add_editor_style() To add Visual Editor stylesheets.
	 * @uses add_theme_support() To add support for automatic feed links, post
	 * formats, and post thumbnails.
	 * @uses register_nav_menu() To add support for a navigation menu.
	 * @uses set_post_thumbnail_size() To set a custom post thumbnail size.
	 *
	 * @since WP_BASE
	 *
	 *
	 * List of Plugins
	 * * Wordfence
	 * * WP Remove Category Base
	 * * Adance Custom Fields Pro
	 * * Contact Form 7
	 * * Disable Comments
	 * * Developer Mode
	 */
	show_admin_bar(false);

	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );


	////////////////////////////////////////////////
	// Theme Setup
	////////////////////////////////////////////////
	function theme_setup() {

		add_theme_support( 'post-thumbnails' );		// Enable Post Thumbnails (Featured Image)
		// add_theme_support('root-relative-urls');    // Enable relative URLs
		// add_theme_support('nice-search');           // Enable /?s= to /search/ redirect


		////////////////////////////////////////////////
		// Enable Post Format
		////////////////////////////////////////////////
		// add_theme_support( 'post-formats', array( 'gallery', 'quote', 'video', 'aside', 'image', 'link' ) );



		////////////////////////////////////////////////
		// Enable Post Format for Custom Post Type
		////////////////////////////////////////////////
		// remove_post_type_support( 'post', 'post-formats' );		// Work around
		// add_post_type_support( 'sample_post_type', 'post-formats', array( 'aside', 'image', 'quote' ) );

	}
	add_action( 'after_setup_theme', 'theme_setup' );



	////////////////////////////////////////////////
	// Add CSS and JS Scripts
	////////////////////////////////////////////////
	function init_theme_scripts() {
		// Main style sheet
		wp_enqueue_style('app', get_template_directory_uri() . '/assets/css/app.css', false, null);

		// Default style sheer for overrides
		wp_enqueue_style( 'style', get_stylesheet_uri() );


		// Main JS File
		wp_register_script( 'app-js', get_template_directory_uri() . '/assets/js/app.js' , false, '1.0', true );
		wp_enqueue_script( 'app-js' );

	}
	add_action( 'wp_enqueue_scripts', 'init_theme_scripts' );



	////////////////////////////////////////////////
	// Menus
	////////////////////////////////////////////////
	function register_my_menus() {
		register_nav_menus(
			array(
				'header-menu' => __( 'Header Menu' ),
				)
			);
	}
	add_action( 'init', 'register_my_menus' );











	////////////////////////////////////////////////
	// Modify ACF WYSIWYG toolbar buttons
	//
	// Options:
	// 'bold', 'italic', 'strikethrough', 'bullist', 'numlist', 'blockquote', 'hr', 'alignleft', 'aligncenter',
	// 'alignright', 'link', 'unlink', 'wp_more', 'spellchecker', 'fullscreen', 'wp_adv', 'formatselect',
	// 'underline', 'alignjustify', 'forecolor', 'pastetext', 'removeformat', 'charmap', 'outdent', 'indent',
	// 'undo', 'redo', 'wp_help'
	////////////////////////////////////////////////
	function my_toolbars( $toolbars ){

		$toolbars['Simplified' ] = array();
		$toolbars['Simplified' ][1] = array('formatselect', 'bold' , 'italic' , 'underline', 'bullist', 'link', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'unlink');

		return $toolbars;
	}
	add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );




	////////////////////////////////////////////////
	// Echo template directory
	////////////////////////////////////////////////
	function template_dir() {
		echo get_template_directory_uri();
	}


	////////////////////////////////////////////////
	// Remove Default Post Type
	////////////////////////////////////////////////
	function remove_default_post_type() {
		remove_menu_page('edit.php');
	}
	// add_action('admin_menu','remove_default_post_type');


	////////////////////////////////////////////////
	// Truncate String
	////////////////////////////////////////////////
	function truncateString($string, $length) {
		if (strlen($string) > $length) {
			$string = wordwrap($string, $length);
			$string = substr($string, 0, strpos($string, "\n")) . " ...";
		}
		return $string;
	}










	/*
	 * Disable Automatic Updates
	 * 3.7+
	 *
	 * @author	sLa NGjI's @ slangji.wordpress.com
	 */
	// add_filter( 'auto_update_translation', '__return_false' );
	// add_filter( 'automatic_updater_disabled', '__return_true' );

	// add_filter( 'allow_minor_auto_core_updates', '__return_return' );
	// add_filter( 'allow_major_auto_core_updates', '__return_false' );

	// add_filter( 'allow_dev_auto_core_updates', '__return_false' );
	// add_filter( 'auto_update_core', '__return_false' );
	// add_filter( 'wp_auto_update_core', '__return_false' );

	// add_filter( 'auto_core_update_send_email', '__return_false' );
	// add_filter( 'send_core_update_notification_email', '__return_false' );

	// add_filter( 'auto_update_plugin', '__return_false' );
	// add_filter( 'auto_update_theme', '__return_false' );

	// add_filter( 'automatic_updates_send_debug_email', '__return_false' );
	// add_filter( 'automatic_updates_is_vcs_checkout', '__return_true' );

	// add_filter( 'automatic_updates_send_debug_email ', '__return_false', 1 );
	// if( !defined( 'AUTOMATIC_UPDATER_DISABLED' ) ) define( 'AUTOMATIC_UPDATER_DISABLED', true );
	// if( !defined( 'WP_AUTO_UPDATE_CORE') ) define( 'WP_AUTO_UPDATE_CORE', false );

	// add_filter( 'pre_http_request', array($this, 'block_request'), 10, 3 );




	// Inlcude Theme Customizer
	// include(locate_template('function_modules/_functions-theme_customizer.php'));

	// Inlcude Custom Post type
	include(locate_template('function_modules/_functions-custom_post_types.php'));
	
	// Inlcude Custom Taxonomy
	include(locate_template('function_modules/_functions-custom_taxonomy.php'));

	// Inlcude pagination functions
	// include(locate_template('function_modules/_functions-pagination.php'));

	// Inlcude user functions
	// include(locate_template('function_modules/_functions-user.php'));

	// Inlcude email functions
	// include(locate_template('function_modules/_functions-email.php'));

	// Inlcude Custom Login page styling
	// include(locate_template('function_modules/_functions-login_style.php'));

	// Inlcude Dev functions
	include(locate_template('function_modules/_functions-development.php'));
