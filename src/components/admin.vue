<template>
    <div class="wrapp">
        <form id="form">
            <ul>
                <li><span>Post body</span>
                    <textarea id = "postBody" class="input" type="text" value = ""></textarea>
                </li>
                <li><span>Theme</span>
                    <input id = "theme" class="input" type="text" value = "">
                </li>
                <li><span>Images</span>
                    <input id = "img" class="input" type="text" value = "">
                </li>
                <li><span>Date</span>
                    <input id = "date" class="input" type="text" value = "">
                </li>
                <li><span>Id</span>
                    <input id = "id" class="input" type="text" value = "">
                </li>
                <li><span>Author</span>
                    <input id = "author" class="input" type="password" value = "">
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .wrapp {
        height: 400px;
        background: -moz-linear-gradient(top, #eff5f7 0%, #9ceaff 99%, #bce0ee 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, #eff5f7), color-stop(99%, #9ceaff), color-stop(100%, #bce0ee));
        background: -webkit-linear-gradient(top, #eff5f7 0%, #9ceaff 99%, #bce0ee 100%);
        background: -o-linear-gradient(top, #eff5f7 0%, #9ceaff 99%, #bce0ee 100%);
        background: -ms-linear-gradient(top, #eff5f7 0%, #9ceaff 99%, #bce0ee 100%);
        background: linear-gradient(to bottom, #eff5f7 0%, #9ceaff 99%, #bce0ee 100%);
        #form {
            width: 400px;
            margin: 0 auto;
            ul {
                /*display: flex;*/
                li {
                    vertical-align: middle;
                    height: 36px;
                    list-style: none;
                    text-align: left;
                    input {
                        width: 202px;
                        float: right;
                        height: 30px;
                        /*margin-top: 15px;*/
                    }
                    textarea {
                        float: right;
                        width: 200px;
                    }
                }
            }
        }
    }

</style>
