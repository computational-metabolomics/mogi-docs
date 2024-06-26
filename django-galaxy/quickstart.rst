This documentation is deprecated 
========================================

The documentation here is no longer up to date. Functionality within django-misa and django-mbrowse were combined into django-mogi and functionality was developed specifically for the creation of `DMAdb <https://dmadb.bham.ac.uk/>`_.

See `dmadb-docs <https://dmadb.readthedocs.io/en/latest/>`_ for most up to date documentation.


Quick start
========================================

1. Add "galaxy" and django application dependencies to your INSTALLED_APPS setting like this (galaxy should come before gfiles)::

    INSTALLED_APPS = [
        ...
        'galaxy',
        'gfiles',

        'django_tables2',
        'bootstrap3',
        'django_tables2_column_shifter',
        'django_sb_admin',
        'django_filter'
    ]

2. Include the polls URLconf in your project urls.py like this::

    url(r'^', include('gfiles.urls')),
    path('galaxy/', include('galaxy.urls')),

3. Run `python manage.py migrate` to create the models.

4. Start the development server and visit http://127.0.0.1:8000

5. Register http://127.0.0.1:8000/register/ and login http://127.0.0.1:8000/login/

6. View summary of Galaxy instances and options http://127.0.0.1:8000/galaxy/galaxy_summary/

7. Register Galaxy instance http://127.0.0.1:8000/galaxy/addgi/

8. Register Galaxy user http://127.0.0.1:8000/galaxy/addguser/

9. Upload file(s) to Django (for bulk upload of files see django-misa and django-mogi) http://127.0.0.1:8000/upload_gfile/

10. Upload file(s) to Galaxy data library (for bulk upload of files see django-misa and django-mogi) http://127.0.0.1:8000/galaxy/files_to_galaxy_datalib/

11. Run workflow (for running workflows with ISA data see django-misa and django-mogi) http://127.0.0.1:8000/galaxy/workflow_summary/

12. View histories http://127.0.0.1:8000/galaxy/history_status/