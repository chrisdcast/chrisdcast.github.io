const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MONGO CONNECTION OPEN');
    })
    .catch((err) => {
        console.log('On no, error!!!');
        console.log(err);
    })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});

    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;

        const camp = new Campground({
            author: '646fd8b594ab6c2a2c1e27fb',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/djmnwofpc/image/upload/v1685389025/YelpCamp/e7bekx1xokr3p4grn4i7.jpg',
                    filename: 'YelpCamp/e7bekx1xokr3p4grn4i7',
                },
                {
                    url: 'https://res.cloudinary.com/djmnwofpc/image/upload/v1685389025/YelpCamp/unka46fddytzrxnqbxgr.jpg',
                    filename: 'YelpCamp/unka46fddytzrxnqbxgr',
                },
                {
                    url: 'https://res.cloudinary.com/djmnwofpc/image/upload/v1685389025/YelpCamp/cywba52haixbhmdhbjlo.jpg',
                    filename: 'YelpCamp/cywba52haixbhmdhbjlo',
                },
                {
                    url: 'https://res.cloudinary.com/djmnwofpc/image/upload/v1685389025/YelpCamp/uivp2c642jqlmqhsc80h.jpg',
                    filename: 'YelpCamp/uivp2c642jqlmqhsc80h',
                }
            ],
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt fugiat excepturi sapiente? Nesciunt aliquam in quis cum non numquam suscipit minus perspiciatis maiores ipsum, iure corporis eum quisquam ratione? Saepe.',
            price: price
        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log('database closed');
}) 