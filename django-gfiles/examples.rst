Examples
========


All these examples assume we are working on a folder organized
as the following (which is not mandatory, you just have to
put all your nmrML and zipped raw files in the same folder):

.. highlight:: none

.. parsed-literal::

   /
   └ home/
      └ metabolomics/
         └ NMRML study/       # the name of the folder doesn't matter
            ├ Sample1.nmrML   # the name of the file must correspond to the sample name
            ├ Sample1.zip     # the raw files must be zipped and named as the nmrML file
            ├ Sample2.nmrML
            ├ Sample2.zip
            └ ...




Standalone program
------------------

Create a new MetaboLights study with existing nmrML data:

.. code:: bash

   nmrml2isa -i "/home/metabolomics/NMRML study" -o "/home/metabolomics/isa" -s NMRML1


This will create a new folder and write the following ISA-Tab files:

.. highlight:: none

.. parsed-literal::

   /
   └ home/
      └ metabolomics/
         └ isa/
            ├ a_NMRML1_metabolite_profiling_NMR_spectroscopy.txt
            ├ i_Investigation.txt
            └ s_NMRML1.txt



Python module
-------------

.. highlight:: python


To do the exact same thing within a Python program:

.. code:: python

   from nmrml2isa.parsing import full_parse
   full_parse("/home/metabolomics/NMRML study", "/home/metabolomics/isa", "NMRML1")


It is also possible only to extract metadatas: for instance,
let's say we want to separate .nmrML files within the same directory
based on what the Acquisition Nucleus was for that particular NMR scan:

.. code:: python

   from nmrml2isa.nmrml import nmrMLmeta
   import os

   sorted_files = {}
   in_dir = '/home/metabolomics/NMRML study'

   for file in os.listdir(in_dir):

      meta = nmrMLmeta(os.path.join(in_dir, file)).meta

      if 'Acquisition Nucleus' in meta.keys():

         if meta['Acquisition Nucleus']['name'] not in sorted_files.keys():
            sorted_files[meta['Acquisition Nucleus']['name']] = []

         sorted_files[meta['Acquisition Nucleus']['name']].append(file)


At the end of that snippet, ``sorted_files`` keys will be the different acquisition
nucleuses used and the value of each key will be a list of nmrML files where that nucleus was used.
