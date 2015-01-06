var Marty = require('marty');

var ActionConstants = Marty.createConstants([
  'UPSERT_ACTION',
  'TOGGLE_ACTION',
  'CLEAR_ACTIONS',
  'TOGGLE_VIEW_HANDLER',
  'TOGGLE_ACTION_HANDLER'
]);

module.exports = ActionConstants;