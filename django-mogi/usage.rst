Usage
=====



Folder structure
----------------

mzML
''''

.. highlight:: none

For mzML files, mzml2isa only requires that you put all you files in
the same folder, and parsing should work fine. Note that reference to
RAW files is extracted from the mzML files, so if you plan to create an
ISA archive after mzml2isa creates ISA files, don't forget to include
those as well.

Example structure::

   /
   └ home/
     └ metabolomics/
       └ MZML study/      # the name of the folder doesn't matter
         ├ Sample1.mzML   # the name of the file must correspond to the sample name
         ├ Sample2.mzML
         └ ...


imzML
'''''

For imzML files, you must have your imzML files in the same folder, but also
the low- and high-res images of your scans (*.jpg, *.ibd, *.ndpi, etc...)
named exactly like the imzML file of that particular scan (as mzml2isa scans
the directory of the source file to eventually extract the location of
those images)::

   /
   └ home/
     └ metabolomics/
       └ MTBLS289/
         ├ A14 5cm S3.ndpi
         ├ A14 5cm S3.jpg               # Sample name will be
         ├ A14 5cm S3-centroid.ibd      # "A14 5cm S3"
         ├ A14 5cm S3-centroid.imzML    # and centroid and profile
         ├ A14 5cm S3-profile.ibd       # scans will be merged.
         ├ A14 5cm S3-profile.imzML
         ├ A14 10cm S3.ndpi
         ├ A14 10cm S3.jpg              # Sample name will be
         ├ A14 10cm S3-centroid.ibd     # "A14 10cm S3"
         ├ A14 10cm S3-centroid.imzML   # and centroid and profile
         ├ A14 10cm S3-profile.ibd      # scans will be merged
         ├ A14 10cm S3-profile.imzML
         └ ...

Furthermore, mzml2isa tries to merge centroid and profile scans of the same sample
into the same ISA-Tab row. Merging of said files relies on alphabetic order of files
to make centroid and profile scans correspond to each other, which means the following
structure will work::

  IMZML study/
  ├ Sample1_centroid.imzML
  ├ Sample1_profile.imzML
  ├ Sample2_centroid.imzML
  ├ Sample2_profile.imzML
  └ ...

This will also work::

  IMZML study/
  ├ c_Sample1.imzML
  ├ p_Sample1.imzML
  ├ c_Sample2.imzML
  ├ p_Sample2.imzML
  └ ...

Or even this::

  IMZML study/
  ├ Sample1_1.imzML
  ├ Sample1_2.imzML
  ├ Sample2_1.imzML
  ├ Sample2_2.imzML
  └ ...

Any structure in which centroid and profile scans are sequentially in the same
rank following alphabetic order will probably work.


CLI
---

.. code:: bash

   mzml2isa -i /path/to/mzml/folder -o /path/to/out_folder -s STUDYID


Python module
-------------

.. highlight:: python

.. code:: python

   from mzml2isa.parsing import full_parse
   full_parse("/path/to/mzml/folder", "/path/to/out_folder", "STUDYID")
   # this will do the same thing as the command line above.


See the :doc:`Examples <examples>` and the :doc:`API reference <api/index>`
for more hindsights.


Editing with ISAcreator
----------------
The ISA-Tab structure can be further populated with the `ISAcreator software  <http://isa-tools.org/software-suite/>`__.

See brief `tutorial <http://2isa.readthedocs.io/en/latest/other/isacreator.html>`__  for more details. 

