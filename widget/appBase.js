
(function ($, undefined ){
  // component definition
  $.widget ("mobile.appBase", $.mobile.widget, {
    options: {
      enable: true,
      visible: true
    },

    _create: function (){
      var o = this.options;

      this.enable(o.enable);
      this.visible(o.visible);
    },

    _onVMouseDown: function(e) {
    },

    _onVMouseMove: function(e) {
    },

    _onVMouseUp: function(e) {
    },

    _onVClick: function(e) {
    },

    _attachEvent: function() {
      var $el = this.element, self = this;

      $el.bind({
        "vmousedown": function(e) {
          if(self.enable() && self._getAncestorEnable()) {
            return self._onVMouseDown(e);
          }
        },
        "vmousemove": function(e) {
          if(self.enable() && self._getAncestorEnable()) {
            return self._onVMouseMove(e);
          }
        },
        "vmouseup vmousecancel vmouseout": function(e) {
          if(self.enable() && self._getAncestorEnable()) {
            return self._onVMouseUp(e);
          }
        },
        "vclick": function(e) {
          // mouse일 때만 확인하면 됨.
          if(!(self.enable() && self._getAncestorEnable())) {
            e.stopImmediatePropagation();
            return;
          }
          return self._onVClick(e);
        }
      });
    },
    _getAncestorEnable: function() {
      var $el = this.element;
      var ret = true;

      $el.parents("[data-role^='app']").each(function() {
        if($(this).hasClass("app-base-disabled")) {
          ret = false;
          return false;
        }
      });
      return ret;
    },

    enhanceWithin: function( target, useKeepNative ) {
      this.enhance( $( this.options.initSelector, $( target )), useKeepNative );
    },

    enhance: function( targets, useKeepNative ) {
      var page, keepNative, $widgetElements = $( targets ), self = this;
      $widgetElements[ this.widgetName ]();
    },

    /**
     * 위젯의 활성화 여부를 설정하거나 조회한다.
     *
     * @method enable
     * @param {Boolean} enable 위젯의 활성화를 설정할 값
     * @return {Boolean} 위젯에 설정된 활성화 값
     */
    enable: function( enable ) {
      var o = this.options;
      if ( arguments[0] !== undefined ) {
        o.enable = enable;
        if(enable === true) {
          this.element.removeClass("app-base-disabled");
        }
        else {
          this.element.addClass("app-base-disabled");
        }
      }
      else {
        return o.enable;
      }
      return this;
    },

    /**
     * 위젯의 보여짐/숨김 여부를 설정하거나 조회한다.
     *
     * @method visible
     * @param {Boolean} visible 위젯의 보여짐/숨김 여부를 설정할 값
     * @return {Boolean} 위젯에 설정된 보여짐/숨김 여부
     */
    visible: function( visible ) {
      var $el = this.element, self = this, o = this.options, cls = this.classes;
      if ( arguments[0] !== undefined ) {
        o.visible = visible;
        if(visible === true) {
          this.element.removeClass("app-base-hidden");
        }
        else {
          this.element.addClass("app-base-hidden");
        }
      }
      else {
        return o.visible;
      }
      return this;
    },

    backgroundImage: function(val){
      var $el = this.element;
      if( arguments.length ){
        $el.css("backgroundImage", "url('"+val+"')");
      } else {
        return $el.css("backgroundImage");
      }
    },

    //@param bool val color or image
    backgroundColor: function(val){
      var $el = this.element;
      if( arguments.length ){
        $el.css("backgroundColor", val);
      } else {
        return $el.css("backgroundColor");
      }
    },

    //@param {string} text
    //@param {string} selector jquerySelector OR cssSelector
    text: function(text){
      var $el = this.element;
      var $child = $el.find(".button-text");
      if( arguments.length ){
        $child.text(text);
      } else {
        return $child.text();
      }
    },

    textColor: function(color){
      var $el = this.element;
      if( arguments.length ){
        $el.css("color", color);
      } else {
        return $el.css("color");
      }
    },

    textSize: function(size){
      var $el = this.element;
      var sizeN = "";
      if( typeof size === "string"){
        sizeN = size.replace("px", "");
      } else {
        sizeN = size;
      }
      if( arguments.length ){
        $el.css("font-size", sizeN);
      } else {
        return $el.css("font-size");
      }
    },

    textAlign: function(align){
      var $el = this.element;
      var $child = $el.find(".button-text");
      if( arguments.length ){
        $child.css("textAlign", align);
      } else {
        return $child.css("textAlign");
      }
    },

    //@desecription vertical text align.
    //@param {string} selector
    verticalAlignCenter: function(selector){
      var $el = this.element;
      var $selector = $el.find(selector);
      if( $selector !== undefined ){
        var vHeight = $el.height();
        $selector.css("line-height", vHeight+"px");
      }
    }
  });
}) (jQuery);
