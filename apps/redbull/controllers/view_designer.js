//============================================================================
// Redbull.viewDesignerController
//============================================================================
/*globals Redbull*/
sc_require('core');
/**

  This controller will hold the designer for the currently selected view
  @extends SC.ObjectController
  @author Josh Holt
  @version 0.1
  @since 0.1

*/

Redbull.viewDesignerController = SC.ObjectController.create({
  contentBinding: 'Redbull.viewDesignersController.content.selection',
  contentBindingDefault: SC.Binding.single(),
  
  layoutHeight: function(key,value){
    var content = this.get('content');
    if (!content) return null;
    if (!value || SC.none(value)) {
      return content.get('layoutHeight');
    } else {
      if (SC.typeOf(value) === SC.T_STRING) {
        content.set('layoutHeight',parseInt(value,10));
      } else if (SC.typeOf(value) === SC.T_NUMBER) {
        content.set('layoutHeight',value);
      }
    }
    return content.get('layoutHeight');
  }.property().cacheable(),
  
  layoutWidth: function(key,value){
    var content = this.get('content');
    if (!content) return null;
    if (!value || SC.none(value)) {
      return content.get('layoutWidth');
    } else {
      if (SC.typeOf(value) === SC.T_STRING) {
        content.set('layoutWidth',parseInt(value,10));
      } else if (SC.typeOf(value) === SC.T_NUMBER) {
        content.set('layoutWidth',value);
      }
    }
    return content.get('layoutWidth');
  }.property().cacheable(),
  
  layoutTop: function(key,value){
    var content = this.get('content');
    if (!content) return null;
    if (!value || SC.none(value)) {
      return content.get('layoutTop');
    } else {
      if (SC.typeOf(value) === SC.T_STRING) {
        content.set('layoutTop',parseInt(value,10));
      } else if (SC.typeOf(value) === SC.T_NUMBER) {
        content.set('layoutTop',value);
      }
    }
    return content.get('layoutTop');
  }.property().cacheable(),
  
  layoutBottom: function(key,value){
    var content = this.get('content');
    if (!content) return null;
    if (!value || SC.none(value)) {
      return content.get('layoutBottom');
    } else {
      if (SC.typeOf(value) === SC.T_STRING) {
        content.set('layoutBottom',parseInt(value,10));
      } else if (SC.typeOf(value) === SC.T_NUMBER) {
        content.set('layoutBottom',value);
      }
    }
    return content.get('layoutBottom');
  }.property().cacheable(),
  
  layoutRight: function(key,value){
    var content = this.get('content');
    if (!content) return null;
    if (!value || SC.none(value)) {
      return content.get('layoutRight');
    } else {
      if (SC.typeOf(value) === SC.T_STRING) {
        content.set('layoutRight',parseInt(value,10));
      } else if (SC.typeOf(value) === SC.T_NUMBER) {
        content.set('layoutRight',value);
      }
    }
    return content.get('layoutRight');
  }.property().cacheable(),
  
  layoutLeft: function(key,value){
    var content = this.get('content');
    if (!content) return null;
    if (!value || SC.none(value)) {
      return content.get('layoutLeft');
    } else {
      if (SC.typeOf(value) === SC.T_STRING) {
        content.set('layoutLeft',parseInt(value,10));
      } else if (SC.typeOf(value) === SC.T_NUMBER) {
        content.set('layoutLeft',value);
      }
    }
    return content.get('layoutLeft');
  }.property().cacheable(),
  
  layoutCenterX: function(key,value){
    var content = this.get('content');
    if (!content) return null;
    if (!value || SC.none(value)) {
      return content.get('layoutCenterX');
    } else {
      if (SC.typeOf(value) === SC.T_STRING) {
        content.set('layoutCenterX',parseInt(value,10));
      } else if (SC.typeOf(value) === SC.T_NUMBER) {
        content.set('layoutCenterX',value);
      }
    }
    return content.get('layoutCenterX');
  }.property().cacheable(),
  
  layoutCenterX: function(key,value){
    var content = this.get('content');
    if (!content) return null;
    if (!value || SC.none(value)) {
      return content.get('layoutCenterX');
    } else {
      if (SC.typeOf(value) === SC.T_STRING) {
        content.set('layoutCenterX',parseInt(value,10));
      } else if (SC.typeOf(value) === SC.T_NUMBER) {
        content.set('layoutCenterX',value);
      }
    }
    return content.get('layoutCenterX');
  }.property().cacheable()
});