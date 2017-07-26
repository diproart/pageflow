//= require_self
//= require_tree ./volume_fading

pageflow.mediaPlayer.volumeFading = function(player) {
  if (!pageflow.browser.has('volume control support')) {
    return pageflow.mediaPlayer.volumeFading.noop(player);
  }
  else if (pageflow.audioContext.get()) {
    return pageflow.mediaPlayer.volumeFading.webAudio(
      player,
      pageflow.audioContext.get()
    );
  }
  else {
    return pageflow.mediaPlayer.volumeFading.interval(player);
  }
};
