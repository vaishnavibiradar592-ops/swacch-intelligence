from fastapi import FastAPI

app = FastAPI(title="Swacch Intelligence AI")


@app.get("/")
def root():
    return {"message": "Swacch Intelligence AI is running"}


@app.get("/health")
def health():
    return {"status": "healthy"}