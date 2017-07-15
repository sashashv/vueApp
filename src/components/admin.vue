<template>
    <div class="wrapp">
        <form id="form">
            <ul>
                <li>Post body
                    <textarea id = "postBody" class="input" type="text" value = ""></textarea>
                </li>
                <li>Theme
                    <input id = "theme" class="input" type="text" value = "">
                </li>
                <li>Images
                    <input id = "img" class="input" type="text" value = "">
                </li>
                <li>Date
                    <input id = "date" class="input" type="text" value = "">
                </li>
                <li>Id
                    <input id = "id" class="input" type="text" value = "">
                </li>
                <li>Author
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

<style lang="scss" scoped>
    .wrapp {
        min-height: 200px;
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
                li {
                    list-style: none;
                    text-align: left;
                    input {
                        float: right;
                        width: 200px;
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
