import axios from 'axios';

export default {

    // Get articles
    getArticles: function (searchTerm, startYear, endYear) {
        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931',
                'q': searchTerm,
                'begin_date': startYear + "0101",
                'end_date': endYear + "0101"
            }
        })
    },

    // // Post saved articles
    // saveArticles: function () {
    //     axios.post('/saved', {
    //         pkey: title,
    //         title: title,
    //         date: date,
    //         link: url,
    //     })
    // }
}