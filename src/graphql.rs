use warp::Filter;
use std::sync::Arc;
use juniper::http::graphiql::graphiql_source;
use juniper::RootNode;
use tokio_postgres::Client;

struct QueryRoot;
//struct MutationRoot;

#[juniper::graphql_object(Context = Context)]
impl QueryRoot {
    async fn account(ctx: &Context, id: String) -> juniper::FiledResult<Account> {
        let uuid = uuid::Uuid::parse_str(&id)?;
        println!("Get account {}", uuid);

        let account = Account{};

        Ok(account)
    }
}

//#[juniper::graphql_object(Context = Context)]
//impl MutationRoot {}

//type Schema = RootNode<'static, QueryRoot, MutationRoot>;
type Schema = RootNode<'static, QueryRoot>;

struct Context {
    client: Client,
}

impl juniper::Context for Context {}

// warp::filter::map::Map
pub fn get_schema() -> warp::filter::map::Map {
    //let schema = Arc::new(Schema::new(QueryRoot, MutationRoot));
    let schema = Arc::new(Schema::new(QueryRoot));
    let schema = warp::any().map(move || Arc::clone(&schema));

    return schema;
}
