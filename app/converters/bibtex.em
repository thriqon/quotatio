


mixin BibtexConverter
  +volatile
  asBibtex: ->
    'a' + @TY

  setFromBibtexString: (bibtex) ->
    bibtex

`export default BibtexConverter`
