/* Radio */
(function ($, undefined ){
  // component definition
  $.widget ("mobile.appRadio", $.mobile.appBase, {
    options:{
      text: "",
      textSize: "",
      textColor: "",
      group: "",
      checkable: false,
      initSelector: "[data-role='appRadio']"
    },
    _create: function ()
    {
      var $el = this.element, self = this, o = this.options;
      this.$radio = $("<input type='radio'></input>");
      var $child = $("<label></label>");

      this.$radio.attr("id", $el[0].id+"_check");
      $child.attr("for", this.$radio[0].id);
      $child.addClass("button-text");

      $el.append(this.$radio);
      $el.append($child);

      if(o.text === ""){
        o.text = "Radio";
      }
      self.text(o.text);

      if(o.textColor !== ""){
        self.textColor(o.textColor);
      }

      if(o.textSize !== ""){
        self.textSize(o.textSize);
      }

      if(o.group !== ""){
        self.grouped(o.group);
      }

      if(o.checkable){
        this.$radio.attr("checked", "checked");
      }
      self.verticalAlignCenter(".button-text");
      self._attachEvent();
    },

    _attachEvent: function() {
      var $el = this.element, self = this, $radio = this.$radio, o = this.options;
      $el.change(function(){
        var check = $radio[0].checked;
        o.checkable = check;
        self.checked(o.checkable);
        return false;
      });
    },

    grouped: function(group){
      var $radio = this.$radio, o = this.options;
      if( arguments.length ){
        $radio.attr("name", group);
      } else {
        return o.group;
      }
    },

    checked: function(chk){
      var $radio = this.$radio, o = this.options;
      if( arguments[0] !== undefined ){
        if( !chk ){
          $radio.removeAttr("checked");
        } else {
          $radio.attr("checked", "checked");
        }
      } else {
        return o.checkable;
      }
    }
  });

  // taking into account of the component when creating the window
  // or at the create event
  $(document).bind ("pagecreate create", function (e) {
    $.mobile.appRadio.prototype.enhanceWithin( e.target, true );
  });
}) (jQuery);

