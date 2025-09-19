Examples
========

CLI
---

Create a new MetaboLights study with existing nmrML data:

.. code:: bash

   mzml2isa -i "/home/metabolomics/NMRML study" -o "/home/metabolomics/isa" -s MZML1


This will create a new folder and write the following ISA-Tab files:

.. highlight:: none

.. parsed-literal::

   /
   └ home/
      └ metabolomics/
         └ isa/
            ├ a_MZML1_metabolite_profiling_mass_spectrometry.txt
            ├ i_Investigation.txt
            └ s_MZML1.txt



Python module
-------------

.. note::

   Syntax for imzML and mzML is the same, except when the
   class `mzMLmeta` is used: for imzML files, simply replace
   `mzMLmeta` with `imzMLmeta`.


Extract metadata of a file called `sample1.mzML` and print
a JSON dictionary containing those metadata

.. highlight:: bash

.. code:: bash

   python -m mzml2isa.mzml sample1.mzML


Or within a Python program

.. highlight:: python

.. code:: python

   from mzml2isa.mzml import mzMLmeta
   mz = mzMLmeta('sample1.mzML')

   # json formatted dict
   print(mz.meta_json)

   # same metadata, Python dict
   print(mz.meta['Sample Name']['value'])
