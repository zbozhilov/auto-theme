<?php 

{{incThemeNamespace}}

if (! defined('ABSPATH')) {
    exit;
}

/**
 * Open Graph tags for single page
 */
require_once get_template_directory() . '/includes/seo/og-meta-tags.php';

/**
 * Schema.org tags for single page
 */
require_once get_template_directory() . '/includes/seo/schema-org-markup.php';

/**
 * Twitter card tags for single page
 */

require_once get_template_directory() . '/includes/seo/twitter-card.php';