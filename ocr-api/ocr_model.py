# ocr_model.py
import pytesseract
from fastapi import FastAPI, UploadFile, File
from PIL import Image
import io

app = FastAPI()

# Function to extract text from an image
def extract_text_from_image(image: Image) -> str:
    text = pytesseract.image_to_string(image)
    return text

@app.post("/extract-text/")
async def extract_text(file: UploadFile = File(...)):
    # Read the image from the uploaded file
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data))
    
    # Extract text from the image
    text = extract_text_from_image(image)
    return {"extracted_text": text}
