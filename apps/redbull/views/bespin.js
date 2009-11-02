// ==========================================================================
// Project:   Redbull.BespinView
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Redbull bespin */
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


  _bv_editor_creator: function(){
    console.log('isVisible in window');
    if(!this.bespinEditor && this.$('').length){
      this.bespinEditor = new bespin.editor.Component('editor', {
            language: "js",
            loadfromdiv: true,
            set: { tabsize: 2}

      });
      this.bespinEditor.onchange(function(){this.bespinEditorContentChanged();});
    }
  }.observes('isVisibleInWindow'),
  
  _content_changed: function(){
    this._updateEditor();
  }.observes('content'),
  
  _content_state_changed: function(){
    this._updateEditor();
  }.observes('*content.state'),
  
  _updateEditor: function(){
    console.log('updating editor');
    var c = this.get('content');
    if(c && c.get('body') && this.bespinEditor) this.bespinEditor.setContent(c.get('body'));
  }
  
  
});
