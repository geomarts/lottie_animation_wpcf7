<?php
function twentytwenty_child_enqueue_scripts() {
	$parent_style  = 'twentytwenty-style';
	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css', array(), wp_get_theme()->parent()->get( 'Version' ) );
	wp_enqueue_style(
		'child-style',
		get_stylesheet_directory_uri() . '/style.css',
		array( $parent_style ),
		$theme_version
	);

	wp_enqueue_script( 'lottie-player', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', array(), $theme_version );
	wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/assets/js/custom.js', array(), $theme_version, true );
}
add_action( 'wp_enqueue_scripts', 'twentytwenty_child_enqueue_scripts' );

