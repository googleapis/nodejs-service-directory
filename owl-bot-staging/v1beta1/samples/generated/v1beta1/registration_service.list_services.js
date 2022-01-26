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

function main(parent) {
  // [START servicedirectory_v1beta1_generated_RegistrationService_ListServices_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the namespace whose services you'd
   *  like to list.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of items to return.
   */
  // const pageSize = 1234
  /**
   *  Optional. The next_page_token value returned from a previous List request,
   *  if any.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The filter to list results by.
   *  General `filter` string syntax:
   *  `<field> <operator> <value> (<logical connector>)`
   *  *   `<field>` can be `name` or `metadata.<key>` for map field
   *  *   `<operator>` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:`
   *      means `HAS`, and is roughly the same as `=`
   *  *   `<value>` must be the same data type as field
   *  *   `<logical connector>` can be `AND`, `OR`, `NOT`
   *  Examples of valid filters:
   *  *   `metadata.owner` returns services that have a metadata with the key
   *      `owner`, this is the same as `metadata:owner`
   *  *   `metadata.protocol=gRPC` returns services that have key/value
   *      `protocol=gRPC`
   *  *
   *  `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/service-c`
   *      returns services that have name that is alphabetically later than the
   *      string, so "service-e" is returned but "service-a" is not
   *  *   `metadata.owner!=sd AND metadata.foo=bar` returns services that have
   *      `owner` in metadata key but value is not `sd` AND have key/value
   *      `foo=bar`
   *  *   `doesnotexist.foo=bar` returns an empty list. Note that service
   *      doesn't have a field called "doesnotexist". Since the filter does not
   *      match any services, it returns no results
   *  For more information about filtering, see
   *  API Filtering (https://aip.dev/160).
   */
  // const filter = 'abc123'
  /**
   *  Optional. The order to list results by.
   *  General `order_by` string syntax: `<field> (<asc|desc>) (,)`
   *  *   `<field>` allows value: `name`
   *  *   `<asc|desc>` ascending or descending order by `<field>`. If this is
   *      left blank, `asc` is used
   *  Note that an empty `order_by` string results in default order, which is
   *  order by `name` in ascending order.
   */
  // const orderBy = 'abc123'

  // Imports the Servicedirectory library
  const {RegistrationServiceClient} = require('@google-cloud/service-directory').v1beta1;

  // Instantiates a client
  const servicedirectoryClient = new RegistrationServiceClient();

  async function callListServices() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await servicedirectoryClient.listServicesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListServices();
  // [END servicedirectory_v1beta1_generated_RegistrationService_ListServices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
