# Usar una imagen base ligera de Python
FROM python:3.9-slim

# Evitar archivos .pyc y buffer de stdout
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Instalar dependencias del sistema si fueran necesarias (ej: gcc)
# RUN apt-get update && apt-get install -y ...

# Copiar requirements e instalar
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente
COPY main.py .

# Comando de ejecución (Cloud Run Jobs ejecuta esto al arrancar)
CMD ["python", "main.py"]
