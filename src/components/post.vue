<template>
  <section>
     <ul>
        <li v-for="post in postlist">
            <div class="header-post">
                <img :src="post.img" alt="pic">
                <h2>{{post.title +" " + post.id}}</h2>
                <p class="author-post">{{post.author}}</p>
                <p class="date-post">{{post.date}}</p>
                <router-link :to="{path : '/' + post.id}">Go to the post</router-link>
            </div>
            <div class="body-post">
                <p>{{post.body}}</p>
            </div>
        </li>
     </ul>
  </section>
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
        body:  'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder or filler text. Its a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.',
        img: "http://lorempixel.com/200/100/",
        author: "Author#1",
        date: "22/06/2017"
      },
      {
        id: 2,
        title: "Lorem Ipsum",
        body: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder or filler text. Its a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.',
        img: "http://lorempixel.com/200/100/",
        author: "Author#2",
        date: "23/06/2017"
       },
      {
        id: 3,
        title: "Lorem Ipsum",
        body: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder or filler text. Its a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.',
        img: "http://lorempixel.com/200/100/",
        author: "Author#3",
        date: "24/06/2017"
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    section{
        ul{
            text-align: right;
            list-style: none;
            padding: 0;
            li{
                margin-right: 2%;
                margin-bottom: 2%;;
                text-align: left;
                max-width: 30%;
                display: inline-block;
                border: 1px solid #d7c4ff;
                background: #d7c4ff;
                border-radius: 5px;
                padding: 10px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                .header-post{
                    img{
                        display: block;
                        margin:auto;

                    }
                    a{
                        display: block;
                        text-decoration: none;
                        color: #4f675a;
                        margin: 10px 0;

                        &:hover{
                            text-shadow: 0 0 5px #000;
                         }

                    }
                    h2{
                        vertical-align: top;
                        margin-left: 10px;
                        text-align: center;
                    }
                    .author-post{
                    }
                    .date-post{
                    }
                }
                .body-post{
                    p{
                        margin: 0;
                        height: 90px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        text-align: justify;
                    }
                }
            }
        }
    }

</style>
<<<<<<< HEAD


=======
>>>>>>> dev3
