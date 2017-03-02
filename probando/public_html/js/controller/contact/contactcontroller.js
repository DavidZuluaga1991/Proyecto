

/* global contact, comment */
contact.controller('contactcontroller', function() {
    this.clear = function () {
        this.comment.name = "";
            this.comment.email = "";
            this.comment.phone = "";
          };
});