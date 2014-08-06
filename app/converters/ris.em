
`/* jshint curly:false *//*jshint -W032*/`

risTag = (key, value) ->
  "#{key}  - #{value}\r\n"

keys = [
	'AB', 'AD',
	'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8',
]

keys = [
  ['TY', 'typeOfReference', 'type'],
  ['TI', 'title'],
]

lengthIsGreaterThanZero = (line) -> line.length > 0

splitByRisTerminator = (line) -> line.split('  - ')

mixin RisConverter
  +computed tags.@each.key, tags.@each.value
  asRis: ->
    self = this
    risTags = []
    keys.forEach((keyAliases) ->
      chosenAlias = keyAliases.find((alias) -> self.get(alias))
      risTags.pushObject(risTag(keyAliases[0], self.get(chosenAlias))) if chosenAlias?)
    risTags.pushObject risTag('ER', '')
    Ember.assert 'TY not set', (risTags.length != 0 && risTags[0].substr(0,2) == "TY")
    risTags.join ''

  setFromRISString: (ris) ->
    Ember.assert 'RIS argument is mandatory', ris
    ris = ris.replace /\r\n/g, '\n'

    Ember.beginPropertyChanges()
    ris.split('\n')
    .filter(lengthIsGreaterThanZero)
    .map(splitByRisTerminator)
    .forEach (parts) => @set(parts[0], parts[1])
    Ember.endPropertyChanges()

    this

`export default RisConverter`
