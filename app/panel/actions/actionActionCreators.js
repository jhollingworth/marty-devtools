var Marty = require('marty');
var ActionConstants = require('../constants/actionConstants');

var ActionActionCreators = Marty.createActionCreators({
  toggleAction: ActionConstants.TOGGLE_ACTION(),
  clearActions: ActionConstants.CLEAR_ACTIONS(),
  upsertAction: ActionConstants.UPSERT_ACTION(),
  toggleActionHandler: ActionConstants.TOGGLE_ACTION_HANDLER()
});

module.exports = ActionActionCreators;