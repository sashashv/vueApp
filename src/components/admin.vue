<template>

    <div class="wrapp">
        <form id="form">
            <ul>
                <li>
                    <span>Post body</span>
                    <textarea id = "postBody"
                              class="input"
                              type="text"
                              v-model="postBody.msg"
                              v-bind:class = "{error : !postBody.flag}"
                    ></textarea>
                </li>
                <li>
                    <span>Theme</span>
                    <input id = "theme"
                           class="input"
                           type="text"
                           v-model="theme.msg"
                           v-bind:class = "{error : !theme.flag}">
                </li>
                <li>
                    <span>Images</span>
                    <input id = "img"
                           class="input"
                           type="text"
                           v-model="image.msg"
                           v-bind:class = "{error : !image.flag}">
                </li>
                <li>
                    <span>Date</span>
                    <input id = "date"
                           class="input"
                           type="text"
                           v-model="date.msg"
                           v-bind:class = "{error : !date.flag}">
                </li>
                <li>
                    <span>Id</span>
                    <input id = "id"
                           class="input"
                           type="text"
                           v-model="id.msg"
                           v-bind:class = "{error : !id.flag}">
                </li>
                <li>
                    <span>Author</span>
                    <input id = "author"
                           class="input"
                           type="text"
                           v-model="author.msg"
                           v-bind:class = "{error : !author.flag}">
                </li>
                <li><input id="submit"
                           type="submit"
                           value="Send"
                           class="lang"
                           v-on:click="validator">
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
                postBody: {
                    flag : false,
                    msg : 'Введите Ваш пост'
                },
                theme: {
                    flag : false,
                    msg : 'Введите тему поста'
                },
                image: {
                    flag : false,
                    msg : 'Добавьте изображение'
                },
                date: {
                    flag : false,
                    msg : 'Дата поста'
                },
                id : {
                    flag : false,
                    msg : 'Уникальный ID'
                },
                author: {
                    flag : false,
                    msg : 'Автор поста'
                }
            }
        },
        methods:  {
            validator : function() {
                this.postBody.flag = this.postBody.msg !== "" && this.postBody.msg !== "Введите Ваш пост";
                this.theme.flag = this.theme.msg !== "" && this.theme.msg !== "Введите тему поста";
                this.image.flag = this.image.msg !== "" && this.image.msg !== "Добавьте изображение";
                this.date.flag = this.date.msg !== "" && this.date.msg !== "Дата поста";
                this.id.flag = this.id.msg !== "" && this.id.msg !== "Уникальный ID";
                this.author.flag = this.author.msg !== "" && this.author.msg !== "Автор поста";



                if (
                    (!this.postBody.flag) || (!this.theme.flag) ||
                    (!this.image.flag) || (!this.date.flag) ||
                    (!this.id.flag) || (!this.author.flag)) {
                    alert("error")
                }

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .error {
        background: rgba(255, 0, 0, 0.3) !important;
    }
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
                li {
                    height: 36px;
                    list-style: none;
                    text-align: left;
                    margin-top: 20px;
                    line-height: 16px;
                    span {
                        line-height: 5;
                    }
                    input {
                        margin-top: 20px;
                        border-radius: 5px 5px 5px 5px;
                        -moz-border-radius: 5px 5px 5px 5px;
                        -webkit-border-radius: 5px 5px 5px 5px;
                        border: 0px solid #000000;
                        border: 1px solid #ccc;
                        width: 204px;
                        float: right;
                        height: 32px;
                        background: -moz-linear-gradient(top, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                        background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(47%, #f6f6f6), color-stop(100%, #e0dde0));
                        background: -webkit-linear-gradient(top, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                        background: -o-linear-gradient(top, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                        background: -ms-linear-gradient(top, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                        background: linear-gradient(to bottom, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                    }
                    #submit {
                        margin: 15px auto;
                        color: white;
                        border: 2px solid #00244d;
                        width: 100px;
                        background: -moz-linear-gradient(top, #94a6d6 0%, #193d9e 64%, #011045 100%);
                        background: -webkit-gradient(left top, left bottom, color-stop(0%, #94a6d6), color-stop(64%, #193d9e), color-stop(100%, #011045));
                        background: -webkit-linear-gradient(top, #94a6d6 0%, #193d9e 64%, #011045 100%);
                        background: -o-linear-gradient(top, #94a6d6 0%, #193d9e 64%, #011045 100%);
                        background: -ms-linear-gradient(top, #94a6d6 0%, #193d9e 64%, #011045 100%);
                        background: linear-gradient(to bottom, #94a6d6 0%, #193d9e 64%, #011045 100%);

                    }
                    textarea {
                        margin-top: 20px;
                        border-radius: 5px 5px 5px 5px;
                        -moz-border-radius: 5px 5px 5px 5px;
                        -webkit-border-radius: 5px 5px 5px 5px;
                        border: 1px solid #ccc;
                        float: right;
                        width: 200px;
                        resize: none;
                        background: -moz-linear-gradient(top, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                        background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(47%, #f6f6f6), color-stop(100%, #e0dde0));
                        background: -webkit-linear-gradient(top, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                        background: -o-linear-gradient(top, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                        background: -ms-linear-gradient(top, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                        background: linear-gradient(to bottom, #ffffff 0%, #f6f6f6 47%, #e0dde0 100%);
                    }
                }
            }
        }
    }

</style>
