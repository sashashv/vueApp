<template>
<<<<<<< HEAD
    <div class="details">
        <header>
            <h1><a href="#">{{postDetail.title + "-" + "" + postDetail.id}}</a></h1>
            <h2>{{postDetail.header}}</h2>
        </header>
        <div class="content">
            <p>{{postDetail.post_detail}}</p>
            <img :src="postDetail.img" alt="can">
        </div>
        <footer>
            <p>{{postDetail.footer}}</p>
        </footer>
=======
    <div>
        postDetail
>>>>>>> e7121d763fbcac1029c789dc2d3a309152ac33b4
    </div>
</template>

<script>
export default {
  name: 'postDetail',
  data () {
    return {
<<<<<<< HEAD
      postDetail:
          {
              id: 1,
              title:"Post",
              header: "Lorem ipsum dolor sit amet",
              post_detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              footer:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              img: "http://lorempixel.com/100/100/"
          }
=======
      msg: 'postDetail'
>>>>>>> e7121d763fbcac1029c789dc2d3a309152ac33b4
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<<<<<<< HEAD
<style lang="scss" scoped>

    .details {
        font-family: "Bebas Neue", sans-serif;
        background: white;
        margin: auto;
    header {
    h1 {

        font-size: 26px;
        padding: 15px 20px;
        width: 80px;
        height: 30px;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 12px;
        margin: auto;
        a{
            text-decoration: none;
            color: lightcoral;
        }
    &:hover{
         box-shadow: 2px 15px 20px lightseagreen;
     }

    }
    h2{
        color: lightseagreen;
        padding: 20px 0;
    }

    }
    .content{
        margin: 50px 0;
    p{
        width: 500px;
        margin: auto;
        padding: 15px;
        border: 2px solid lightseagreen;
        border-radius: 15px;
    }
        img{
            height: 100px;
            width:200px;
            border: 3px solid lightcoral;
            border-radius: 15px;
            margin-top: 50px;
            margin-bottom: 20px;
    &:hover{
         box-shadow: 2px 15px 20px lightcoral;
     }
        }
    }
    }
    footer{
        color: lightcoral;
    }

=======
<style lang="sass" scoped>
    
>>>>>>> e7121d763fbcac1029c789dc2d3a309152ac33b4
</style>
