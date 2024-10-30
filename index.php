<?php defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/*
Plugin Name: Mask Elementor Form
Description: Este é um plugin desenvolvido para o setup de máscaras ao formulário nativo do Elementor Pro. 
Author: CZ Brains
Author URI: https://www.czbrains.com.br
Version: 1.0
Text Domain: mask-elementor-form 
*/

function maskef_load_scripts() {

    wp_enqueue_script( 'jquery.mask.min.js', plugins_url( 'js/jquery.mask.min.js', __FILE__ ), array('jquery'), '1.0', true );
    wp_enqueue_script( 'maskelementor.js', plugins_url( 'js/maskelementor.js', __FILE__ ), array('jquery'), '1.0', true );

} 
add_action('wp_enqueue_scripts', 'maskef_load_scripts'); 