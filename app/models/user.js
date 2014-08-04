
export default DS.Model.extend({
	publications: DS.hasMany('publication'),
	files: DS.hasMany('file')
});
