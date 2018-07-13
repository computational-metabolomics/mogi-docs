Usage
=====

Folder structure
----------------

nmrML
'''''

.. highlight:: none

nmrml2isa only requires that you put all you nmrML and zipped raw files
in the same folder, and parsing should work fine. Note that reference to
RAW files is extracted from the mzML files, so if you plan to create an
ISA archive after mzml2isa creates ISA files, don't forget to include
those as well.

Example structure::

   /
   └ home/
     └ metabolomics/
       └ nmrML study/     # the name of the folder doesn't matter
         ├ Sample1.nmrML  # the name of the file must correspond to the sample name
         ├ Sample2.zip    # the raw files should be zipped and called exactly like the nmrML
         ├ Sample2.nmrML
         ├ Sample2.zip
         └ ...


CLI
---
.. highlight:: bash

.. code:: bash

   nmrml2isa -i /path/to/nmrml/folder -o /path/to/out_folder -s STUDYID


Python module
-------------
.. highlight:: python

.. code:: python

   from nmrml2isa.parsing import full_parse
   full_parse("/path/to/nmrml/folder", "/path/to/out_folder", "STUDYID")
   # this will do the same thing as the command line.


See the :doc:`Examples <examples>` and the :doc:`API reference <api/index>`
for more hindsights.

Editing with ISAcreator
----------------
The ISA-Tab structure can be further populated with the `ISAcreator software  <http://isa-tools.org/software-suite/>`__.

See brief `tutorial <http://2isa.readthedocs.io/en/latest/other/isacreator.html>`__  for more details. 