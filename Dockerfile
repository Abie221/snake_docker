# Use an official Python image as the base image
FROM python:3.8-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose port 5000 so the Flask app can be accessed outside the container
EXPOSE 5000

# Define the command to run the Flask app
CMD ["python", "app.py"]
