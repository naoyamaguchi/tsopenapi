import { OpenAPISpec, OpenAPIInfo, OpenAPIServer, OpenAPIPaths, OpenAPIComponents, OpenAPISecurityRequirement, OpenAPITag, OpenAPIExternalDocumentation } from '../types';

/*
 * OpenAPISpec
 */
export class Spec {
  openapi: string;
  info: OpenAPIInfo;
  servers?: OpenAPIServer[];
  paths: OpenAPIPaths;
  components?: OpenAPIComponents;
  security?: OpenAPISecurityRequirement[];
  tags?: OpenAPITag[];
  externalDocs?: OpenAPIExternalDocumentation;


  constructor(init?: Partial<OpenAPISpec>) {
    Object.assign(this, init);
  }

}
