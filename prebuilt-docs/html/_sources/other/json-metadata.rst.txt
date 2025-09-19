Metadata in JSON format
===========

.. warning::
   *For advanced use and developers only* 

Metadata extraction in JSON format
-----------
All metadata extracted from the XML files can be saved in a JSON format. The format is easily interchangeable with python dictionaries can also be easily 'piped' to other bioinformatic pipelines regardless of programming language used.



Adding experimental metadata via JSON format
-----------

Additional metadata not found in the XML files can be added in a JSON format e.g. organism studied, chromatography used, contact details etc.

This allows existing bioinformatic/computational workflows, which may already have collected some additional metadata, to automatically populate additional entries in the ISA-Tab files.

Example format:

.. highlight:: json

.. code:: json

   {
	"characteristics": {
		"organism": {
			"name": "",
			"accession": "",
			"ref": ""
		},
		"organism_variant": {
			"name": "",
			"accession": "",
			"ref": ""
		},
		"organism_part": {
			"name": "",
			"accession": "",
			"ref": ""
		}
	} ....


   }
   
See the following link for full `example of JSON used for mzml2isa. <http://codebeautify.org/jsonviewer/cba2a5c8>`__   

Example templates for the metadata JSON can be extracted from either mzml2isa-qt, imzml2isa-qt or nmrml2isa-qt.

Run either of the following:

.. highlight:: bash

.. code:: bash

   python3 -m mzml2isa_qt.usermeta
   python3 -m imzml2isa_qt.usermeta
   python3 -m nmrml2isa_qt.usermeta

Add any metadata through the GUI and then click apply. The terminal will then spit out the JSON text.




**Adding additional metadata via JSON for CLI:**

For the CLI simply use the ``-m`` option and direct to the json file. 

.. highlight:: bash
.. code:: bash

   mzml2isa -i /path/to/mzml/folder -o /path/to/out_folder -s STUDYID -m metadata.json
   nmrml2isa -i /path/to/mzml/folder -o /path/to/out_folder -s STUDYID -m metadata.json


**Adding additional metadata via JSON for API:**

For the API the ``usermeta`` paramater can be used to pass the JSON metadata as a python dictionary to the ISA_Tab class. See the following API documentation for class `mzml2isa.isa.ISA_Tab <http://2isa.readthedocs.io/en/latest/mzml2isa/api/isatab.html>`__  and class `nmrml2isa.isa.ISA_Tab <http://2isa.readthedocs.io/en/latest/nmrml2isa/api/isatab.html>`__ 


**Adding additional metadata via JSON for Galaxy:**

This metadata can be added manually via the dropdown options or via a prepared JSON file using the ``Additional user metadata in json`` option.


**Adding additional metadata via JSON for GUI:**

Not possible. This metadata is added directly via the GUI using the usermeta dialog. 


