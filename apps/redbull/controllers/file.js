// ==========================================================================
// Project:   Redbull.file
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Redbull */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Redbull.PAGE_DESIGNER = "pageDesigner";
Redbull.BESPIN = "bespin";

Redbull.fileController = SC.ObjectController.create(
/** @scope Redbull.fileController.prototype */ {

  contentBinding: 'Redbull.filesController.selection',
  contentBindingDefault: SC.Binding.single(),
  
  
  _content_observer: function(){
    var content = this.get('content');
    if(content.refresh && content.get('isFile')) content.refresh();
  }.observes('content'),
  
  state: null,
  editorMode: '',
  
  // ..........................................................
  // State information
  // 
  init: function(){
    sc_super();
    this.set('state', Redbull.PAGE_DESIGNER);
    this.set('editorMode', "pageDesigner");
    
  },
  
  pageDesigner: function(){
    var state = this.get('state');
    switch(state){
      case Redbull.BESPIN:
        this.set('state', Redbull.PAGE_DESIGNER);
        this.set('editorMode', "pageDesigner");
        break;
      default:
        console.log("RedBull.fileController#pageDesigner not handled in current state %@".fmt(state));
        break;
    }
  },
  
  bespinEditor: function(){
    var state = this.get('state');
    switch(state){
      case Redbull.PAGE_DESIGNER:
        this.set('state', Redbull.BESPIN);
        this.set('editorMode', "bespinEditor");
        break;
      default:
        console.log("RedBull.fileController#bespinEditor not handled in current state %@".fmt(state));
        break;
    }
  },
  
  save: function(){
    var state = this.get('state'), content, designContent;
    switch(state){
      case Redbull.BESPIN:
        content = this.get('content');
        if(content){
          content.set('body', Redbull.bespinEditor.getContent());
          content.commit();
        }
      
        break;
      case Redbull.PAGE_DESIGNER:
        content = this.get('content');
        if(content){
          designContent = this.get('currentDesign');
          designContent = designContent.emitDesign();
          content.set('body', designContent);
          content.bodyChanged();
          content.commit();
        }
        break;
      default:
        console.log("RedBull.fileController#save not handled in current state %@".fmt(state));
      
        break;
    }
  }
  
  
}) ;
