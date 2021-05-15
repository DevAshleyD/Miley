 #![feature(proc_macro_hygiene, decl_macro)]

use warp::Filter;

//mod graphql;
mod auth;
mod db;

#[tokio::main]
async fn main() {
    let index_route = warp::path::end().map(|| "ok");
    let default_route = warp::any().map(|| "not found");
    let routes = warp::any()
        .and(index_route)
        .or(auth::auth_signup())
        .or(auth::auth_signin())
        .or(auth::auth_provider())
        .or(default_route);

    let _conn = db::db_connect().await;

    warp::serve(routes)
        .run(([0, 0, 0, 0], 8000))
        .await;
}
