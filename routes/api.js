var express = require('express');
var router = express.Router();
var Model = require('../models/model.js');


router.get('/member', function(request, response){
    Model.find({}, function(err, resources){
        if (err){
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

router.post('/member', function(request, response){
    var member = new Model(request.body);
    member.save(function(err, resource){
        if (err){
            response.send(err).status(501);
        }else {
            response.json(resource).status(201);
        }
    });
});

router.get('/member/:id', function(request, response){
    var id = request.params.id;
    Model.findById(id, function(err, res){
        if(err){
            return response.send(err);
        } else {
            var member = resource;
            response.render('detail.ejs', {member : member})
        }
    })
})

router.delete('/memberS/:id', function(request, response){
 var id = request.params.id;
 Model.remove({_id: id}, function(err, resource){
     if(err){
         return response.send(err);
     }else {
         response.send(resource);
     }
 })
}) 

module.exports = router;