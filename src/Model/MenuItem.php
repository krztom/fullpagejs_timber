<?php

namespace Teik\Model;

use Timber\MenuItem as TimberMenuItem;

class MenuItem extends TimberMenuItem
{
    public function __construct($data, $menu = null)
    {
        parent::__construct($data, $menu);
        if ($this->isHighlight()) {
            $this->add_class('is-highlight');
        }
    }

    public function isHighlight()
    {
        return $this->meta('is_highlight');
    }
}
