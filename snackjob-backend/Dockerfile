# Usa un'immagine base di Python
FROM python:3.9-slim-bullseye


# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di progetto nella directory di lavoro
COPY . .

RUN apt-get update && apt-get install gunicorn -y

# Installa le dipendenze
RUN pip install --no-cache-dir poetry \
    && poetry config virtualenvs.create false \
    && poetry install

# Esponi la porta su cui l'applicazione sarà in ascolto
EXPOSE 8000

# Comando per avviare l'applicazione
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:8000"]