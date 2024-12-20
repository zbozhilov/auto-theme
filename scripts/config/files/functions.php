<?php

{{incThemeNamespace}}

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Load theme textdomain
 */
function load_textdomain() {
	load_theme_textdomain('{{themeDomain}}', get_template_directory() . '/languages');
}

add_action('after_setup_theme', '{{absThemeNamespace}}\load_textdomain');

/**
 * Enqueue theme styles
 */
function enqueue_theme_styles() {
	wp_enqueue_style('theme', get_template_directory_uri() . '/assets/theme/theme.css');
}

add_action('wp_enqueue_scripts', '{{absThemeNamespace}}\enqueue_theme_styles');

/**
 * Enqueue React App scripts
 */
function enqueue_app_scripts() {
	$bundle_assets = require get_template_directory() . '/assets/app/app.bundle.asset.php';
	$deps 		   = is_array($bundle_assets['dependencies']) ? $bundle_assets['dependencies'] : array();
	$version 	   = $bundle_assets['version'];
	$args 	       = array('strategy' => 'defer');

	wp_enqueue_script('app', get_template_directory_uri() . '/assets/app/app.bundle.js', $deps, $version, $args);
	wp_enqueue_style('app', get_template_directory_uri() . '/assets/app/app.css', array(), $version);
}

add_action('wp_enqueue_scripts', '{{absThemeNamespace}}\enqueue_app_scripts');

/**
 * Load includes php files
 */
require_once get_template_directory() . '/includes/load.php';
