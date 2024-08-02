# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set environment variables (modify as needed)
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBIAN_FRONTEND=noninteractive

# Set the working directory within the container
# Update package list and install dependencies
#RUN apt install weasyprint

WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install app dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the container
COPY . .


EXPOSE 8002

# Set the entrypoint

# Start Gunicorn with 3 workers
CMD ["python3" "manage.py runserver", "0.0.0.1:8002"]