# Billmate Project

This is a Django project deployed on Vercel.

## Deployment Instructions

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Set up environment variables in Vercel dashboard:
- DEBUG
- SECRET_KEY
- ALLOWED_HOSTS
- DATABASE_URL

## Local Development

1. Create a virtual environment:
```bash
python -m venv .venv
```

2. Activate the virtual environment:
```bash
# Windows
.venv\Scripts\activate
# Linux/Mac
source .venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Start the development server:
```bash
python manage.py runserver
``` 