# Using a multi-stage build to keep the final image small
# Base image with Python and other essentials
FROM python:3.10-slim as base

# Install necessary packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the main script
COPY main.py .

# Final image
FROM base
CMD ["python", "main.py"]
