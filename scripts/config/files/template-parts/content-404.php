<?php

{{incThemeNamespace}}

if (! defined('ABSPATH')) {
    exit;
}

?>
<section class='content-404'>
    <h1>404</h1>
    <p><?php esc_html_e('Page not found','{{themeDomain') ?></p>
    <a href='<?php echo esc_url(home_url()); ?>'><?php esc_html_e('Go to Home Page','{{themeDomain') ?></a>
</section>