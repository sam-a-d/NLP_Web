from .base import *
import os
# you need to set "NLPWEB_DEVELOPMENT_MODE = 'prod'" as an environment variable
# in your OS (on which your website is hosted)
app_mode = os.environ.get('NLPWEB_DEVELOPMENT_MODE')
if app_mode == 'prod':
   from .prod import *
else:
   from .dev import *