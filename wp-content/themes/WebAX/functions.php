<?php

/** Proper way to enqueue scripts and styles */
function ax_enqueue_scripts() {
    // Versions
    $version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style( 'main-style', get_template_directory_uri().'/dist/css/app.css', null, $version );
	wp_enqueue_script( 'main-script', get_template_directory_uri() . '/dist/js/app.js', null, $version, true );
}

add_action( 'wp_enqueue_scripts', 'ax_enqueue_scripts' );

/** Get template part with support functions */ 
get_template_part('/inc/functions_loader');