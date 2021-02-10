<?php

namespace Teik\Blocks;

use Teik\Traits\Singleton;

class News extends AbstractBlock
{
    use Singleton;

    public $name = 'news';

    public $title = 'News';
}
