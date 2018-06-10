<?php
    /**
     * Header Template
     *
     * Displays all of the head element and everything up until the "site-content" div.
     */
?>

<!-- DOM Elements -->

<?php wp_title(''); ?>

<?php if (WP_ENV == 'production'): ?>
<?php endif ?>

<?php wp_head(); // Place right before </head> ?>
