<?php

if (!function_exists('theme_setup')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which runs
	 * before the init hook.
	 */
	function theme_setup()
	{
		// Add support for block styles.
		add_theme_support('wp-block-styles');

		// Enqueue editor styles.
		add_editor_style('editor-style.css');
	}
endif; // theme_setup
add_action('after_setup_theme', 'theme_setup');

if (function_exists('register_block_pattern')) {
	function myfirsttheme_register_block_pattern()
	{
		register_block_pattern(
			'myfirsttheme/call-to-action',
			array(
				'title'      => esc_html__('Call to action', 'myfirsttheme'),
				'categories' => array('featured'),
				'content'    => '
					<!-- wp:group {"style":{"border":{"width":"4px","style":"solid","radius":"8px"},"color":{"background":"#8550cc"}},"borderColor":"tertiary","layout":{"inherit":true},"className":"call-to-action__large"} -->
					<div class="wp-block-group call-to-action__large has-border-color has-tertiary-border-color has-background" style="background-color:#8550cc;border-radius:8px;border-style:solid;border-width:4px"><!-- wp:paragraph {"align":"center","style":{"color":{"text":"#fefefe"},"elements":{"link":{"color":{"text":"#fefefe"}}}},"fontSize":"large"} -->
<p class="has-text-align-center has-text-color has-link-color has-large-font-size" style="color:#fefefe">Call to Action</p>
					<!-- /wp:paragraph --></div>
					<!-- /wp:group -->
				',
			)
		);
	}
	add_action('init', 'myfirsttheme_register_block_pattern', 9);
}
