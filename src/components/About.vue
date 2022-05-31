<template>
    <v-container
        class="pa-16"
    >
        <h1
            class="title_class pa-8 pb-0"
        >
        About Me
        </h1>
        <p
            class="paragraph_class pa-8 pt-0"
        >
            My name is Cutler Thayer, and I am currently a student at Iowa State University studying Computer Engineering. 
            I have a passion for development of both hardware and software, and I would like to use the skills I have learned 
            to make the world a better place.
        </p>
    </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({

})
</script>

<style scoped>
* {
    background-color: primary;
}

.title_class {
    font-family: Poppins, sans-serif;
    font-size: 50px;
    color: green;
}

.paragraph_class {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 24px;
}
</style>