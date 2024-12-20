<?php

{{incThemeNamespace}}

if (! defined('ABSPATH')) {
    exit;
}

function add_schema_org_markup() {
    
    if (is_single()) {
        
        global $post;

        setup_postdata($post);
        ?>
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "<?php echo esc_js(get_the_title()); ?>",
                "description": "<?php echo esc_js(get_the_excerpt()); ?>",
                "url": "<?php echo esc_url(get_permalink()); ?>",
                "datePublished": "<?php echo esc_js(get_the_date('c')); ?>",
                "dateModified": "<?php echo esc_js(get_the_modified_date('c')); ?>",
                "author": {
                    "@type": "Person",
                    "name": "<?php echo esc_js(get_the_author()); ?>"
                },
                "image": "<?php echo esc_url(get_the_post_thumbnail_url()); ?>"
            }
        </script>
        <?php
        wp_reset_postdata();
    }
}
add_action('wp_head', '{{absThemeNamespace}}\add_schema_org_markup');
