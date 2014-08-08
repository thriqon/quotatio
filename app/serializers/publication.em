
class PublicationSerializer extends DS.RESTSerializer
  generateTagKey: (parentId, key) ->
    [parentId, key].join '/'
  extractSingleTag: (store, tagid, key, value) ->
    store.push 'singletag', {id: tagid, key: key, value: value}

  extractSingle: (store, type, payload) ->
    denormalized = {id: payload._id, tags: []}

    Ember.keys(payload).without('_id').without('_rev')
    .forEach (key) =>
      tagid = this.generateTagKey payload._id, key
      this.extractSingleTag store, tagid, key, payload[key]
      denormalized.tags.pushObject(id: tagid, type: 'singletag')
    return denormalized

  extractArray: (store, type, arrayPayload) ->
    arrayPayload.map(this.extractSingle.bind(this, store, type))

  serialize: (record) ->
    json = {}
    json._id = record.get('id')
    json._rev = record.get('_rev')
    record.get('tags').forEach((tag) -> json[tag.get('key')] = tag.get('value'))
    return record

`export default PublicationSerializer`
