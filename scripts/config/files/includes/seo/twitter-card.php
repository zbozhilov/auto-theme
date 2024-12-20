<?php

{{incThemeNamespace}}

if (! defined('ABSPATH')) {
    exit;
}

function add_twitter_card() {

    if (is_single()) {

        global $post;

        setup_postdata($post);
        ?>
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="<?php echo get_the_title(); ?>">
        <meta name="twitter:description" content="<?php echo get_the_excerpt(); ?>">
        <meta name="twitter:url" content="<?php echo get_permalink(); ?>">
        <meta name="twitter:image" content="<?php echo get_the_post_thumbnail_url(); ?>">

        <?php
        wp_reset_postdata();
    }
}
add_action('wp_head', '{{absThemeNamespace}}\add_twitter_card');
