# Tailor Project

## Project Overview
This project is a tailor management system with functionalities for user registration, service booking, and more.

## Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/Baikun1/tailor.git
cd tailor
```

### 2. Set up a virtual environment
```bash
python -m venv venv
```

### 3. Activate the virtual environment
#### On Windows:

```bash
.\venv\Scripts\activate
```
#### On macOS/Linux:

```bash
source venv/bin/activate
```

### 4. Install required packages
```bash
pip install -r requirements.txt
```
### 5. Apply migrations
```bash
python manage.py migrate
```
### 6. (Optional) Create a superuser to access the admin panel
```bash
python manage.py createsuperuser
```
### 7. Run the development server
```bash
python manage.py runserver
```

### 8. Access the application
Open your web browser and navigate to:
```bash
http://127.0.0.1:8000/
```
#### Project Structure
tailor/ - Main project folder containing settings, URLs, and WSGI application
app/ - Application folder containing models, views, templates, and static files
templates/ - HTML templates for the project
static/ - Static files (CSS, JavaScript, images)
requirements.txt - List of Python dependencies
#### Usage
Use the navigation bar to explore different sections of the website.
Search for specific content using the search bar.
Sign in or register a new account to access additional features.
