#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/auth")]
fn auth() -> &'static str {
   "not implemented"
}

#[get("/auth/<provider>")]
fn auth_provider(provider: String) -> String {
    println!("provider: {}", provider);

    "Some provider".to_string()
}

fn main() {
    rocket::ignite()
        .mount("/", routes![index, auth, auth_provider])
        .launch();
}
