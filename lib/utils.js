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

const { readFile } = require('fs');
const { promisify } = require('util');

/**
 * Read a file, return promise to parsed obj
 * @param {String} filename path to file
 * @returns {Promise<Object>}
 * @ignore
 */
module.exports.readJson = async function readJson(filename) {
  const readFilep = promisify(readFile);
  const data = await readFilep(filename);
  const obj = JSON.parse(data);
  return obj;
};
