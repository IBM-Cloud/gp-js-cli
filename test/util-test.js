/*
 * Copyright IBM Corp. 2015-2019
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var expect = require('chai').expect;

describe('lib/utils', function() {
  var utils = require('../lib/utils.js');
  describe('readJson', () => {
    const {readJson} = require('../lib/utils');
    it('should let us read', async () => {
      const d = await readJson('test/data/t1_0_en.json');
      expect(d).to.deep.equal({hi: 'hello'});
    });
  });
});