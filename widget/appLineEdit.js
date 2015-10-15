/* LineEdit */
(function ($, undefined ){
  // component definition
  $.widget ("mobile.appLineEdit", $.mobile.appBase, {
    options:{
      text: "",
      textSize: "",
      textColor: "",
      textAlign: "left",
      placeholder: "",
      initSelector: "[data-role='appLineEdit']"
    },

    _create: function(){
      var $el = this.element, self = this, o = this.options;
      var $child = $("<input></input>");
      $child.addClass("line-edit-text ");

      $el.append($child);

      if(o.text === ""){
        o.text = "appLineEdit";
      }
      self.text(o.text);

      if(o.textColor !== ""){
        self.textColor(o.textColor);
      }
      if(o.textSize !== ""){
        self.textSize(o.textSize);
      }

      if(o.placeholder !== ""){
        self.placeholder(o.placeholder);
      }

      self.textAlign(o.textAlign, ".button-text");
    },

    text: function(text){
      var $el = this.element;
      var $input = $el.find('input');
      if( arguments.length ){
        $input.val(text);
      } else {
        return $input.val();
      }
    },

    placeholder: function(text){
      var $el = this.element;
      var $input = $el.find('input');
      if( arguments.length ){
        $input.attr("placeholder", text);
      } else {
        return text;
      }
    }
  });

  // taking into account of the component when creating the window
  // or at the create event
  $(document).bind ("pagecreate create", function (e) {
    $.mobile.appLineEdit.prototype.enhanceWithin( e.target, true );
  });
}) (jQuery);