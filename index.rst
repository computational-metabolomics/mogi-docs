MOGI suite
========================================




Django applications & projects
''''''''''''''''''''''''''''''''''''''''''''''''''

The MOGI suite is a collection of Django applications to manage and organise
metabolomic studies using Galaxy, ISA and Django frameworks.

The suite consist of the following reusable applications:

* :ref:`django-mogi`
* :ref:`django-misa`
* :ref:`django-galaxy`
* :ref:`django-mbrowse`
* :ref:`django-gfiles`


The **django-mogi** application inherits all of the detailed applications below to create ready to go framework for
organising metabolomics studies with Galaxy and ISA. See the `example code <https://domain.invalid/>`_
and an `example site <https://domain.invalid/>`_ for how a Django project utilises the MOGI suite.

However each application has been developed to be
`reusable <https://docs.djangoproject.com/en/2.0/intro/reusable-apps/#reusability-matters>`_ to allow for more general
functionality to be used in other Django projects and applications.

The figure below shows how the applications fit within Django project website

.. image:: mogi-suite.svg


What the MOGI framework can do
''''''''''''''''''''''''''''''''''''''''''''''''''
* Organise metabolomics studies following ISA framework
* Interface with Galaxy (initiate workflows, manage history, inport/export data)
* Search metabolomics spectra across multiple projects (spectral matching, mass search)
* Summarise compound annotations (e.g. from different annotation approaches like MetFrag, CSI:FingerID, spectral matching)



User Documentation
''''''''''''''''''''''''''''''''''''''''''''''''''

.. toctree::
   :maxdepth: 2

   User docs <user-docs/index.rst>


django-mogi
''''''''''''''''''''''''''''''''''''''''''''''''''
Metabolome Organisation with Galaxy and ISA (imports all of the django-applications within the Django MOGI application suite)

.. toctree::
   :maxdepth: 2

   django-mogi <django-mogi/index.rst>

django-galaxy
''''''''''''''''''''''''''''''''''''''''''''''''''
Django interfacing with Galaxy. Backend using the bioblend API.

.. toctree::
   :maxdepth: 2

   django-galaxy  <django-galaxy/index.rst>


django-misa
''''''''''''''''''''''''''''''''''''''''''''''''''
ISA organisation for metabolomic studies with Django

.. toctree::
   :maxdepth: 2

   django-misa <django-misa/index.rst>


django-mbrowse
''''''''''''''''''''''''''''''''''''''''''''''''''
Browse, view and search metabolomic datasets


.. toctree::
   :maxdepth: 2

   django-mbrowse <django-mbrowse/index.rst>


django-gfiles
''''''''''''''''''''''''''''''''''''''''''''''''''
Simple file management for generic files in Django

.. toctree::
   :maxdepth: 2

   django-gfiles <django-gfiles/index.rst>



About
''''''''''''''''''''''''''''''''''''''''''''''''''

.. toctree::

   Contacts  <contacts.rst>
