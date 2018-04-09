'use strict';

export const Name = 'elasticdeveloper';
export const Publisher = 'crasnam';
export const ExtensionId = Publisher + '.' + Name;
export const WorkspaceStateEnvironmentPath = 'environment.path';
export const CommandPrefix = Name;
export const DefaultRestAPIVersion = '6.2.3';

/**
 *  ElasticsearchQuery
 */
export const ElasticsearchQueryLanguageId = 'esquery';
export const ElasticsearchQueryDocumentSelector = [ElasticsearchQueryLanguageId];
export const ElasticsearchQueryCodeLensCommandRunQuery = 'query.run.fromCodeLens';
export const ElasticsearchQueryCodeLensCommandRunAllQueries = 'query.runAll.fromCodeLens';
export const ElasticsearchQueryCommandRunAllQueries = 'query.runAll';

/**
 * IndexTemplate
 */
export const IndexTemplateLanguageId = 'esind';
export const IndexTemplateDocumentSelector = [IndexTemplateLanguageId];
export const IndexTemplateCodeLensCommandDeploy = 'indexTemplate.deploy.fromCodeLens';
export const IndexTemplateCommandDeploy = 'indexTemplate.deploy';
export const IndexTemplateCodeLensCommandRetract = 'indexTemplate.retract.fromCodeLens';
export const IndexTemplateCommandRetract = 'indexTemplate.retract';

/**
 * Environment
 */
export const EnvironmentLanguageId = 'esenv';
export const EnvironmentDocumentSelector = [EnvironmentLanguageId];
export const EnvironmentCodeLensCommandPing = 'environment.ping.fromCodeLens';
export const EnvironmentCommandPing = 'environment.ping';
export const EnvironmentCodeLensCommandSetAsTarget = 'environment.setAsTarget.fromCodeLens';
export const EnvironmentCommandSetAsTarget = 'environment.setAsTarget';