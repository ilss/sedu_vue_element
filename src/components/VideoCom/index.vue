<template>
  <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
  </video-player>
</template>
<script>
  import { videoPlayer } from 'vue-video-player'
  import videojsFlash from 'videojs-flash'
  import { mapState } from 'vuex'
  import 'video.js/dist/video-js.css'

  const videojs = window.videojs = require('video.js');
  require('video.js/dist/lang/zh-CN')

  export default {
    name:'VideoCom',
    components: {
      videoPlayer
    },
    props:{
      vSrc:String,
      vPoster:String
    },
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          techOrder: ['flash', 'html5'],
          language: 'en',//en
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "",
            src: "//www.simplebdps.com/downloads/testfff.flv"
          }],
          poster: "//www.simplebdps.com/images/wlkc.png",
        }
      }
    },
    created() {
      console.log(this.vSrc)
      this.playerOptions.sources[0].src=this.vSrc || '';
      this.playerOptions.poster=this.vPoster || '';
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      ...mapState([
        'language'
      ]),
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        console.log('player play!', player)
      },
      onPlayerPause(player) {
        console.log('player pause!', player)
      },
      onPlayerEnded(player){
        // console.log('player end!', player)
      },
      onPlayerWaiting(player){
        //
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    },
    watch: {
      language: {
        handler(options, oldOptions) {
          if (options==='zh') {
            this.playerOptions.language = "zh-CN"
          }
        }
      }
    }
  }
</script>
<style lang='scss'>
 .video-player .vjs-poster{
   pointer-events:none;
 }
 .video-player-box .video-js .vjs-big-play-button{
     /*
      播放按钮换成圆形
     */
    height: 2em;
    width: 2em;
    line-height: 2em;
    border-radius: 1em;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
