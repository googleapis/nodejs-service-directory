// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name) {
  // [START servicedirectory_resolve_service_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the service to resolve.
   */
  // const name = 'abc123'
  /**
   *  Optional. The maximum number of endpoints to return. Defaults to 25. Maximum is 100.
   *  If a value less than one is specified, the Default is used.
   *  If a value greater than the Maximum is specified, the Maximum is used.
   */
  // const maxEndpoints = 1234
  /**
   *  Optional. The filter applied to the endpoints of the resolved service.
   *  General `filter` string syntax:
   *  `<field> <operator> <value> (<logical connector>)`
   *  *   `<field>` can be `name`, `address`, `port`, or `metadata.<key>` for
   *      map field
   *  *   `<operator>` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:`
   *      means `HAS`, and is roughly the same as `=`
   *  *   `<value>` must be the same data type as field
   *  *   `<logical connector>` can be `AND`, `OR`, `NOT`
   *  Examples of valid filters:
   *  *   `metadata.owner` returns endpoints that have a annotation with the key
   *      `owner`, this is the same as `metadata:owner`
   *  *   `metadata.protocol=gRPC` returns endpoints that have key/value
   *      `protocol=gRPC`
   *  *   `address=192.108.1.105` returns endpoints that have this address
   *  *   `port>8080` returns endpoints that have port number larger than 8080
   *  *
   *  `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c`
   *      returns endpoints that have name that is alphabetically later than the
   *      string, so "endpoint-e" is returned but "endpoint-a" is not
   *  *   `metadata.owner!=sd AND metadata.foo=bar` returns endpoints that have
   *      `owner` in annotation key but value is not `sd` AND have key/value
   *       `foo=bar`
   *  *   `doesnotexist.foo=bar` returns an empty list. Note that endpoint
   *      doesn't have a field called "doesnotexist". Since the filter does not
   *      match any endpoint, it returns no results
   *  For more information about filtering, see
   *  [API Filtering](https://aip.dev/160).
   */
  // const endpointFilter = 'abc123'

  // Imports the Servicedirectory library
  const {LookupServiceClient} = require('@google-cloud/service-directory').v1beta1;

  // Instantiates a client
  const servicedirectoryClient = new LookupServiceClient();

  async function resolveService() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await servicedirectoryClient.resolveService(request);
    console.log(response);
  }

  resolveService();
  // [END servicedirectory_resolve_service_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
