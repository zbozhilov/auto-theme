<?php

{{incThemeNamespace}}

if (! defined('ABSPATH')) {
    exit;
}

function add_og_meta_tags() {
    
    if (is_single()) {
        
        global $post;

        setup_postdata($post);
        ?>
        <meta property="og:title" content="<?php echo get_the_title(); ?>" />
        <meta property="og:description" content="<?php echo get_the_excerpt(); ?>" />
        <meta property="og:url" content="<?php echo get_permalink(); ?>" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="<?php echo get_the_post_thumbnail_url(); ?>" />
        <?php
        wp_reset_postdata();
    }
}
add_action('wp_head', '{{absThemeNamespace}}\add_og_meta_tags');
