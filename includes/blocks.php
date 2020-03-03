<?php

namespace Teik\Blocks;

$blocks = [
    MainBanner::instance(),
    AboutContact::instance(),
    Benefits::instance(),
    ImageContent::instance(),
    Testimonials::instance(),
    VideoSet::instance(),
    Banner::instance(),
];

foreach ($blocks as $key => $block) {
    $block->hook();
}
