// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as lookupserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta1.LookupServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      lookupserviceModule.v1beta1.LookupServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      lookupserviceModule.v1beta1.LookupServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = lookupserviceModule.v1beta1.LookupServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new lookupserviceModule.v1beta1.LookupServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new lookupserviceModule.v1beta1.LookupServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new lookupserviceModule.v1beta1.LookupServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.lookupServiceStub, undefined);
    await client.initialize();
    assert(client.lookupServiceStub);
  });

  it('has close method', () => {
    const client = new lookupserviceModule.v1beta1.LookupServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new lookupserviceModule.v1beta1.LookupServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new lookupserviceModule.v1beta1.LookupServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('resolveService', () => {
    it('invokes resolveService without error', async () => {
      const client = new lookupserviceModule.v1beta1.LookupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.servicedirectory.v1beta1.ResolveServiceRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.servicedirectory.v1beta1.ResolveServiceResponse()
      );
      client.innerApiCalls.resolveService = stubSimpleCall(expectedResponse);
      const [response] = await client.resolveService(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.resolveService as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes resolveService without error using callback', async () => {
      const client = new lookupserviceModule.v1beta1.LookupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.servicedirectory.v1beta1.ResolveServiceRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.servicedirectory.v1beta1.ResolveServiceResponse()
      );
      client.innerApiCalls.resolveService =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.resolveService(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.servicedirectory.v1beta1.IResolveServiceResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.resolveService as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes resolveService with error', async () => {
      const client = new lookupserviceModule.v1beta1.LookupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.servicedirectory.v1beta1.ResolveServiceRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.resolveService = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.resolveService(request), expectedError);
      assert(
        (client.innerApiCalls.resolveService as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('Path templates', () => {
    describe('endpoint', () => {
      const fakePath = '/rendered/path/endpoint';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        namespace: 'namespaceValue',
        service: 'serviceValue',
        endpoint: 'endpointValue',
      };
      const client = new lookupserviceModule.v1beta1.LookupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.endpointPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.endpointPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('endpointPath', () => {
        const result = client.endpointPath(
          'projectValue',
          'locationValue',
          'namespaceValue',
          'serviceValue',
          'endpointValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.endpointPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromEndpointName', () => {
        const result = client.matchProjectFromEndpointName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.endpointPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromEndpointName', () => {
        const result = client.matchLocationFromEndpointName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.endpointPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchNamespaceFromEndpointName', () => {
        const result = client.matchNamespaceFromEndpointName(fakePath);
        assert.strictEqual(result, 'namespaceValue');
        assert(
          (client.pathTemplates.endpointPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchServiceFromEndpointName', () => {
        const result = client.matchServiceFromEndpointName(fakePath);
        assert.strictEqual(result, 'serviceValue');
        assert(
          (client.pathTemplates.endpointPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEndpointFromEndpointName', () => {
        const result = client.matchEndpointFromEndpointName(fakePath);
        assert.strictEqual(result, 'endpointValue');
        assert(
          (client.pathTemplates.endpointPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('namespace', () => {
      const fakePath = '/rendered/path/namespace';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        namespace: 'namespaceValue',
      };
      const client = new lookupserviceModule.v1beta1.LookupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.namespacePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.namespacePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('namespacePath', () => {
        const result = client.namespacePath(
          'projectValue',
          'locationValue',
          'namespaceValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.namespacePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromNamespaceName', () => {
        const result = client.matchProjectFromNamespaceName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.namespacePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromNamespaceName', () => {
        const result = client.matchLocationFromNamespaceName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.namespacePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchNamespaceFromNamespaceName', () => {
        const result = client.matchNamespaceFromNamespaceName(fakePath);
        assert.strictEqual(result, 'namespaceValue');
        assert(
          (client.pathTemplates.namespacePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('service', () => {
      const fakePath = '/rendered/path/service';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        namespace: 'namespaceValue',
        service: 'serviceValue',
      };
      const client = new lookupserviceModule.v1beta1.LookupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.servicePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.servicePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('servicePath', () => {
        const result = client.servicePath(
          'projectValue',
          'locationValue',
          'namespaceValue',
          'serviceValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.servicePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromServiceName', () => {
        const result = client.matchProjectFromServiceName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.servicePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromServiceName', () => {
        const result = client.matchLocationFromServiceName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.servicePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchNamespaceFromServiceName', () => {
        const result = client.matchNamespaceFromServiceName(fakePath);
        assert.strictEqual(result, 'namespaceValue');
        assert(
          (client.pathTemplates.servicePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchServiceFromServiceName', () => {
        const result = client.matchServiceFromServiceName(fakePath);
        assert.strictEqual(result, 'serviceValue');
        assert(
          (client.pathTemplates.servicePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
