// ==========================================================================
// Project:   Redbull - mainPage
// Copyright: ©2009 Mike Ball
// ==========================================================================
/*globals Redbull */
require('views/bespin');

// This page describes the main user interface for your application.  
Redbull.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'split toolBar'.w(),
    
    split: SC.SplitView.design({
      layout: { left: 0, top: 32, right: 0, bottom: 0 },
      layoutDirection: SC.LAYOUT_HORIZONTAL,
      defaultThickness: 0.88, // a number between 0 and 1.0
      autoresizeBehavior: SC.RESIZE_TOP_LEFT,
      dividerThickness: 2,
      topLeftMinThickness: 150,
    
      topLeftView: SC.View.design({
        childViews: 'fileList thumb'.w(),
        
        fileList: SC.ScrollView.design({
          layout: { top: 0, bottom: 32, left: 0, right: 0 },
          hasHorizontalScroller: NO,
          contentView: SC.ListView.design({
            contentValueKey: 'name',
            contentBinding: 'Redbull.filesController.arrangedObjects',
            selectionBinding: 'Redbull.filesController.selection'
         })
        }), 
        thumb: SC.ThumbView.design({
          classNames: 'thumb-view'.w(),
          layout: { bottom: 0, right: 0, width: 35, height: 30 }
        })
        
      }),
      
      bottomRightView: SC.ContainerView.design({
        nowShowingBinding: 'Redbull.editorMode'
      })
      
    }),
    
    toolBar: SC.ToolbarView.design(SC.Border, {
      anchorLocation: SC.ANCHOR_TOP,
      borderStyle: SC.BORDER_BOTTOM,

      childViews: 'editorMode save title'.w(),
      
      editorMode: SC.SegmentedView.design({
        layout: {left: 60, top: 4, height: 24, width: 250},
        items: ['bespinEditor', 'pageDesigner'],
        valueBinding: 'Redbull.editorMode'
      }),
      
      title: SC.LabelView.design({
        layout: {centerX: 0, top: 4, height: 24, width: 150},
        valueBinding: SC.Binding.oneWay('Redbull.fileController.name')
      }),
      
      save: SC.ButtonView.design({
        title: 'Save',
        layout: {right: 20, top: 4, width: 100, height: 24},
        target: Redbull.fileController,
        action: 'save',
        isEnabledBinding: 'Redbull.fileController.isDirty'
      })
      
    })
    
  }),
  
  bespinEditor: Redbull.BespinView.design({
    contentBinding: 'Redbull.fileController.content'
  }),
  
  pageDesigner: SC.SplitView.design({
    layout: { left: 0, top: 0, right: 0, bottom: 0 },
    layoutDirection: SC.LAYOUT_HORIZONTAL,
    defaultThickness: 0.25, // a number between 0 and 1.0
    autoresizeBehavior: SC.RESIZE_TOP_LEFT,
    dividerThickness: 2,
  
    topLeftView: SC.View.design({
      childViews: 'container viewList'.w(),
      
      container: SC.ContainerView.design({
        layout: {top: 0, left: 0, right: 0, bottom: 50},
        contentViewBinding:'Redbull.designController.view'
      }),
      
      viewList: SC.GridView.design({
        layout: {left:0, right: 0, bottom: 0, height: 50},
        contentBinding: 'Redbull.designsController',
        selectionBinding: 'Redbull.designsController.selection',
        contentValueKey: 'name'
      })
    }), 

    bottomRightView: SC.View.design({
      childViews: 'inspector thumb'.w(),
      
      inspector: SC.View.design({
        layout: {right: 0, top: 0, width: 200, bottom:30}
      }),
      
     thumb: SC.ThumbView.design({
        classNames: 'thumb-view'.w(),
        layout: { bottom: 0, left: 0, width: 35, height: 30 }
      })
    
    })
  })
});
