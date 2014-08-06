
`import RisConverter from '../converters/ris';`
`import BibtexConverter from '../converters/bibtex';`

class PublicationModel extends DS.Model with RisConverter, BibtexConverter
  tags: DS.hasMany('tag', polymorphic: true),

  unknownProperty: (key) ->
    tag = @tags.findBy 'key', key
    if tag?
      tag.value
    else
      undefined

`export default PublicationModel`
