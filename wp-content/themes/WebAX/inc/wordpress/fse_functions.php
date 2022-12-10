<?php

if (function_exists('register_block_pattern')) {
	function myfirsttheme_register_block_pattern()
	{
		register_block_pattern(
			'myfirsttheme/call-to-action',
			array(
				'title'      => esc_html__('Call to action', 'myfirsttheme'),
				'categories' => array('featured'),
				'content' =>'
					<!-- wp:group {"style":{"border":{"width":"4px","style":"solid","radius":"8px"},"color":{"background":"' . esc_attr( get_theme_mod( 'myfirsttheme_action_bgcolor', '#fff' ) ) . '"}},"borderColor":"tertiary","layout":{"inherit":true},"className":"call-to-action__large"} -->
					<div class="wp-block-group call-to-action__large has-border-color has-tertiary-border-color has-background" style="background-color:' . esc_attr( get_theme_mod( 'myfirsttheme_action_bgcolor', '#fff' ) ). ';border-radius:8px;border-style:solid;border-width:4px"><!-- wp:paragraph {"align":"center","style":{"color":{"text":"' . esc_attr( get_theme_mod( 'myfirsttheme_action_text_color', '#000' ) ) . '"},"elements":{"link":{"color":{"text":"' . esc_attr( get_theme_mod( 'myfirsttheme_action_text_color', '#000' ) ). '"}}}},"fontSize":"large"} -->
					<p class="has-text-align-center has-text-color has-link-color has-large-font-size" style="color:' . esc_attr( get_theme_mod( 'myfirsttheme_action_text_color', '#000' ) ). '">' . myfirsttheme_action_text() . '</p><!-- /wp:paragraph -->
					</div>
					<!-- /wp:group -->
				',
			)
		);
	}
	add_action('init', 'myfirsttheme_register_block_pattern', 9);
}

function myfirsttheme_action_text() {
	$action_text = '';
	if ( get_theme_mod( 'myfirsttheme_action_link' ) ) {
		$action_text .= '<a href="' . esc_url( get_theme_mod( 'myfirsttheme_action_link' ) ) . '">';
	}
	$action_text .= wp_kses_post( get_theme_mod( 'myfirsttheme_action_text' ) );
	if ( get_theme_mod( 'myfirsttheme_action_link' ) ) {
		$action_text .= '</a>';
	}
	return $action_text;
}
