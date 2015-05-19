

$( document ).ready(function() {
	var Message = Backbone.Model.extend({});

	var MessageStore = Backbone.Collection.extend({
	 model: Message,
	   url: 'http://localhost:3000/messages'
	});
	var messages = new MessageStore;


	var MessageView = Backbone.View.extend({

		tagName: 'tr',
		template: _.template($("#message").html()),

	   events: { "submit #chatForm" : "handleNewMessage" }

	  , handleNewMessage: function(data) {
	    var inputField = $('input[name=newMessageString]');
	    messages.create({content: inputField.val()});
	    inputField.val('');
	  }

	  , render: function() {

	    var data  = _.map(messages.models,function(msg,i){return msg.attributes})
	    $("#chatHistory").html(this.template({msg:data}));
	   	return this;

	  }

	});

	messages.bind('add', function(message) {
	  messages.fetch({success: function(){view.render();}});
	});

	var view = new MessageView({el: $('#chatArea')});

	setInterval(function(){
	  messages.fetch({success: function(){view.render();}});
	},1000)

});

