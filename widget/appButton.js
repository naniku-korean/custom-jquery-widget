/* button */
(function ($, undefined ){
  // component definition
  $.widget ("mobile.appButton", $.mobile.appBase, {
    options:{
      text: "",
      textSize: "",
      textColor: "",
      initSelector: "[data-role='appButton']"
    },
    _create: function ()
    {
      var $el = this.element, self = this, o = this.options;
      var $child = $("<div></div>");
      $child.addClass("button-text");

      $el.append($child);

      if(o.text === ""){
        o.text = "appButton";
      }
      self.text(o.text);

      if(o.textColor !== ""){
        self.textColor(o.textColor);
      }

      if(o.textSize !== ""){
        self.textSize(o.textSize);
      }

      $el.addClass("app-button-normal");
      self.verticalAlignCenter(".button-text");
      self._attachEvent();
    },

    _onVMouseDown: function(e) {
      var $el = this.element, o = this.options;
      $el.removeClass("app-button-normal").addClass("app-button-press");
      e.preventDefault();
    },

    _onVMouseUp: function(e) {
      var $el = this.element, o = this.options;
      if(e.type !== "vmouseout"){
        $el.removeClass("app-button-press").addClass("app-button-normal");
      }
    },

    _onVClick: function(e) {
      var self = this;
      self._trigger("vclick", e);
      return false;
    }
  });

  // taking into account of the component when creating the window
  // or at the create event
  $(document).bind ("pagecreate create", function (e) {
    $.mobile.appButton.prototype.enhanceWithin( e.target, true );
  });
}) (jQuery);