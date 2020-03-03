<?php

namespace Teik\Blocks;

use Teik\Traits\Singleton;

class AboutContact extends AbstractBlock
{
    use Singleton;

    public $name = 'about-contact';

    public $title = 'O produkcie + kontakt';

    public function getBlockData(array $data = []): array
    {
        $data = parent::getBlockData();
        $data['contact_data'] = get_field('contact_data', 'options');
        return $data;
    }
}
