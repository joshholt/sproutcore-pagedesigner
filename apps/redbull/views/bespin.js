// ==========================================================================
// Project:   Redbull.BespinView
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Redbull */
require('core');
/** @class

  Thanks to Geoffrey Donaldson
  @extends SC.View
*/
Redbull.BespinView = SC.View.extend(
/** @scope Redbull.BespinView.prototype */ {

  tagName: 'div',
  classNames: ['sc-bespin-view'],
  layerId: "editor",
  
  content: null,
  
  _content_changed: function(){
    var c = this.get('content');
    if(c && c.get('body') && Redbull.bespinEditor) Redbull.bespinEditor.setContent(c.get('body'));
    
  }.observes('content')
});
