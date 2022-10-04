const router = require('express').Router();
const Group = require('./../controllers/group.controller')
const CrmMiddleware = require('./../helpers/crm.middleware')
//     /Group/
router.route('/').post(CrmMiddleware, Group.addGroup).get(CrmMiddleware, Group.getAllGroups);
router.route('/:id').patch(Group.updateGroup).delete(Group.removeGroup);

module.exports = router;