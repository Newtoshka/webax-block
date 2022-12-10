<?php
/** Block theme support */
    // Block theme styles
        if (!function_exists('theme_setup')) :
            /**
             * Sets up theme defaults and registers support for various WordPress features.
             *
             * Note that this function is hooked into the after_setup_theme hook, which runs
             * before the init hook.
             */
            function theme_setup() {
                // Add support for block styles.
                add_theme_support('wp-block-styles');

                // Enqueue editor styles.
                add_editor_style('editor-style.css');
            }
        endif; // theme_setup

        add_action('after_setup_theme', 'theme_setup');

    // ? Opt-in: possibility to define alignment
        add_theme_support( 'align-wide' );

/** Usual theme support */
    // Allows the use of HTML5 markup
        add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) );

    // Custom logo
        function custom_logo_setup() {
            $defaults = array(
                'height'               => 100,
                'width'                => 400,
                'flex-height'          => true,
                'flex-width'           => true,
                'header-text'          => array( 'site-title', 'site-description' ),
                'unlink-homepage-logo' => true, 
            );
            add_theme_support( 'custom-logo', $defaults );
        }

        add_action( 'after_setup_theme', 'custom_logo_setup' );


    /** Function return second logo source.
     * 
     * ! Initiliaze function: get_theme_mod( 'second_logo' ).
     * 
     *  */ 
        function theme_customizer_setting($wp_customize) {
            // add a setting 
            $wp_customize->add_setting('second_logo');
            // Add a control to upload the hover logo
            $wp_customize->add_control(
                new WP_Customize_Image_Control(
                    $wp_customize, 
                    'second_logo', 
                    array(
                        'label' => 'Second logo',
                        'section' => 'title_tagline', //this is the section where the custom-logo from WordPress is
                        'settings' => 'second_logo',
                        'priority' => 8 // show it just below the custom-logo
                    )
                )
            );
        }

        add_action('customize_register', 'theme_customizer_setting');
