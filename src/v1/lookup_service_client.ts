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

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/lookup_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './lookup_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Service Directory API for looking up service data at runtime.
 * @class
 * @memberof v1
 */
export class LookupServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  lookupServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of LookupServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof LookupServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      endpointPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}/endpoints/{endpoint}'
      ),
      namespacePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/namespaces/{namespace}'
      ),
      servicePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.servicedirectory.v1.LookupService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.lookupServiceStub) {
      return this.lookupServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.servicedirectory.v1.LookupService.
    this.lookupServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.servicedirectory.v1.LookupService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.servicedirectory.v1.LookupService,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const lookupServiceStubMethods = ['resolveService'];
    for (const methodName of lookupServiceStubMethods) {
      const callPromise = this.lookupServiceStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.lookupServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'servicedirectory.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'servicedirectory.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  /**
   * Returns a {@link google.cloud.servicedirectory.v1.Service|service} and its
   * associated endpoints.
   * Resolving a service is not considered an active developer method.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the service to resolve.
   * @param {number} [request.maxEndpoints]
   *   Optional. The maximum number of endpoints to return. Defaults to 25.
   *   Maximum is 100. If a value less than one is specified, the Default is used.
   *   If a value greater than the Maximum is specified, the Maximum is used.
   * @param {string} [request.endpointFilter]
   *   Optional. The filter applied to the endpoints of the resolved service.
   *
   *   General filter string syntax:
   *   <field> <operator> <value> (<logical connector>)
   *   <field> can be "name" or "metadata.<key>" for map field.
   *   <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS and is
   *   roughly the same as "=".
   *   <value> must be the same data type as the field.
   *   <logical connector> can be "AND, OR, NOT".
   *
   *   Examples of valid filters:
   *   * "metadata.owner" returns Endpoints that have a label with the
   *     key "owner", this is the same as "metadata:owner"
   *   * "metadata.protocol=gRPC" returns Endpoints that have key/value
   *     "protocol=gRPC"
   *   * "metadata.owner!=sd AND metadata.foo=bar" returns
   *     Endpoints that have "owner" field in metadata with a value that is not
   *     "sd" AND have the key/value foo=bar.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ResolveServiceResponse]{@link google.cloud.servicedirectory.v1.ResolveServiceResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/lookup_service.resolve_service.js</caption>
   * region_tag:servicedirectory_v1_generated_LookupService_ResolveService_async
   */
  resolveService(
    request?: protos.google.cloud.servicedirectory.v1.IResolveServiceRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.servicedirectory.v1.IResolveServiceResponse,
      (
        | protos.google.cloud.servicedirectory.v1.IResolveServiceRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  resolveService(
    request: protos.google.cloud.servicedirectory.v1.IResolveServiceRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.servicedirectory.v1.IResolveServiceResponse,
      | protos.google.cloud.servicedirectory.v1.IResolveServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  resolveService(
    request: protos.google.cloud.servicedirectory.v1.IResolveServiceRequest,
    callback: Callback<
      protos.google.cloud.servicedirectory.v1.IResolveServiceResponse,
      | protos.google.cloud.servicedirectory.v1.IResolveServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  resolveService(
    request?: protos.google.cloud.servicedirectory.v1.IResolveServiceRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.servicedirectory.v1.IResolveServiceResponse,
          | protos.google.cloud.servicedirectory.v1.IResolveServiceRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.servicedirectory.v1.IResolveServiceResponse,
      | protos.google.cloud.servicedirectory.v1.IResolveServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.servicedirectory.v1.IResolveServiceResponse,
      (
        | protos.google.cloud.servicedirectory.v1.IResolveServiceRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        name: request.name || '',
      });
    this.initialize();
    return this.innerApiCalls.resolveService(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified endpoint resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} namespace
   * @param {string} service
   * @param {string} endpoint
   * @returns {string} Resource name string.
   */
  endpointPath(
    project: string,
    location: string,
    namespace: string,
    service: string,
    endpoint: string
  ) {
    return this.pathTemplates.endpointPathTemplate.render({
      project: project,
      location: location,
      namespace: namespace,
      service: service,
      endpoint: endpoint,
    });
  }

  /**
   * Parse the project from Endpoint resource.
   *
   * @param {string} endpointName
   *   A fully-qualified path representing Endpoint resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromEndpointName(endpointName: string) {
    return this.pathTemplates.endpointPathTemplate.match(endpointName).project;
  }

  /**
   * Parse the location from Endpoint resource.
   *
   * @param {string} endpointName
   *   A fully-qualified path representing Endpoint resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromEndpointName(endpointName: string) {
    return this.pathTemplates.endpointPathTemplate.match(endpointName).location;
  }

  /**
   * Parse the namespace from Endpoint resource.
   *
   * @param {string} endpointName
   *   A fully-qualified path representing Endpoint resource.
   * @returns {string} A string representing the namespace.
   */
  matchNamespaceFromEndpointName(endpointName: string) {
    return this.pathTemplates.endpointPathTemplate.match(endpointName)
      .namespace;
  }

  /**
   * Parse the service from Endpoint resource.
   *
   * @param {string} endpointName
   *   A fully-qualified path representing Endpoint resource.
   * @returns {string} A string representing the service.
   */
  matchServiceFromEndpointName(endpointName: string) {
    return this.pathTemplates.endpointPathTemplate.match(endpointName).service;
  }

  /**
   * Parse the endpoint from Endpoint resource.
   *
   * @param {string} endpointName
   *   A fully-qualified path representing Endpoint resource.
   * @returns {string} A string representing the endpoint.
   */
  matchEndpointFromEndpointName(endpointName: string) {
    return this.pathTemplates.endpointPathTemplate.match(endpointName).endpoint;
  }

  /**
   * Return a fully-qualified namespace resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} namespace
   * @returns {string} Resource name string.
   */
  namespacePath(project: string, location: string, namespace: string) {
    return this.pathTemplates.namespacePathTemplate.render({
      project: project,
      location: location,
      namespace: namespace,
    });
  }

  /**
   * Parse the project from Namespace resource.
   *
   * @param {string} namespaceName
   *   A fully-qualified path representing Namespace resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromNamespaceName(namespaceName: string) {
    return this.pathTemplates.namespacePathTemplate.match(namespaceName)
      .project;
  }

  /**
   * Parse the location from Namespace resource.
   *
   * @param {string} namespaceName
   *   A fully-qualified path representing Namespace resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromNamespaceName(namespaceName: string) {
    return this.pathTemplates.namespacePathTemplate.match(namespaceName)
      .location;
  }

  /**
   * Parse the namespace from Namespace resource.
   *
   * @param {string} namespaceName
   *   A fully-qualified path representing Namespace resource.
   * @returns {string} A string representing the namespace.
   */
  matchNamespaceFromNamespaceName(namespaceName: string) {
    return this.pathTemplates.namespacePathTemplate.match(namespaceName)
      .namespace;
  }

  /**
   * Return a fully-qualified service resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} namespace
   * @param {string} service
   * @returns {string} Resource name string.
   */
  servicePath(
    project: string,
    location: string,
    namespace: string,
    service: string
  ) {
    return this.pathTemplates.servicePathTemplate.render({
      project: project,
      location: location,
      namespace: namespace,
      service: service,
    });
  }

  /**
   * Parse the project from Service resource.
   *
   * @param {string} serviceName
   *   A fully-qualified path representing Service resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromServiceName(serviceName: string) {
    return this.pathTemplates.servicePathTemplate.match(serviceName).project;
  }

  /**
   * Parse the location from Service resource.
   *
   * @param {string} serviceName
   *   A fully-qualified path representing Service resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromServiceName(serviceName: string) {
    return this.pathTemplates.servicePathTemplate.match(serviceName).location;
  }

  /**
   * Parse the namespace from Service resource.
   *
   * @param {string} serviceName
   *   A fully-qualified path representing Service resource.
   * @returns {string} A string representing the namespace.
   */
  matchNamespaceFromServiceName(serviceName: string) {
    return this.pathTemplates.servicePathTemplate.match(serviceName).namespace;
  }

  /**
   * Parse the service from Service resource.
   *
   * @param {string} serviceName
   *   A fully-qualified path representing Service resource.
   * @returns {string} A string representing the service.
   */
  matchServiceFromServiceName(serviceName: string) {
    return this.pathTemplates.servicePathTemplate.match(serviceName).service;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.lookupServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
