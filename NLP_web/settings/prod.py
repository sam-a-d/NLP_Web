from pathlib import Path
import os

DEBUG = False

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

ALLOWED_HOSTS = [
    'banglasketch.org',
    'sa.banglasketch.org',
    '192.168.31.242',
    '103.84.157.130',
    '192.168.1.103',
    '192.168.1.1',
    '127.0.0.1',
]

# postgre database configuration
DATABASES = {
    'default': {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': 'nlpweb',
    'USER': 'nlpweb',
    'PASSWORD': '123@$457',
    'HOST': '127.0.0.1',
    'PORT': '5432',
    }
}


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/



STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]


STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, '/var/www/djago_files/nlp_web/static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, '/var/www/djago_files/nlp_web/media')