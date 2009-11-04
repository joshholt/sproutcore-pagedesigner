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
        nowShowingBinding: 'Redbull.fileController.editorMode'
      })
      
    }),
    
    toolBar: SC.ToolbarView.design(SC.Border, {
      anchorLocation: SC.ANCHOR_TOP,
      borderStyle: SC.BORDER_BOTTOM,

      childViews: 'editorMode save title'.w(),
      
      editorMode: SC.SegmentedView.design({
        layout: {left: 60, top: 4, height: 24, width: 250},
        itemTitleKey: 'title',
        itemActionKey: 'action',
        itemTargetKey: 'target',
        itemValueKey: 'value',
        items: [{title: 'Bespin Editor', target: Redbull.fileController, action: 'bespinEditor', value: 'bespinEditor'},
                {title: 'Page Designer', target: Redbull.fileController, action: 'pageDesigner', value: 'pageDesigner'}],
        valueBinding: 'Redbull.fileController.editorMode'
      }),
      
      title: SC.LabelView.design({
        layout: {centerX: 0, top: 4, height: 24, width: 150},
        valueBinding: SC.Binding.oneWay('Redbull.fileController.name')
      }),
      
      save: SC.ButtonView.design({
        title: 'Save',
        layout: {right: 20, top: 4, width: 100, height: 24},
        target: Redbull.fileController,
        action: 'save'
        //isEnabledBinding: 'Redbull.fileController.isDirty'
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
        exampleView: Redbull.GridItemView
        // contentValueKey: 'name'
      })
    }), 

    bottomRightView: SC.View.design({
      childViews: 'inspector thumb'.w(),
      
      inspector: SC.View.design({
        layout: {left: 30, top: 0, width: 240, bottom:30},
        childViews: ['heightLabel', 'heightBox', 'widthLabel', 
            'widthBox', 'topLabel', 'topBox', 'leftLabel', 'leftBox', 
            'bottomLabel', 'bottomBox', 'rightLabel', 'rightBox', 
            'bgColorLabel', 'bgColorBox', 'clsNamesLabel', 'clsNamesBox'],
            
        // Top Label
        topLabel: SC.LabelView.design({
          layout: { top: 10, left: 5, height: 21, width: 55},
          value: "_Top:".loc()          
        }),
        // Top Edit Box
        topBox: SC.TextFieldView.design({
          layout: { top: 35, left: 5, height: 21, width: 50},
          valueBinding: SC.Binding.from('Redbull.viewDesignerController.layoutTop')
        }),
        
        // Left Label
        leftLabel: SC.LabelView.design({
          layout: { top: 10, left: 80, height: 21, width: 55},
          value: "_Left:".loc()          
        }),
        // Left Edit Box
        leftBox: SC.TextFieldView.design({
          layout: { top: 35, left: 80, height: 21, width: 50},
          valueBinding: SC.Binding.from('Redbull.viewDesignerController.layoutLeft')
        }),
        
        // Bottom Label
        bottomLabel: SC.LabelView.design({
          layout: { top: 65, left: 5, height: 21, width: 65},
          value: "_Bottom:".loc()          
        }),
        // Bottom Edit Box
        bottomBox: SC.TextFieldView.design({
          layout: { top: 95, left: 5, height: 21, width: 50},
          valueBinding: SC.Binding.from('Redbull.viewDesignerController.layoutBottom')
        }),
        
        // Right Label
        rightLabel: SC.LabelView.design({
          layout: { top: 65, left: 80, height: 21, width: 55},
          value: "_Right:".loc()          
        }),
        // Right Edit Box
        rightBox: SC.TextFieldView.design({
          layout: { top: 95, left: 80, height: 21, width: 50},
          valueBinding: SC.Binding.from('Redbull.viewDesignerController.layoutRight')
        }),
        
        // Width Label
        widthLabel: SC.LabelView.design({
          layout: { top: 125, left: 5, height: 21, width: 55},
          value: "_Width:".loc()
        }),
        // Width Edit Box
        widthBox: SC.TextFieldView.design({
          layout: { top: 155, left: 5, height: 21, width: 50},
          valueBinding: SC.Binding.from('Redbull.viewDesignerController.layoutWidth')
        }),
        
        // Height Label
        heightLabel: SC.LabelView.design({
          layout: { top: 125, left: 80, height: 21, width: 55},
          value: "_Height:".loc()          
        }),
        // Height Edit Box
        heightBox: SC.TextFieldView.design({
          layout: { top: 155, left: 80, height: 21, width: 50},
          valueBinding: SC.Binding.from('Redbull.viewDesignerController.layoutHeight')
        }),
        
        // BG Color Label
        bgColorLabel: SC.LabelView.design({
          layout: { top: 215, left: 5, height: 21, width: 125},
          value: "_Background Color:".loc()
        }),
        // BG Color Edit Box
        bgColorBox: SC.TextFieldView.design({
          layout: { top: 235, left: 5, height: 21, width: 125},
          valueBinding: SC.Binding.from('Redbull.viewDesignerController*content.backgroundColor')
        }),
        
        // Class Names Label
        clsNamesLabel: SC.LabelView.design({
          layout: { top: 265, left: 5, height: 21, width: 125},
          value: "_Class Names:".loc()
        }),
        // Class Names Edit Box
        clsNamesBox: SC.TextFieldView.design({
          layout: { top: 285, left: 5, height: 75, width: 125},
          valueBinding: SC.Binding.from('Redbull.viewDesignerController*content.classNames'),
          isTextArea: YES
        })
         
      }),
      
     thumb: SC.ThumbView.design({
        classNames: 'thumb-view'.w(),
        layout: { bottom: 0, left: 0, width: 35, height: 30 }
      })
    
    })
  })
});
