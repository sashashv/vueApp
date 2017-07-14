<template>
  <div>
     <ul>
        <li v-for="post in postlist">
            <h2>{{post.title +" " + post.id}}</h2>
            <router-link :to="{path : '/' + post.id}">Go to post</router-link>
            <p>{{post.body}}</p>
        </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      postlist: [
      {
        id: 1,
        title: "Lorem Ipsum",
        body: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне.",
        img: ""
      },
      {
        id: 2,
        title: "Lorem Ipsum",
        body: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне.",
        img: ""
       },
      {
          id: 3,
          title: "Lorem Ipsum",
          body: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне.",
          img: ""
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    
</style>
