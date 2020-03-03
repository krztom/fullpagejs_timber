<?php

namespace Teik\Blocks;

use Teik\Traits\Singleton;
use Timber\PostQuery;

class Testimonials extends AbstractBlock
{
    use Singleton;

    public $name = 'testimonials';

    public $title = 'Opinie';

    public function getBlockData(array $data = []): array
    {
        $data = parent::getBlockData($data);
        $data['testimonials'] = $this->getItems($data['testimonials']);

        return $data;
    }

    private function getItems($selected = [])
    {
        $args = [
            'post_type' => 'testimonial',
            'posts_per_page' => -1
        ];
        if ($selected) {
            $args['post__in'] = $selected;
            $args['orderby'] = 'post__in';
        }

        return new PostQuery($args);
    }
}
