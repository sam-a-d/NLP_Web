from pathlib import Path
import os

DEBUG = True

STATIC_URL = 'static/'

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

ALLOWED_HOSTS = [
    '192.168.31.242',
    '127.0.0.1',
    '192.168.1.103',
    'localhost'
]

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}



# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/



STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
    os.path.join(BASE_DIR, 'static/media'),
    os.path.join(BASE_DIR, 'react-app/build/static'),
]
STATIC_ROOT = os.path.join(BASE_DIR, 'assets')

MEDIA_URL = 'media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/images')

CORS_ORIGIN_ALLOW_ALL = True
