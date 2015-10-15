/* ImageButton */
(function ($, undefined ){
  // component definition
  $.widget ("mobile.appImageButton", $.mobile.appBase, {
    options:{
      text: "",
      textSize: "",
      textColor: "",
      normalImage: "",
      pressImage: "",
      initSelector: "[data-role='appImageButton']"
    },

    _create: function ()
    {
      var $el = this.element, self = this, o = this.options;
      var $child = $("<div></div>");
      $child.addClass("button-text");

      $el.append($child);

      if(o.text === ""){
        o.text = "appImageButton";
      }
      self.text(o.text);

      if(o.textColor !== ""){
        self.textColor(o.textColor);
      }

      if(o.textSize !== ""){
        self.textSize(o.textSize);
      }

      if(o.normalImage  === ""){
        $el.addClass("app-button-normal");
      }

      self.verticalAlignCenter(".button-text");
      self._attachEvent();
    },

    _onVMouseDown: function(e) {
      var $el = this.element, o = this.options;
      if(o.pressImage === ""){
        $el.removeClass("app-button-normal").addClass("app-button-press");
      } else {
        $el.css("background-image", o.pressImage);
      }
      e.preventDefault();
    },

    _onVMouseUp: function(e) {
      var $el = this.element, o = this.options;
      if(e.type !== "vmouseout"){
        if(o.normalImage === ""){
          $el.removeClass("app-button-press").addClass("app-button-normal");
        } else {
          $el.css("background-image", o.normalImage);
        }
      }
    },

    _onVClick: function(e) {
      var self = this, o = this.options;
      self._trigger("vclick", e);
      return false;
    }
  });

  // taking into account of the component when creating the window
  // or at the create event
  $(document).bind ("pagecreate create", function (e) {
    $.mobile.appImageButton.prototype.enhanceWithin( e.target, true );
  });
}) (jQuery);