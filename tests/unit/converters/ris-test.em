
`import {test, moduleFor } from 'ember-qunit'`

moduleFor 'converter:ris', 'RIS-Converter'


test 'RIS Export - should recognize correct TY', ->
  class Victim with this.factory()
  expect 1
  victim = Victim.create()
  victim.set('typeOfReference', 'CONF')
  equal(victim.get('asRis'), 'TY  - CONF\r\nER  - \r\n', 'Invalid RIS data')

test 'RIS Export should fail if TY is not set', ->
  class Victim with this.factory()
  expect 1
  victim = Victim.create()
  raises(-> victim.get('asRis'), Error, 'did not fail')

