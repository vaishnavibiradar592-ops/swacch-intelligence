from pathlib import Path

import joblib
from fastapi import FastAPI
from pydantic import BaseModel


MODEL_PATH = Path("model/risk_model.pkl")

model = joblib.load(MODEL_PATH)

app = FastAPI(title="Swacch Intelligence AI")


class WardData(BaseModel):
    population: int
    waste_kg: float
    segregated_kg: float
    complaints: int
    collection_delay: float
    previous_gvp: int


@app.get("/")
def root():
    return {"message": "Swacch Intelligence AI prediction API is running"}


@app.post("/predict")
def predict(data: WardData):
    features = [[
        data.population,
        data.waste_kg,
        data.segregated_kg,
        data.complaints,
        data.collection_delay,
        data.previous_gvp,
    ]]

    prediction = model.predict(features)[0]

    return {
        "risk_score": round(float(prediction), 2)
    }