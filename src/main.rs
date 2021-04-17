 #![feature(proc_macro_hygiene, decl_macro)]

use warp::Filter;

//mod graphql;
mod auth;
mod db;

//#[get("/")]
//fn index() -> &'static str {
    //"Hello, world!"
//}
//
//#[get("/auth")]
//fn auth() -> &'static str {
   //"not implemented"
//}
//
//#[get("/auth/<provider>")]
//fn auth_provider(provider: String) -> String {
    //println!("provider: {}", provider);
//
    //format!("not implemented for provider {}", provider)
//}

#[tokio::main]
async fn main() {
    let hello_world = warp::path::end().map(|| "Hello, World at root!");
    let hi = warp::path("hi").map(|| "Hello, World!");
    let default_route = warp::any().map(|| "Hello, World!");
    let routes = warp::any()
        .and(hello_world)
        .or(hi)
        .or(auth::auth_signup())
        .or(auth::auth_signin())
        .or(auth::auth_provider())
        .or(default_route);

    //let schema = graphql::get_schema;;
    //println!("Schema: {}", schema);
    let rows = db::db_connect();
    //match rows {
        //Ok(v) => println!("Got value from database: {:?}", v),
        //Err(e) => eprintln!("Error getting value from database {:?}", e),
    //}


    warp::serve(routes)
        .run(([0, 0, 0, 0], 8000))
        .await;
}
