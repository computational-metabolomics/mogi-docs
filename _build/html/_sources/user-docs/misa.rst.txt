.. _misa-user-docs:

Manage Metabolomic ISA projects
========================================

The functionality is summarised along with any current ISA projects at http://127.0.0.1:8000/mbrowse/general_summary

Create ISA backbone for a project
''''''''''''''''''''''''''''''''''''''''''''''''''
To initiate an ISA project the backbone of the ISA project has to be created. e.g. the investigation, study and assay
details.

First an investigation has to be created, this only requires the name of the overall ISA project and a short description.
 One or more studies can then be created and assigned to an investigation. Further details are added at this stage including
 any study descriptors.

Assays can then be added individually or through a batch batch process (see section **Bulk upload assay data and details**).


.. image:: misa-create-base.png


Once an investigation has been created. The ISA project will be visible in the summary table. Further details can
then be shown by clicking on the details section.

Preliminary work has been made so that the ISA project can be exported as an ISA-JSON file.

Currently only admin users can delete the projects via the standard Django admin interface (e.g. at 127.0.0.1:8000/admin).

.. image:: summary-options.png

Create protocols for ISA
''''''''''''''''''''''''''''''''''''''''''''''''''



Add samples to study
''''''''''''''''''''''''''''''''''''''''''''''''''


Add samples
''''''''''''''''''''''''''''''''''''''''''''''''''


Add data files to assay
''''''''''''''''''''''''''''''''''''''''''''''''''


Bulk upload assay data and details
''''''''''''''''''''''''''''''''''''''''''''''''''


