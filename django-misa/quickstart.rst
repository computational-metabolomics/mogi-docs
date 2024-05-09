This documentation is deprecated 
========================================

The documentation here is no longer up to date. Functionality within django-misa and django-mbrowse were combined into django-mogi and functionality was developed specifically for the creation of `DMAdb <https://dmadb.bham.ac.uk/>`_.

See `dmadb-docs <https://dmadb.readthedocs.io/en/latest/>`_ for most up to date documentation.



Quick start
-----------

1. Add "mbrowse" and django application dependencies to your INSTALLED_APPS setting like this (mbrowse should come before gfiles)::

    INSTALLED_APPS = [
        ...
        'mbrowse',
        'gfiles',

        'django_tables2',
        'bootstrap3',
        'django_tables2_column_shifter',
        'django_sb_admin',
        'django_filter'
        'dal',
        'dal_select2',
    ]

2. Include the polls URLconf in your project urls.py like this::

    url(r'^', include('gfiles.urls')),
    path('mbrowse/', include('mbrowse.urls')),

3. Run `python manage.py migrate` to create the mbrowse models.

4. Start the development server and visit http://127.0.0.1:8000/mbrowse/general_summary

5. Register http://127.0.0.1:8000/register/ and login http://127.0.0.1:8000/login/

6. Upload metabolomics mzML files (can also be done with djang-misa and django-mogi) http://127.0.0.1:8000/mbrowse/upload_mfiles_batch/

7. Upload LC-MS data set (can be done through galaxy, see django-mogi) http://127.0.0.1:8000/mbrowse/upload_lcms_dataset/

8. Browse and view the datasets http://127.0.0.1:8000/mbrowse/cpeakgroupmeta_summary/

9. Browse and view the annotations http://127.0.0.1:8000/mbrowse/cpeakgroupmeta_summary/

10. Search the datasets http://127.0.0.1:8000/mbrowse/search_result_summary/