import mongoose, {
    Schema
} from 'mongoose';

const TweetScheme = new Schema({
    username: {
        type: String,
        required: "Who tweeted this tweet?"
    },
    text: {
        type: String,
        required: "What is the tweet?"
    },
    timestamp: {
        type: Date,
        default: new Date
    }
});

export default mongoose.model('Tweet', TweetScheme);