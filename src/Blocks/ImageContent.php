<?php

namespace Teik\Blocks;

use Teik\Traits\Singleton;

class ImageContent extends AbstractBlock
{
    use Singleton;

    public $name = 'image-content';
    public $title = 'Tekst + zdjęcie';

    public function getSupports()
    {
        return [
            'align' => ['left', 'right'],
            'anchor' => true
        ];
    }
}
