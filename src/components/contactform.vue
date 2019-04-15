<template>
    <div class="container">
        <section class="is-fullheight-with-navbar">
            <div id="gear-padding">
                <div class="columns">
                    <div class="column is-half">
                        <form @submit.prevent="handleSubmit">
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Name">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="Email">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Message</label>
                                <div class="control">
                                    <textarea class="textarea" type="text" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="control">
                                <button class="button is-link" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div class="column is-half">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101039.41048252548!2d-113.17209032501226!3d37.684887739071605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b5617fe05ec2d1%3A0xef14cae28073d1e9!2sCedar+City%2C+UT!5e0!3m2!1sen!2sus!4v1554684202521!5m2!1sen!2sus" width="auto" height="800px" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
