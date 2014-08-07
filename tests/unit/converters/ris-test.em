
`import {test, moduleFor } from 'ember-qunit'`

moduleFor 'converter:ris', 'RIS-Converter'


test 'RIS Export - should output typeOfReference correctly', ->
  class Victim with this.factory()
    findTagWithKey: (key) -> @get(key)
  expect 1
  victim = Victim.create()
  victim.set('typeOfReference', 'CONF')
  equal(victim.get('asRis'), 'TY  - CONF\r\nER  - \r\n', 'Invalid RIS data')

test 'RIS Export should fail if TY is not set', ->
  class Victim with this.factory()
    findTagWithKey: (key) -> @tags.findBy('key', key)
    unknownProperty: (key) -> @findTagWithKey(key)?.value
  expect 1
  victim = Victim.create()
  raises(-> victim.get('asRis'), Error, 'did not fail')

test 'RIS should change when tags change', ->
  class Victim with this.factory()
    tags: []
    findTagWithKey: (key) -> @tags.findBy('key', key)
    unknownProperty: (key) -> @findTagWithKey(key)?.value
  expect 1
  victim = Victim.create()
  victim.get('tags').pushObject(key: 'typeOfReference', value: 'CONF')
  exportedA = victim.get('asRis')
  victim.get('tags').pushObject(key: 'title', value: 'Test-Title')
  exportedB = victim.get('asRis')
  notEqual(exportedA, exportedB, 'Export did not change')

test 'Import should parse correctly', ->
  expect 1
  class Victim with this.factory()
    tags: []
    findTagWithKey: (key) -> @tags.findBy('key', key)
  victim = Victim.create()
  victim.setFromRisString('TY  - CONF\r\nTI  - Blah blah\r\nER  - \r\n')
  equal(victim.title, 'Blah blah')

