

/* global contact */
contact.controller('contactcontroller', function () {
    this.comments = [];
    this.clear = function () {
        this.comment.name = "";
        this.comment.email = "";
        this.comment.phone = "";
    };
    
    this.addcomments = function (){
        alert("pro");
       this.comment.date = Date.now();
       this.comments.push(comment.body);
    };
    
});