from pathlib import Path
import numpy as np
import pandas as pd

RNG = np.random.default_rng(42)
ROWS = 1000

population = RNG.integers(5000, 30000, ROWS)
waste_kg = RNG.uniform(500, 5000, ROWS)
segregated_kg = waste_kg * RNG.uniform(0.35, 0.90, ROWS)
complaints = RNG.integers(0, 40, ROWS)
collection_delay = RNG.uniform(0, 8, ROWS)
previous_gvp = RNG.integers(0, 2, ROWS)

segregation_rate = segregated_kg / waste_kg

risk_score = (
    0.0010 * waste_kg
    + 0.90 * complaints
    + 5.5 * collection_delay
    + 18 * previous_gvp
    + 30 * (1 - segregation_rate)
    + RNG.normal(0, 5, ROWS)
)

risk_score = np.clip(risk_score, 0, 100)

df = pd.DataFrame({
    "population": population,
    "waste_kg": np.round(waste_kg, 2),
    "segregated_kg": np.round(segregated_kg, 2),
    "complaints": complaints,
    "collection_delay": np.round(collection_delay, 2),
    "previous_gvp": previous_gvp,
    "risk_score": np.round(risk_score, 2),
})

Path("data").mkdir(exist_ok=True)

df.to_csv("data/training_data.csv", index=False)

print(f"Created {len(df)} training rows.")
print(df.head())