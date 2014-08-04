
risTag = (key, value) ->
	return key + '  - ' + value + '\r\n'

keys = [
	'AB', 'AD',
	'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8',
];

mixin RisConverter
  asRIS: ->
    Ember.assert 'TypeOfReference is mandatory', @TY

    risTag('TY', @TY) + keys
    .filter((key) => @get(key))
    .map((key) => risTag(key, @get(key)))
    .join('') + risTag('ER', '')

  setFromRISString: (ris) ->
    Ember.assert 'RIS argument is mandatory', ris
    ris = ris.replace /\r\n/g, '\n'

    Ember.beginPropertyChanges()
    ris.split('\n')
    .filter((line) -> (line.length > 0))
    .map((line) -> line.split('  - '))
    .forEach (parts) => @set(parts[0], parts[1])
    Ember.endPropertyChanges()

    this

`export default RisConverter`
