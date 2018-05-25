Usage
=====

Folder structure
----------------

For mzML files, mzml2isa only requires that you put all you files in
the same folder, and parsing should work fine. Note that reference to
RAW files is extracted from the mzML files, so if you plan to create an
ISA archive after mzml2isa creates ISA files, don't forget to include
those as well.

Example structure::

   /
   └ home/
     └ metabolomics/
       └ MZML study1/      # the name of the folder doesn't matter
         ├ Sample1.mzML   # the name of the file must correspond to the sample name
         ├ Sample2.mzML
         └ ...
       └ MZML study2/      # the name of the folder doesn't matter
         ├ Sample1.mzML   # the name of the file must correspond to the sample name
         ├ Sample2.mzML
         └ ...

See the `mzml2isa <http://2isa.readthedocs.io/en/latest/mzml2isa/usage.html>`__  documentation for more details. 

The folders need to be zipped before adding to galaxy e.g. MZML study1.zip. The zipped folders are then added 1 at a time through the GetData interface of Galaxy.

Getting data into Galaxy
----------------
Using the GetData tab, add the zipped metabolomics study into galaxy. Remember to use the 'zip' file type


.. image:: ../nmrml2isa-galaxy/galaxy_1.png

Running nmrml2isa
----------------

.. image:: galaxy_2a.png


1.  Study name
2.  zipped folder containing the nmrML files
3.  For advanced users only. This allows any additional metadata to be added in json format see `json format <http://2isa.readthedocs.io/en/latest/json-metadata/index.html>`__ 
4.  Optional simple additional metadata can be added manually through the dropdown tabs

Output
----------------

.. image:: ../nmrml2isa-galaxy/galaxy_3.png

The output consists of the following:

* I File: Investigation file
* S Files: Dataset collection containing 1 or more study files
* A Files: Dataset collection containing 1 or more assay files
* ISA zip file: A zip file containing all of the outputs

Editing with ISAcreator
----------------
The ISA-Tab structure can be further populated with the `ISAcreator software  <http://isa-tools.org/software-suite/>`__.

See brief `tutorial <http://2isa.readthedocs.io/en/latest/other/isacreator.html>`__  for more details. 



