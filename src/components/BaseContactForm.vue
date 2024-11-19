<script>
import axios from 'axios';

export default {
    name:"BaseContactForm",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            apiUrl : "http://127.0.0.1:8000/api/contact-us",
            errors : [],
        }
    },
    methods:{
        sendContactForm(){
            const formData = {
                name : this.name,
                email : this.email,
                message: this.message
            }

            axios.post(this.apiUrl, formData)
            .then((response) => {
                console.log(response);
                if (response.data.success === false){
                    console.log(response.data.errors);
                    this.errors = response.data.errors;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
}
</script>

<template>
 <section class="p-5">
        <div class="container">
            <div class="row justify-content-center">
                <form class="col-12 col-md-8 col-lg-6" @submit.prevent="sendContactForm">

                    <div class="mb-3">
                        <label for="name" class="form-label">
                            Type your name:
                        </label>
                        <input type="text" name="name" id="name" class="form-control" v-model="name">
                        <div v-if="errors.name" class="alert alert-danger">
                            <ul>
                                <li v-for="error in errors.name">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">
                            Type your email:
                        </label>
                        <input type="email" name="email" id="email" class="form-control" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">
                            Type your message:
                        </label>
                        <textarea name="message" id="message" cols="30" rows="10" class="form-control" v-model="message">
                        </textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Send new contact
                    </button>
                </form>
            </div>

        </div>
    </section>
</template>

<style scoped>
</style>