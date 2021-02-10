<?php

namespace Teik\Blocks;

$blocks = [
    Banner::instance(),
    Section::instance(),
    News::instance(),
    Contact::instance(),
];

foreach ($blocks as $key => $block) {
    $block->hook();
}
