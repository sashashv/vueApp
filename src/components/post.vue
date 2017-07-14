<template>
<<<<<<< HEAD
    <div>
        <ul>
            <li v-for="post in postList">
                <h2>{{post.title + " " + post.id}}</h2>
                <router-link :to="{path : '/' + post.id}">Go to post</router-link>
                <p>{{post.body}}</p>
            </li>
        </ul>
    </div>
=======
  <div>
     <ul>
        <li v-for="post in postlist">
            <h2>{{post.title +" " + post.id}}</h2>
            <router-link :to="{path : '/' + post.id}">Go to post</router-link>
            <p>{{post.body}}</p>
        </li>
     </ul>
  </div>
>>>>>>> e7121d763fbcac1029c789dc2d3a309152ac33b4
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
<<<<<<< HEAD
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
=======
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
>>>>>>> e7121d763fbcac1029c789dc2d3a309152ac33b4
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    
</style>
