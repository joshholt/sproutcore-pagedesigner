//============================================================================
// Redbull.viewDesignersController
//============================================================================
/*globals Redbull*/
/**

  This controller handles 
  @extends SC.ArrayController
  @author Josh Holt
  @version 0.1
  @since 0.1

*/

Redbull.viewDesignersController = SC.ObjectController.create({
  contentBinding: 'Redbull.designController*content.view.designer.designController'
  
});