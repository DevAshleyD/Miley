use tokio_postgres::{NoTls, Error};
use std::env;

pub async fn db_connect() -> Result<String, Error> {
    let db_user = env::var("DB_USER").unwrap_or("postgres".to_string());
    let db_pass = env::var("DB_PASS").unwrap_or("postgres".to_string());
    let db_host = env::var("DB_HOST").unwrap_or("localhost".to_string());
    let db_name = env::var("DB_NAME").unwrap_or("postgres".to_string());

    let conn_string = format!("host={} user={} password={} dbname={}", db_host, db_user, db_pass, db_name);
    let (client, connection) =
        tokio_postgres::connect(&conn_string, NoTls)
        .await?;
    println!("Spawn process");
    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("Connection error: {}", e);
        }
    });
    println!("Testing database connection");
    let rows = client
        .query("SELECT $1::TEXT", &[&"some text"])
        .await?;
    let value: &str = rows[0].get(0);
    println!("Value from database: {}:", value);
    assert_eq!(value, "some text");

    Ok(value.to_string())
}
