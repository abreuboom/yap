import tweetabase from './api';

export default (app) => {
    app.route('/tweets')
        .get(tweetabase.getAllTweets);
};