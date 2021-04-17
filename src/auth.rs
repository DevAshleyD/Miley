use warp::{filters::BoxedFilter, Filter, Rejection, Reply};
use serde::{Serialize, Deserialize};
use std::convert::Infallible;
use jsonwebtoken::{decode, encode, Algorithm, DecodingKey, EncodingKey, Header, Validation, errors::Error};


#[derive(Serialize, Deserialize, Debug)]
pub struct Account {
    pub id: String,
    pub name: String,
    pub email: String,
}
#[derive(Serialize, Deserialize, Debug)]
pub struct AuthResponse {
    pub token: String,
    pub refresh_token: String
}
#[derive(Debug, Deserialize, Serialize)]
struct Claims {
    sub: String,
    role: String,
    exp: usize,
}

const BEARER: &str = "Bearer ";
const JWT_SECRET: &[u8] = b"some secret";

fn sign_token(account: &Account) -> Result<String, Error> {
    let exp = chrono::Utc::now()
        .checked_add_signed(chrono::Duration::seconds(60))
        .expect("valid timestamp")
        .timestamp();
    let claims = Claims {
        sub: account.id.to_owned(),
        role: "user".to_string(),
        exp: exp as usize,
    };
    let header = Header::new(Algorithm::HS512);

    encode(&header, &claims, &EncodingKey::from_secret(JWT_SECRET))
}

fn get_auth_response(account: &Account) -> AuthResponse {
    let jwt_token = sign_token(&account).unwrap();
    let jwt_refresh_token = sign_token(&account).unwrap();

    let resp  = AuthResponse {
        token: jwt_token,
        refresh_token: jwt_refresh_token,
    };

    return resp
}

pub fn auth_signin() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::post().and(warp::path("auth")).and_then(signin)
}
async fn signin() -> Result<impl warp::Reply, Infallible> {
    let account = Account{
        id: "some id".to_string(),
        name: "some name".to_string(),
        email: "some email".to_string(),
    };
    let auth_response = get_auth_response(&account);

    Ok(warp::reply::json(&auth_response))
}

pub fn auth_signup() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::post().and(warp::path!("auth" / "new")).and_then(signup)
}

async fn signup() -> Result<impl warp::Reply, Infallible> {
    let account = Account{
        id: "some id".to_string(),
        name: "some name".to_string(),
        email: "some email".to_string(),
    };
    let auth_response = get_auth_response(&account);

    Ok(warp::reply::json(&auth_response))
}

pub fn auth_provider() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::get()
        .and(warp::path!("auth" / "provider"))
        .and_then(provider)
}

use crate::db::db_connect;
async fn provider() -> Result<impl warp::Reply, Infallible> {
    //let rows = db_connect().await;
    //println!("Received value: {:?}", rows);

    let account = Account{
        id: "some id".to_string(),
        name: "some provider".to_string(),
        email: "some email".to_string(),
    };
    let auth_response = get_auth_response(&account);

    Ok(warp::reply::json(&auth_response))
}
