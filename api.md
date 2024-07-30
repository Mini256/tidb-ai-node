# Healthz

Types:

- <code><a href="./src/resources/healthz.ts">HealthzRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/healthz">client.healthz.<a href="./src/resources/healthz.ts">retrieve</a>() -> unknown</code>

# SiteConfigs

Types:

- <code><a href="./src/resources/site-configs.ts">SiteConfigListResponse</a></code>

Methods:

- <code title="get /api/v1/site-config">client.siteConfigs.<a href="./src/resources/site-configs.ts">list</a>() -> unknown</code>

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

## Subgraph

Types:

- <code><a href="./src/resources/chat-messages/subgraph.ts">SubgraphResponse</a></code>

Methods:

- <code title="get /api/v1/chat-messages/{chat_message_id}/subgraph">client.chatMessages.subgraph.<a href="./src/resources/chat-messages/subgraph.ts">retrieve</a>(chatMessageId) -> SubgraphResponse</code>

## Feedback

Types:

- <code><a href="./src/resources/chat-messages/feedback.ts">FeedbackCreateResponse</a></code>

Methods:

- <code title="post /api/v1/chat-messages/{chat_message_id}/feedback">client.chatMessages.feedback.<a href="./src/resources/chat-messages/feedback.ts">create</a>(chatMessageId, { ...params }) -> unknown</code>

# Users

## Me

Types:

- <code><a href="./src/resources/users/me.ts">UserRead</a></code>

Methods:

- <code title="get /api/v1/users/me">client.users.me.<a href="./src/resources/users/me.ts">retrieve</a>() -> UserRead</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKeyCreateResponse</a></code>

Methods:

- <code title="post /api/v1/create-api-key">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> unknown</code>

# Admin

## Rag

Types:

- <code><a href="./src/resources/admin/rag.ts">RagIndexProgressResponse</a></code>

Methods:

- <code title="get /api/v1/admin/rag/index-progress">client.admin.rag.<a href="./src/resources/admin/rag.ts">indexProgress</a>() -> unknown</code>

## ChatEngines

Types:

- <code><a href="./src/resources/admin/chat-engines.ts">ChatEngine</a></code>
- <code><a href="./src/resources/admin/chat-engines.ts">PageChatEngine</a></code>

Methods:

- <code title="post /api/v1/admin/chat-engines">client.admin.chatEngines.<a href="./src/resources/admin/chat-engines.ts">create</a>({ ...params }) -> ChatEngine</code>
- <code title="get /api/v1/admin/chat-engines/{chat_engine_id}">client.admin.chatEngines.<a href="./src/resources/admin/chat-engines.ts">retrieve</a>(chatEngineId) -> ChatEngine</code>
- <code title="put /api/v1/admin/chat-engines/{chat_engine_id}">client.admin.chatEngines.<a href="./src/resources/admin/chat-engines.ts">update</a>(chatEngineId, { ...params }) -> ChatEngine</code>
- <code title="get /api/v1/admin/chat-engines">client.admin.chatEngines.<a href="./src/resources/admin/chat-engines.ts">list</a>({ ...params }) -> PageChatEngine</code>
- <code title="delete /api/v1/admin/chat-engines/{chat_engine_id}">client.admin.chatEngines.<a href="./src/resources/admin/chat-engines.ts">delete</a>(chatEngineId) -> ChatEngine</code>

## Documents

Types:

- <code><a href="./src/resources/admin/documents.ts">PageDocument</a></code>

Methods:

- <code title="get /api/v1/admin/documents">client.admin.documents.<a href="./src/resources/admin/documents.ts">list</a>({ ...params }) -> PageDocument</code>

## Feedbacks

Types:

- <code><a href="./src/resources/admin/feedbacks.ts">PageAdminFeedbackPublic</a></code>

Methods:

- <code title="get /api/v1/admin/feedbacks">client.admin.feedbacks.<a href="./src/resources/admin/feedbacks.ts">list</a>({ ...params }) -> PageAdminFeedbackPublic</code>

## SiteSettings

Types:

- <code><a href="./src/resources/admin/site-settings.ts">SettingValue</a></code>
- <code><a href="./src/resources/admin/site-settings.ts">SiteSettingListResponse</a></code>

Methods:

- <code title="put /api/v1/admin/site-settings/{setting_name}">client.admin.siteSettings.<a href="./src/resources/admin/site-settings.ts">update</a>(settingName, { ...params }) -> void</code>
- <code title="get /api/v1/admin/site-settings">client.admin.siteSettings.<a href="./src/resources/admin/site-settings.ts">list</a>() -> SiteSettingListResponse</code>

## Graph

Types:

- <code><a href="./src/resources/admin/graph/graph.ts">GraphSearchResponse</a></code>

Methods:

- <code title="post /api/v1/admin/graph/search">client.admin.graph.<a href="./src/resources/admin/graph/graph.ts">search</a>({ ...params }) -> unknown</code>

### Entities

Types:

- <code><a href="./src/resources/admin/graph/entities.ts">EntityPublic</a></code>
- <code><a href="./src/resources/admin/graph/entities.ts">EntitySearchResponse</a></code>
- <code><a href="./src/resources/admin/graph/entities.ts">EntitySubgraphResponse</a></code>

Methods:

- <code title="get /api/v1/admin/graph/entities/{entity_id}">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">retrieve</a>(entityId) -> EntityPublic</code>
- <code title="put /api/v1/admin/graph/entities/{entity_id}">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">update</a>(entityId, { ...params }) -> EntityPublic</code>
- <code title="get /api/v1/admin/graph/entities/search">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">search</a>({ ...params }) -> EntitySearchResponse</code>
- <code title="get /api/v1/admin/graph/entities/{entity_id}/subgraph">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">subgraph</a>(entityId) -> unknown</code>
- <code title="post /api/v1/admin/graph/entities/synopsis">client.admin.graph.entities.<a href="./src/resources/admin/graph/entities.ts">synopsis</a>({ ...params }) -> EntityPublic</code>

### Relationships

Types:

- <code><a href="./src/resources/admin/graph/relationships.ts">RelationshipPublic</a></code>

Methods:

- <code title="get /api/v1/admin/graph/relationships/{relationship_id}">client.admin.graph.relationships.<a href="./src/resources/admin/graph/relationships.ts">retrieve</a>(relationshipId) -> RelationshipPublic</code>
- <code title="put /api/v1/admin/graph/relationships/{relationship_id}">client.admin.graph.relationships.<a href="./src/resources/admin/graph/relationships.ts">update</a>(relationshipId, { ...params }) -> RelationshipPublic</code>

## Uploads

Types:

- <code><a href="./src/resources/admin/uploads.ts">Upload</a></code>
- <code><a href="./src/resources/admin/uploads.ts">UploadCreateResponse</a></code>

Methods:

- <code title="post /api/v1/admin/uploads">client.admin.uploads.<a href="./src/resources/admin/uploads.ts">create</a>({ ...params }) -> UploadCreateResponse</code>

## Datasources

Types:

- <code><a href="./src/resources/admin/datasources.ts">DataSource</a></code>
- <code><a href="./src/resources/admin/datasources.ts">PageDataSource</a></code>
- <code><a href="./src/resources/admin/datasources.ts">DatasourceOverviewResponse</a></code>

Methods:

- <code title="post /api/v1/admin/datasources">client.admin.datasources.<a href="./src/resources/admin/datasources.ts">create</a>({ ...params }) -> DataSource</code>
- <code title="get /api/v1/admin/datasources/{data_source_id}">client.admin.datasources.<a href="./src/resources/admin/datasources.ts">retrieve</a>(dataSourceId) -> DataSource</code>
- <code title="get /api/v1/admin/datasources">client.admin.datasources.<a href="./src/resources/admin/datasources.ts">list</a>({ ...params }) -> PageDataSource</code>
- <code title="get /api/v1/admin/datasources/{data_source_id}/overview">client.admin.datasources.<a href="./src/resources/admin/datasources.ts">overview</a>(dataSourceId) -> unknown</code>

## LlmOptions

Types:

- <code><a href="./src/resources/admin/llm-options.ts">LlmOption</a></code>
- <code><a href="./src/resources/admin/llm-options.ts">LlmOptionListResponse</a></code>

Methods:

- <code title="get /api/v1/admin/llm-options">client.admin.llmOptions.<a href="./src/resources/admin/llm-options.ts">list</a>() -> LlmOptionListResponse</code>

## Llms

Types:

- <code><a href="./src/resources/admin/llms.ts">AdminLlm</a></code>
- <code><a href="./src/resources/admin/llms.ts">LlmTestResult</a></code>
- <code><a href="./src/resources/admin/llms.ts">PageAdminLlm</a></code>

Methods:

- <code title="post /api/v1/admin/llms">client.admin.llms.<a href="./src/resources/admin/llms.ts">create</a>({ ...params }) -> AdminLlm</code>
- <code title="get /api/v1/admin/llms/{llm_id}">client.admin.llms.<a href="./src/resources/admin/llms.ts">retrieve</a>(llmId) -> AdminLlm</code>
- <code title="get /api/v1/admin/llms">client.admin.llms.<a href="./src/resources/admin/llms.ts">list</a>({ ...params }) -> PageAdminLlm</code>
- <code title="delete /api/v1/admin/llms/{llm_id}">client.admin.llms.<a href="./src/resources/admin/llms.ts">delete</a>(llmId) -> AdminLlm</code>
- <code title="post /api/v1/admin/llms/test">client.admin.llms.<a href="./src/resources/admin/llms.ts">test</a>({ ...params }) -> LlmTestResult</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthLogoutResponse</a></code>

Methods:

- <code title="post /api/v1/auth/login">client.auth.<a href="./src/resources/auth.ts">login</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/auth/logout">client.auth.<a href="./src/resources/auth.ts">logout</a>() -> unknown</code>
