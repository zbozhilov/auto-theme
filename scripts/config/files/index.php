<?php

{{incThemeNamespace}}

if (! defined('ABSPATH')) {
    exit;
}

get_header();
?>
<main class="main">

    <section id='app' class='content-wrap'>      
        <!-- React APP Root -->
    </section>

    <section class='content-wrap'>

        <?php

        if (is_singular()) {
            get_template_part('template-parts/content-single');
        } elseif (is_404()) {
            get_template_part('template-parts/content-404');
        }

        ?>
    </section>

</main>

<?php
get_footer();