<template>
    <div>
        <ul>
            <li v-for="post in postList">
                <h2>{{post.title + " " + post.id}}</h2>
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
      postList: [
      {
        id: 1,
        title:"Lorem Ipsum",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img:""
       },
       {
         id: 2,
         title: "Lorem Ipsum",
         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         img:""
       }
    ]
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    
</style>
