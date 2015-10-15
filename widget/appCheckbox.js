/* Checkbox */
(function ($, undefined ){
  // component definition
  $.widget ("mobile.appCheckbox", $.mobile.appBase, {
    options:{
      text: "",
      textSize: "",
      textColor: "",
      checkable: false,
      initSelector: "[data-role='appCheckbox']"
    },
    _create: function ()
    {
      var $el = this.element, self = this, o = this.options;
      this.$checkbox = $("<input type='checkbox'></input>");
      var $child = $("<label></label>");

      this.$checkbox.attr("id", $el[0].id+"_check");
      $child.attr("for", this.$checkbox[0].id);
      $child.addClass("button-text");

      $el.append(this.$checkbox);
      $el.append($child);

      if(o.text === ""){
        o.text = "checkbox";
      }
      self.text(o.text);

      if(o.textColor !== ""){
        self.textColor(o.textColor);
      }

      if(o.textSize !== ""){
        self.textSize(o.textSize);
      }

      if(o.checkable){
        this.$checkbox.attr("checked", "checked");
      }
      self.verticalAlignCenter(".button-text");
      self._attachEvent();
    },

    _attachEvent: function() {
      var $el = this.element, self = this, $checkbox = this.$checkbox, o = this.options;
      $el.change(function(){
        var check = $checkbox.prop("checked");
        o.checkable = check;
        self.checked(o.checkable);
        return false;
      });
    },

    checked: function(chk){
      var $checkbox = this.$checkbox, o = this.options;
      if( arguments[0] !== undefined ){
        if( !chk ){
          $checkbox.removeAttr("checked");
        } else {
          $checkbox.attr("checked", "checked");
        }
      } else {
        return o.checkable;
      }
    }
  });

  // taking into account of the component when creating the window
  // or at the create event
  $(document).bind ("pagecreate create", function (e) {
    $.mobile.appCheckbox.prototype.enhanceWithin( e.target, true );
  });
}) (jQuery);
