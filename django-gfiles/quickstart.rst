This documentation is deprecated 
========================================

The documentation here is no longer up to date. Functionality within django-misa and django-mbrowse were combined into django-mogi and functionality was developed specifically for the creation of `DMAdb <https://dmadb.bham.ac.uk/>`_.

See `dmadb-docs <https://dmadb.readthedocs.io/en/latest/>`_ for most up to date documentation.

Quick start
========================================

1. Add "gfiles" and django application dependencies to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'gfiles',

        'django_tables2',
        'bootstrap3',
        'django_tables2_column_shifter',
        'django_sb_admin',
        'django_filter'
    ]

2. Include the polls URLconf in your project urls.py like this::

    url(r'^', include('gfiles.urls')),

3. Run `python manage.py migrate` to create the models.

4. Start the development server and visit http://127.0.0.1:8000

5. Register http://127.0.0.1:8000/register/ and login http://127.0.0.1:8000/login/

6. Add files (need to be logged in) http://127.0.0.1:8000/upload_gfile/

7. View and filter files http://127.0.0.1:8000/gfile_summary/