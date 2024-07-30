# Index

Types:

- <code><a href="./src/resources/index.ts">IndexRetrieveHealthResponse</a></code>
- <code><a href="./src/resources/index.ts">IndexRetrieveSiteConfigResponse</a></code>

Methods:

- <code title="get /api/v1/healthz">client.index.<a href="./src/resources/index.ts">retrieveHealth</a>() -> unknown</code>
- <code title="get /api/v1/site-config">client.index.<a href="./src/resources/index.ts">retrieveSiteConfig</a>() -> unknown</code>

# Chats

Types:

- <code><a href="./src/resources/chats.ts">PageChat</a></code>
- <code><a href="./src/resources/chats.ts">ChatCreateResponse</a></code>
- <code><a href="./src/resources/chats.ts">ChatRetrieveResponse</a></code>
- <code><a href="./src/resources/chats.ts">ChatDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/chats">client.chats.<a href="./src/resources/chats.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /api/v1/chats/{chat_id}">client.chats.<a href="./src/resources/chats.ts">retrieve</a>(chatId) -> unknown</code>
- <code title="get /api/v1/chats">client.chats.<a href="./src/resources/chats.ts">list</a>({ ...params }) -> PageChat</code>
- <code title="delete /api/v1/chats/{chat_id}">client.chats.<a href="./src/resources/chats.ts">delete</a>(chatId) -> unknown</code>

# ChatMessages

Types:

- <code><a href="./src/resources/chat-messages.ts">SubgraphResponse</a></code>
- <code><a href="./src/resources/chat-messages.ts">ChatMessageFeedbackResponse</a></code>

Methods:

- <code title="post /api/v1/chat-messages/{chat_message_id}/feedback">client.chatMessages.<a href="./src/resources/chat-messages.ts">feedback</a>(chatMessageId, { ...params }) -> unknown</code>
- <code title="get /api/v1/chat-messages/{chat_message_id}/subgraph">client.chatMessages.<a href="./src/resources/chat-messages.ts">subgraph</a>(chatMessageId) -> SubgraphResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRead</a></code>

Methods:

- <code title="get /api/v1/users/me">client.users.<a href="./src/resources/users.ts">retrieveMe</a>() -> UserRead</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthCreateAPIKeyResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthLogoutResponse</a></code>

Methods:

- <code title="post /api/v1/create-api-key">client.auth.<a href="./src/resources/auth.ts">createAPIKey</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/auth/login">client.auth.<a href="./src/resources/auth.ts">login</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/auth/logout">client.auth.<a href="./src/resources/auth.ts">logout</a>() -> unknown</code>

# Admins

## Rag

Types:

- <code><a href="./src/resources/admins/rag.ts">RagIndexProgressResponse</a></code>

Methods:

- <code title="get /api/v1/admin/rag/index-progress">client.admins.rag.<a href="./src/resources/admins/rag.ts">indexProgress</a>() -> unknown</code>

## ChatEngines

Types:

- <code><a href="./src/resources/admins/chat-engines.ts">Chatengine</a></code>
- <code><a href="./src/resources/admins/chat-engines.ts">PageChatengine</a></code>

Methods:

- <code title="post /api/v1/admin/chat-engines">client.admins.chatEngines.<a href="./src/resources/admins/chat-engines.ts">create</a>({ ...params }) -> Chatengine</code>
- <code title="get /api/v1/admin/chat-engines/{chat_engine_id}">client.admins.chatEngines.<a href="./src/resources/admins/chat-engines.ts">retrieve</a>(chatEngineId) -> Chatengine</code>
- <code title="put /api/v1/admin/chat-engines/{chat_engine_id}">client.admins.chatEngines.<a href="./src/resources/admins/chat-engines.ts">update</a>(chatEngineId, { ...params }) -> Chatengine</code>
- <code title="get /api/v1/admin/chat-engines">client.admins.chatEngines.<a href="./src/resources/admins/chat-engines.ts">list</a>({ ...params }) -> PageChatengine</code>
- <code title="delete /api/v1/admin/chat-engines/{chat_engine_id}">client.admins.chatEngines.<a href="./src/resources/admins/chat-engines.ts">delete</a>(chatEngineId) -> Chatengine</code>

## Documents

Types:

- <code><a href="./src/resources/admins/documents.ts">PageDocument</a></code>

Methods:

- <code title="get /api/v1/admin/documents">client.admins.documents.<a href="./src/resources/admins/documents.ts">list</a>({ ...params }) -> PageDocument</code>

## Feedbacks

Types:

- <code><a href="./src/resources/admins/feedbacks.ts">PageAdminfeedbackpublic</a></code>

Methods:

- <code title="get /api/v1/admin/feedbacks">client.admins.feedbacks.<a href="./src/resources/admins/feedbacks.ts">list</a>({ ...params }) -> PageAdminfeedbackpublic</code>

## SiteSettings

Types:

- <code><a href="./src/resources/admins/site-settings.ts">SettingValue</a></code>
- <code><a href="./src/resources/admins/site-settings.ts">SiteSettingListResponse</a></code>

Methods:

- <code title="put /api/v1/admin/site-settings/{setting_name}">client.admins.siteSettings.<a href="./src/resources/admins/site-settings.ts">update</a>(settingName, { ...params }) -> void</code>
- <code title="get /api/v1/admin/site-settings">client.admins.siteSettings.<a href="./src/resources/admins/site-settings.ts">list</a>() -> SiteSettingListResponse</code>

## Graph

### Entities

Types:

- <code><a href="./src/resources/admins/graph/entities.ts">EntityPublic</a></code>

### Relationships

Types:

- <code><a href="./src/resources/admins/graph/relationships.ts">RelationshipPublic</a></code>

## Uploads

Types:

- <code><a href="./src/resources/admins/uploads.ts">Upload</a></code>

## Datasources

Types:

- <code><a href="./src/resources/admins/datasources.ts">Datasource</a></code>
- <code><a href="./src/resources/admins/datasources.ts">PageDatasource</a></code>

## LlmOptions

Types:

- <code><a href="./src/resources/admins/llm-options.ts">LlmOption</a></code>

## Llms

Types:

- <code><a href="./src/resources/admins/llms.ts">AdminLlm</a></code>
- <code><a href="./src/resources/admins/llms.ts">LlmTestResult</a></code>
- <code><a href="./src/resources/admins/llms.ts">PageAdminllm</a></code>

# Admin

## Graph

Types:

- <code><a href="./src/resources/admin/graph/graph.ts">GraphSearchResponse</a></code>

Methods:

- <code title="post /api/v1/admin/graph/search">client.admin.graph.<a href="./src/resources/admin/graph/graph.ts">search</a>({ ...params }) -> unknown</code>

### Entities

Types:

- <code><a href="./src/resources/admin/graph/entities.ts">EntitySearchResponse</a></code>
- <code><a href="./src/resources/admin/graph/entities.ts">EntitySubgraphResponse</a></code>

Methods:

- <code title="get /api/v1/admin/graph/entities/{entity_id}">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">retrieve</a>(entityId) -> EntityPublic</code>
- <code title="put /api/v1/admin/graph/entities/{entity_id}">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">update</a>(entityId, { ...params }) -> EntityPublic</code>
- <code title="get /api/v1/admin/graph/entities/search">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">search</a>({ ...params }) -> EntitySearchResponse</code>
- <code title="get /api/v1/admin/graph/entities/{entity_id}/subgraph">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">subgraph</a>(entityId) -> unknown</code>
- <code title="post /api/v1/admin/graph/entities/synopsis">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">synopsis</a>({ ...params }) -> EntityPublic</code>

### Relationships

Methods:

- <code title="get /api/v1/admin/graph/relationships/{relationship_id}">client.admin.graph.relationships.<a href="./src/resources/admin/graph/relationships.ts">retrieve</a>(relationshipId) -> RelationshipPublic</code>
- <code title="put /api/v1/admin/graph/relationships/{relationship_id}">client.admin.graph.relationships.<a href="./src/resources/admin/graph/relationships.ts">update</a>(relationshipId, { ...params }) -> RelationshipPublic</code>

## Uploads

Types:

- <code><a href="./src/resources/admin/uploads.ts">UploadCreateResponse</a></code>

Methods:

- <code title="post /api/v1/admin/uploads">client.admin.uploads.<a href="./src/resources/admin/uploads.ts">create</a>({ ...params }) -> UploadCreateResponse</code>

## Datasources

Types:

- <code><a href="./src/resources/admin/datasources.ts">DatasourceOverviewResponse</a></code>

Methods:

- <code title="post /api/v1/admin/datasources">client.admin.datasources.<a href="./src/resources/admin/datasources.ts">create</a>({ ...params }) -> Datasource</code>
- <code title="get /api/v1/admin/datasources/{data_source_id}">client.admin.datasources.<a href="./src/resources/admin/datasources.ts">retrieve</a>(dataSourceId) -> Datasource</code>
- <code title="get /api/v1/admin/datasources">client.admin.datasources.<a href="./src/resources/admin/datasources.ts">list</a>({ ...params }) -> PageDatasource</code>
- <code title="get /api/v1/admin/datasources/{data_source_id}/overview">client.admin.datasources.<a href="./src/resources/admin/datasources.ts">overview</a>(dataSourceId) -> unknown</code>

## LlmOptions

Types:

- <code><a href="./src/resources/admin/llm-options.ts">LlmOptionListResponse</a></code>

Methods:

- <code title="get /api/v1/admin/llm-options">client.admin.llmOptions.<a href="./src/resources/admin/llm-options.ts">list</a>() -> LlmOptionListResponse</code>

## Llms

Methods:

- <code title="post /api/v1/admin/llms">client.admin.llms.<a href="./src/resources/admin/llms.ts">create</a>({ ...params }) -> AdminLlm</code>
- <code title="get /api/v1/admin/llms/{llm_id}">client.admin.llms.<a href="./src/resources/admin/llms.ts">retrieve</a>(llmId) -> AdminLlm</code>
- <code title="get /api/v1/admin/llms">client.admin.llms.<a href="./src/resources/admin/llms.ts">list</a>({ ...params }) -> PageAdminllm</code>
- <code title="delete /api/v1/admin/llms/{llm_id}">client.admin.llms.<a href="./src/resources/admin/llms.ts">delete</a>(llmId) -> AdminLlm</code>
- <code title="post /api/v1/admin/llms/test">client.admin.llms.<a href="./src/resources/admin/llms.ts">test</a>({ ...params }) -> LlmTestResult</code>
