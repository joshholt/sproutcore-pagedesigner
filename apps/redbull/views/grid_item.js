// ==========================================================================
// Project:   Redbull.GridItemView
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Redbull */

/** @class

  This view represents one items in the grid of editable objects in the 
  bottom toolbar on the page design view.

  @extends SC.View
*/
Redbull.GridItemView = SC.View.extend(SC.Control,
/** @scope Redbull.GridItemView.prototype */ {
  
  content: null,
  
  render: function(context, firstTime) {
    var content = this.get('content'), objType, icon, title;
    if (content && content.get('type')) {
      objType = content.get('type');
      context = context.begin('label').addClass('object-grid-item');
      title = content.get('name');
      // TODO get good icons for the grid items...
      switch(objType){
        case 'view':
          icon = 'sc-icon-document-24';
          break;
        case 'page':
          icon = 'sc-icon-options-24';
          break;
        default:
          icon = 'sc-icon-tools-24';
          break;
      }
      this.renderIcon(context,firstTime, icon);
      if (!title || SC.none(title)) title = '(No Name)';
      context.push(title);
      context = context.end();
    }
  },
  
  renderIcon: function(context, firstTime, icon){
    var imgURL = static_url('blank');
    context.begin('img').attr('src',imgURL).addClass(icon).end();
  }

});
