import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: 'ffffff',
                secondary: '#000000',
                bg_color: '#f8f9fc',
                pop_color: 'green'
            }
        }
    }
});
