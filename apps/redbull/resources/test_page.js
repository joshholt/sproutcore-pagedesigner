// ==========================================================================
// Project:   Redbull.testPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Redbull */

// This page describes a part of the interface for your application.
Redbull.testPage = SC.Page.design({

  // Add your views here.  Ex:
  needsDesigner: YES,
  mainView: SC.View.design({
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: [
      SC.LabelView.design({
        layout: {top: 0, left:0, width: 100, height: 100},
        value: 'dork'
      })
    ]
  })

});
