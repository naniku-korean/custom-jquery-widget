/* Label */
(function ($, undefined ){
  // component definition
  $.widget ("mobile.appLabel", $.mobile.appBase, {
    options:{
      text: "",
      textSize: "",
      textColor: "",
      textAlign: "left",
      initSelector: "[data-role='appLabel']"
    },

    _create: function(){
      var $el = this.element, self = this, o = this.options;
      var $child = $("<div></div>");
      $child.addClass("button-text");

      $el.append($child);

      if(o.text === ""){
        o.text = "appLabel";
      }
      self.text(o.text);

      if(o.textColor !== ""){
        self.textColor(o.textColor);
      }
      if(o.textSize !== ""){
        self.textSize(o.textSize);
      }
      if(o.textAlign !== ""){
        self.textAlign(o.textAlign);
      }

      self.verticalAlignCenter(".button-text");
    }
  });

  // taking into account of the component when creating the window
  // or at the create event
  $(document).bind ("pagecreate create", function (e) {
    $.mobile.appLabel.prototype.enhanceWithin( e.target, true );
  });
}) (jQuery);