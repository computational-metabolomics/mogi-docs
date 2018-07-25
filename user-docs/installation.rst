.. _installation:

Installation
========================================

The quickest way to try out the MOGI suite of Django applications is to use the docker image. This should be run with
alongside the docker of a modified Worfklow4Metabolomics Galaxy docker that contains all the tools and workflows that
are required.

A demo django project has also been created that can be used without Docker see ...

Individual components can be installed into existing Django projects as well, see the "quick start" section of the
documentation for each Django application.

The `example project site <https://github.com/computational-metabolomics/django-mogisite>`_ can also be used as a
standard Django project, see below:

1. `pip install django-mogi`

2. `git clone https://github.com/computational-metabolomics/django-mogisite`

3. `cd django-mogisite`

2. `python manage.py migrate` to create the mogi models.

3. Start the development server and visit http://127.0.0.1:8000/

4. Register http://127.0.0.1:8000/register/ and login http://127.0.0.1:8000/login/
