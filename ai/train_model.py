from pathlib import Path

import joblib
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score


DATA_PATH = Path("data/training_data.csv")
MODEL_PATH = Path("model/risk_model.pkl")


df = pd.read_csv(DATA_PATH)

features = [
    "population",
    "waste_kg",
    "segregated_kg",
    "complaints",
    "collection_delay",
    "previous_gvp",
]

X = df[features]
y = df["risk_score"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)

model = RandomForestRegressor(
    n_estimators=200,
    random_state=42,
)

model.fit(X_train, y_train)

predictions = model.predict(X_test)

mae = mean_absolute_error(y_test, predictions)
r2 = r2_score(y_test, predictions)

MODEL_PATH.parent.mkdir(exist_ok=True)
joblib.dump(model, MODEL_PATH)

print("Model training completed.")
print(f"MAE: {mae:.2f}")
print(f"R²: {r2:.2f}")
print(f"Model saved to: {MODEL_PATH}")