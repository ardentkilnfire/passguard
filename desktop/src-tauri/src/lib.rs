#[cfg_attr(mobile, tauri::mobile_entry_point)]

use tauri::Manager;

pub fn run() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![process_secret_key])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
async fn process_secret_key(window: tauri::Window, key: String) {

  // Example validation (replace with actual logic)
  let is_valid = key == "01$a06*";

  // Emitting an event back to the frontend with the validation result
  window.emit("secret_key_validation", &is_valid).expect("Failed to emit event");
}