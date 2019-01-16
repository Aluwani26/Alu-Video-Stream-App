'use strict';
var Handlebars = require('handlebars');
exports.register = function (server, options, next) {


    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            server.inject('/api/videos', function (response) {

                 var source="<ul class='list-unstyled video-list-thumbs row'>"+
                     "{{#videos}}<li class='col-lg-3 col-sm-4 col-xs-6'>"+
                     "  <a href='{{url}}' title='{{title}}'>\n" +
                     "<img src='{{thumbnail}}' alt='Barca' class='img-responsive' height='130px' />\n" +
                     "<h2>{{title}}</h2>\n" +
                     "<span class='glyphicon glyphicon-play-circle'></span>\n" +
                     "<span class='duration'>{{duration}}</span>\n" +
                     "</a></li>" +
                    "{{/videos}}</ul>";
                    var template = Handlebars.compile(source);
                    const payload = JSON.parse(response.payload || {});
                    var result = template(payload);
                    reply.view('index',{content:result});

            });
        }
    });

    server.route({
        method : 'GET',
        path: '/{filename*}',
        handler : {

            directory : {
                path :__dirname
            }

        }
    });


    next();
};


exports.register.attributes = {
    name: 'web',
    dependencies: 'inert'
};
