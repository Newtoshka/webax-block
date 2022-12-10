<?php
/**
 * Block Variations
 *
 * @package webax
 * @since 1.0.0
 */

/**
 * This is an example of how to register a block variation.
 * Type /full or use the block inserter to insert a full width group block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 *
 * @since 1.0.0
 *
 * @return void
 */
function webax_register_block_variation() {
	wp_enqueue_script(
		'webax-block-variations',
		get_template_directory_uri() . '/assets/js/block-variation.js',
		array( 'wp-blocks' ),
		WEBAX_VERSION,
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'webax_register_block_variation' );
