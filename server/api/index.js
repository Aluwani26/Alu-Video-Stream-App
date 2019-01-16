'use strict';

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/videos',
        handler: function (request, reply) {

            var data = {
                        "videos":
                        [
                            {"title":"BLACK COFFEE FT TOSHI - Buya","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=mcFdkNVLo3Q",'duration': "7:05"},
                            {"title":"Kaylow - The Soul Cafe","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "4:05"},
                            { "title":"test 3","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:05"},
                            { "title": "test 4","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:09"},
                            {"title": "test 5","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:05"},
                            { "title":"test 3","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:05"},
                            { "title": "test 4","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:09"},
                            {"title": "test 5","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:05"},
                            { "title": "test 4","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:09"},
                            {"title": "test 5","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:05"},
                            { "title":"test 3","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:05"},
                            { "title": "test 4","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:09"},
                            {"title": "test 5","thumbnail" : "https://marketingland.com/wp-content/ml-loads/2014/08/video-tv3-ss-1920.jpg","url":"https://www.youtube.com/watch?v=Inp27NR2a44",'duration': "3:05"}

                        ]
                    };


            reply(data)
        }
    });


    next();
};


exports.register.attributes = {
    name: 'api'
};
