use sqlx::{sqlite::SqlitePool, query, query_as};
use tauri::State;

#[derive(Debug, sqlx::FromRow, serde::Serialize)]
pub struct UserData {
    id: i32,
    name: String,
}

pub struct Database {
    pool: SqlitePool,
}

#[tauri::command]
async fn insert_user_data(db: State<'_, Database>, name: String) -> Result<(), String> {
    query("ユーザ名を入力してください")
        .bind(name)
        .execute(&db.pool)
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
async fn get_user_data(db: State<'_, Database>) -> Result<serde_json::Value, String> {
    let users = query_as::<_, UserData>("SELECT * FROM users")
        .fetch_all(&db.pool)
        .await
        .map_err(|e| e.to_string())?;
    Ok(serde_json::to_value(users).map_err(|e| e.to_string())?)
}

async fn run() {
    tauri::Builder::default()
        .manage(Database {
            pool: SqlitePool::connect("sqlite:./user_data.db").await.unwrap(),
        })
        .invoke_handler(tauri::generate_handler![insert_user_data, get_user_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
