This documentation is deprecated 
========================================

The documentation here is no longer up to date. Functionality within django-misa and django-mbrowse were combined into django-mogi and functionality was developed specifically for the creation of `DMAdb <https://dmadb.bham.ac.uk/>`_.

See `dmadb-docs <https://dmadb.readthedocs.io/en/latest/>`_ for most up to date documentation.


Quick start
-----------

1. Add "mogi" and django application dependencies to your INSTALLED_APPS setting like this (mogi should come before gfiles, galaxy, mbrowse and misa)::


    INSTALLED_APPS = [
        ...
        'mogi',
        'misa',
        'mbrowse',
        'galaxy',
        'gfiles',

        'django_tables2',
        'django_tables2_column_shifter',
        'django_filters',
        'bootstrap3',
        'django_sb_admin',
        'dal',
        'dal_select2',
    ]

2. Include the URLconf in your project urls.py like this::


    url(r'^', include('gfiles.urls')),
    url('mogi/', include('mogi.urls')),
    url('mbrowse/', include('mbrowse.urls')),
    url('misa/', include('misa.urls')),
    url('galaxy/', include('galaxy.urls')),


3. Run `python manage.py migrate` to create the mogi models.

4. Start the development server and visit http://127.0.0.1:8000/

5. Register http://127.0.0.1:8000/register/ and login http://127.0.0.1:8000/login/

6. General overview http://127.0.0.1:8000

7. Create, edit, view and export ISA projects http://127.0.0.1:8000/misa/ilist/

8. Upload to Galaxy, run Galaxy workflows and view Galaxy histories http://127.0.0.1:8000/misa/ilist/

9. Browse, view and search metabolomic datasets http://127.0.0.1:8000/mbrowse/general_summary/