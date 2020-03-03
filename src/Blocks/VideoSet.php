<?php

namespace Teik\Blocks;

use Teik\Traits\Singleton;

class VideoSet extends AbstractBlock
{
    use Singleton;

    public $name = 'video-set';

    public $title = 'Filmy Youtube';

    public function getBlockData(array $data = []): array
    {
        $videos = get_field('videos');
        foreach ($videos as $key => $video) {
            preg_match('/src="([^"]+)"/', $video['url'], $match);
            $url = $match[1];
            $video_id = $this->getIDFromUrl($url);
            $data['videos'][] = [
                'url' => $url,
                'id' => $video_id,
                'thumbnail_url' => $this->getThubmnail($video_id),
            ];
        }
        return parent::getBlockData($data);
    }

    private function getIDFromUrl($url)
    {
        $reg = '/(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"\'>]+)/';
        preg_match($reg, $url, $matches);
        if (!empty($matches)) {
            $id = $matches[5];
        }
        return $id;
    }

    private function getThubmnail($id)
    {
        return 'https://img.youtube.com/vi/' . $id . '/sddefault.jpg';
    }
}
