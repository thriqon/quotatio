
`/* jshint curly:false *//*jshint -W032*/`

`import RisConverter from '../converters/ris';`
`import BibtexConverter from '../converters/bibtex';`


class PublicationModel extends DS.Model with RisConverter, BibtexConverter
  tags: DS.hasMany('tag', polymorphic: true)

  findTagWithKey: (key) -> @tags.findBy('key', key)

  unknownProperty: (key) ->
    @findTagWithKey(key)?.value

`export default PublicationModel`
