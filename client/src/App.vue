<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a href="" class="navbar-item">
            <img src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png" alt="Miniflix" width="112" height="28">
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start"></div>
          <div class="navbar-end">
            <!-- TODO Upload Button -->
          </div>
        </div>
      </div>
    </nav>
    <video-player
      :cloudinaryInstance="cloudinaryInstance"
      :movie="movie"
    />
    <video-list
      :cloudinaryInstance="cloudinaryInstance"
      @choose-movie="updatePlayer"
      :movies="movies"
    />
  </div>
</template>

<script>
import axios from 'axios'
import VideoPlayer from './components/VideoPlayer'
import VideoList from './components/VideoList'

const MINIFLIX_URL = 'https://wt-27cdba15e4ceb07100c557f31da21fa9-0.sandbox.auth0-extend.com/demo-server/movies'

export default {
  name: 'app',
  components: {
    VideoPlayer,
    VideoList
  },
  data () {
    return {
      cloudinaryInstance: null,
      movies: [],
      movie: {}
    }
  },
  created() {
    this.cloudinaryInstance = window.cloudinary.Cloudinary.new({
      cloud_name: 'saintplay',
      secure: true
    })
    axios.get(MINIFLIX_URL)
    .then(res => {
      console.log(res)
      this.movies = res.data      
    })
  },
  methods: {
    updatePlayer(movie) {
      this.movie = movie
    }
  }
}
</script>

<style lang="scss">
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 color: #e5e5e5;
 background-color: #000;
 padding-top: 30px;
}
.navbar {
 background-color: transparent;
 z-index: 2;
 padding: 30px 0;
}
.navbar-item {
 height: 25px;
 width: auto;
}
</style>
