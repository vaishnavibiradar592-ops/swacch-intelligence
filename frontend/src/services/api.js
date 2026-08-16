const API_URL = "http://127.0.0.1:8000";

export async function getWards() {
  const response = await fetch(`${API_URL}/api/wards`);

  if (!response.ok) {
    throw new Error("Failed to load wards");
  }

  return response.json();
}

export async function getWard(wardId) {
  const response = await fetch(
    `${API_URL}/api/wards/${wardId}`
  );

  if (!response.ok) {
    throw new Error("Failed to load ward");
  }

  return response.json();
}

export async function predictGVP(data) {
  const response = await fetch(
    `${API_URL}/predict`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );

  if (!response.ok) {
    throw new Error("GVP prediction failed");
  }

  return response.json();
}