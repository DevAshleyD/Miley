use tokio_postgres::{NoTls, Error};

pub async fn db_connect() -> Result<String, Error> {
    println!("Connect to database");
    let (client, connection) =
        tokio_postgres::connect("host=localhost user=shavit password=1234 dbname=miley", NoTls)
        .await?;
    println!("Spawn process");
    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("Connection error: {}", e);
        }
    });
    println!("Select rows");
    let rows = client
        .query("SELECT $1::TEXT", &[&"some text"])
        .await?;
    let value: &str = rows[0].get(0);
    println!("Value from database: {}:", value);
    assert_eq!(value, "some text");

    Ok(value.to_string())
    //Ok(())
}
