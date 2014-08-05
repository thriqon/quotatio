


mixin BibtexConverter
  asBibtex: ->
    '@' + @TY + '{' + @id + ',\r\n'

  setFromBibtexString: (bibtex) ->
    bibtex

`export default BibtexConverter`
