

/* global contact */
contact.controller('contactcontroller', function () {
    this.comments = [];
    this.comment = {};
    this.clear = function () {
        this.comment.name = null;
        this.comment.email = null;
        this.comment.phone = null;
        this.comment.body = null;
        this.contactform.$valid = false;
    };
    
    this.ok = function () {
        if(this.contactform.$invalid) {
            alert ('Llenar formulario');
        }else{
            alert ('todo esta bien');
        }
    };
    
    this.addcomments = function (){
       this.comment.date = Date.now();
       this.comments.push(this.comment);
       this.comment = {};
    };
    
});