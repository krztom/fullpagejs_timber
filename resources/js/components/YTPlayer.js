import $ from 'jquery';

function onPlayerReady(event) {
  event.target.playVideo();
}

function bindToModal() {
  let player;
  $('.js-video-modal').on('show.bs.modal', function (e) {
    const $player = $(this).find('.js-video-player');
    player = new YT.Player($player.get(0), {
      videoId: $player.data('id'),
      events: {
        'onReady': onPlayerReady,
      }
    });
  });
  $('.js-video-modal').on('hide.bs.modal', function (e) {
    if (player) {
      player.stopVideo();
    }
  });
}
window.onYouTubeIframeAPIReady = function () {
  bindToModal();
}