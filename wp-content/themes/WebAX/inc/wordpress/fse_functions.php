<?php
if ( ! function_exists( 'ax_setup' ) ) {
	function ax_setup() {
        add_theme_support( 'wp-block-styles' );
    }
}
add_action( 'after_setup_theme', 'ax_setup' );