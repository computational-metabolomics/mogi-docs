:tocdepth: 1


Extracted Terms list
====================

.. _extracted_mzml:

mzML
''''

.. glossary::

  `Data Transformation Name <http://purl.obolibrary.org/obo/MS_1000452>`__
    .. highlight:: none

    .. parsed-literal::

       - type:
         list of cv terms
       - definition:
         The successive transformation process the MS data underwent
         (all being subclasses of NMR:1400042)
       - example value:
         {"entry_list": [
            {"accession": "http://purl.obolibrary.org/obo/MS_1000544",
             "name": "Conversion to mzML","ref": "MS"},
            {"accession": "http://purl.obolibrary.org/obo/MS_1000035",
             "name": "peak picking","ref": "MS"}
         ]}

  `Data Transformation software <http://purl.obolibrary.org/obo/MS_1001457>`__
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The software that was used for the data transformations
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/MS_1000615",
          "name": "ProteoWizard software","ref": "MS"}

  Data Transformation software version
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition
         The version of the data transformation software
       - example value:
         {"value": "3.0.6002"}

  `Data file checksum type <http://purl.obolibrary.org/obo/MS_1000561>`__

    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value
       - definition
         The type of the checksum used to check the data file integrity
       - example value
         {"accession": "http://purl.obolibrary.org/obo/MS_1000569",
          "name": "SHA-1","ref": "MS",
          "value": "58f67219180d0e67da2b8f1652681b925371fcb9"}

  `Data file content <http://purl.obolibrary.org/obo/MS_1000524>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         list of cv terms
       - definition
         The contents of the Raw Data files
       - example value
         {"entry_list": [
            {"accession": "http://purl.obolibrary.org/obo/MS_1000579",
             "name": "MS1 spectrum","ref": "MS"},
            {"accession": "http://purl.obolibrary.org/obo/MS_1000580",
             "name": "MSn spectrum","ref": "MS"}
         ]},

  Derived Spectral Data File
    .. highlight:: none

    .. parsed-literal::

        - type:
        free text
        - definition
        The name of the derived spectral data file (the .mzML file itself)
        - example value:
          {"value": "Person30_RBC_elder_NEG.mzML"}

  `Detector  <http://purl.obolibrary.org/obo/MS_1000026>`__
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition
         The detector used in the mass spectrometer (child of MS:1000026)
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/MS_1000253",
          "name": "electron multiplier","ref": "MS"}

  `Inlet type <http://purl.obolibrary.org/obo/MS_1000007>`__
    .. highlight:: none

    .. parsed-literal::

        - type
          cv term
        - definition
          The type of inlet (child of MS:1000007)
        - example value:
          {"accession": "http://purl.obolibrary.org/obo/MS_1000057",
           "name": "electrospray inlet","ref": "MS"}

  `Instrument <http://purl.obolibrary.org/obo/MS_1000031>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The mass spectrometry instrument used for the scan
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/MS_1000449",
          "name": "LTQ Orbitrap","ref": "MS"}

  `Instrument manufacturer <http://purl.obolibrary.org/obo/MS_1001269>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The manufacturer of the MS instrument
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/MS_1000483",
          "name": "Thermo Fisher Scientific instrument model","ref": "MS"}

  `Instrument serial number <http://purl.obolibrary.org/obo/MS_1000529>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         free text
       - definition
         The serial number of the MS instrument
        "value": "1057B"

  `Instrument software <http://purl.obolibrary.org/obo/MS_1001455>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The software used by the MS instrument
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/MS_1000532",
          "name": "Xcalibur","ref": "MS"}

  Instrument software version
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition
         The version of the Instrument software
       - example value:
         {"value": "2.2"}

  `Ion source <http://purl.obolibrary.org/obo/MS_1000008>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The method by which gas phase ions are generated from the sample.
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/MS_1000073",
          "name": "electrospray ionization","ref": "MS"}

  MS Assay Name
    .. highlight:: none

    .. parsed-literal::

       - type
         free text
       - definition
         The name of the MS Assay (mzML file name w/o extension)
       - example value
         {"value": "Person30_RBC_elder_NEG"}

  `Mass analyzer <http://purl.obolibrary.org/obo/MS_1000443>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         How ions are separated according to their mass-to-charge ratio
       - example value
         {"accession": "http://purl.obolibrary.org/obo/MS_1000083",
          "name": "radial ejection linear ion trap","ref": "MS"}

  `Native spectrum identifier format <http://purl.obolibrary.org/obo/MS_1000767>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The format of the native spectrum identifier
       - example value
         {"accession": "http://purl.obolibrary.org/obo/MS_1000768",
          "name": "Thermo nativeID format","ref": "MS"}

  Number of scans
    .. highlight:: none

    .. parsed-literal::

       - type:
         int
       - definition
         The number of scans performed
       - example value
         {"value": 1073}

  `Raw Spectral Data File <http://purl.obolibrary.org/obo/MS_1000577>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         free text
       - definition
         The raw spectral data file (as extracted from the .mzML)
       - example value
         {"value": "20120627_SAM00533_RBC_NEG.RAW"}

  `Raw data file format <http://purl.obolibrary.org/obo/MS_1000560>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The format of the raw data file
       - example value
         {"accession": "http://purl.obolibrary.org/obo/MS_1000563",
          "name": "Thermo RAW format","ref": "MS"}

  Sample Name
    .. highlight:: none

    .. parsed-literal::

       - type
         free text
       - definition
         The name of the sample (populated as the .mzML filename w/o extension)
       - example value
         {"value": "Person30_RBC_elder_NEG"}

  Scan m/z range
    .. highlight:: none

    .. parsed-literal::

       - type
         free text
       - definition
         The isolation window m/z range used during the scans
       - example value
         {"value": "50-1945"}

  `Scan polarity <http://purl.obolibrary.org/obo/MS_1000465>`__

    .. highlight:: none

    .. parsed-literal::

       - type
         free text
       - definition
         The polarity of the scan (can be 'positive', 'negative', 'alternating' or 'n/a')
       - example value
         {"value": "negative"}

    .. note::

       It would be preferable for this to be a cv term, but while the PSI-MS ontology
       provides `positive scan <http://purl.obolibrary.org/obo/MS_1000130>`__ and
       a `negative scan <http://purl.obolibrary.org/obo/MS_1000129>`__ term, it doesn't
       provide any **alternating scan** term although referencing it among the possible
       `scan polarity <http://purl.obolibrary.org/obo/MS_1000465>`_ values. A request
       to add **alternating scan** to the MS ontology will probably be made.

  Time range
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition
         The range of scan start times of all the scans
       - example value
         {"value": "0.0061-30.0042"}


.. _extracted_imzml:

imzML
'''''

All the aforementioned (if relevant), and the following

.. glossary::

  Binary file checksum type
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term w/ value
       - definition
         The value and type of the checksum used to check the binary file.
       - example value:
         {"accession":"IMS:1000091", "name": "ibd SHA-1", "ref": "IMS"}

  `Detector mode <http://purl.obolibrary.org/obo/MS_1000027>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         list of cv terms
       - definition
         The mode the detector was set on during the scans
       - example value
         {"entry_list": [
            {"accession": "http://purl.obolibrary.org/obo/MS_1000118",
             "name": "pulse counting","ref": "MS"},
         ]},

  High-res image
    .. highlight:: none

    .. parsed-literal::

       - type
         free text
       - definition
         The name of the high-res image file
       - example value
         {"value": "BRB04W.ndpi"}

    .. warning::
       Although the default value for this term will always be extracted as
       ``"name_of_the_imzML_file".ndpi``, mzml2isa will always **try to find** that
       file in the parsed folder. Which means, if it can find it, **nothing will
       be extracted for that value**.

  Ibd binary type
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The type of data contained in the ibd binary file
       - example value
         {"accession": "IMS:1000031",
          "name": "processed","ref": "IMS"}

  Line scan direction
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The direction in which the lines of the sample were scanned
       - example value
         {"accession": "IMS:1000491",
          "name": "linescan left right","ref": "IMS"}

  Linescan sequence
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The direction of the succession of the assembling of the linescans.
       - example value
         {"accession": "IMS:1000401",
          "name": "top down","ref": "IMS"}

  Max count of pixel x
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value
       - definition
         The max length of the x axis among all scans
       - example value
         {"accession": "IMS:1000042","name": "max count of pixel x",
          "ref": "IMS","value": "103"}

  Max count of pixel y
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value
       - definition
         The max length of the y axis among all scans
       - example value
         {"accession": "IMS:1000043","name": "max count of pixel y",
          "ref": "IMS","value": "58"}

  Max dimension x
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value w/ unit
       - definition
         The size of the largest scanned line of x axis
       - example value
         {"accession": "IMS:1000044",
          "name": "max dimension x", "ref": "IMS",
          "value": "9095"
          "unit": {"accession": "UO:0000017",
                   "name": "micrometer","ref": "UO"} }

  Max dimension y
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value w/ unit
       - definition
         The size of the largest scanned line of y axis
       - example value
         {"accession": "IMS:1000044",
          "name": "max dimension x", "ref": "IMS",
          "value": "8900"
          "unit": {"accession": "UO:0000017",
                   "name": "micrometer","ref": "UO"} }

  Pixel size x
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value w/ unit
       - definition
         The size of the x dimension of a pixel
       - example value
         {"accession": "IMS:1000046",
          "name": "pixel size x","ref": "IMS",
          "value": "85",
           "unit": {"accession": "UO:0000017",
                    "name": "micrometer","ref": "UO"} }

  Pixel size y
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value w/ unit
       - definition
         The size of the y dimension of a pixel
       - example value
         {"accession": "IMS:1000047",
          "name": "pixel size y","ref": "IMS",
          "value": "85",
           "unit": {"accession": "UO:0000017",
                    "name": "micrometer","ref": "UO"} }

  Scan pattern
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The pattern how the image was scanned (child of IMS:1000041)
       - example value
         {"accession": "IMS:1000413",
          "name": "flyback","ref": "IMS"}

  Scan type
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term
       - definition
         The direction in which the lines were scanned (child of IMS:1000048)
       - example value
         {"accession": "IMS:1000480",
          "name": "horizontal line scan", "ref": "IMS"}

  Solvent
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value
       - definition
         The solvent used on the sample
       - example value
         {"accession": "IMS:1001211",
          "name": "solvent","ref": "IMS",
          "value": "methanol"}

    .. note::
       That parameter was only seen once, and it was a free text
       value. It would be better if this was a cv term, so changing
       the solvent column in the ISA file may be considered.

  Solvent flowrate
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value w/ unit
       - definition
         The flowrate of the solvent on the sample
       - example value
         {"accession": "IMS:1001213",
          "name": "solvent flowrate", "ref": "IMS",
          "value": "1.5"
          "unit": {"accession": "IMS:1000131",
                   "name": "milliliter per minute","ref": "IMS"} }

  `Spectrum representation <http://purl.obolibrary.org/obo/MS_1000525>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         list of cv terms
       - definition
         The way in which the spectra are reprensented
       - example value
         {"entry_list": [
            {"accession": "MS:1000127",
             "name": "centroid spectrum","ref": "MS"}
         ]}

  Target material
    .. highlight:: none

    .. parsed-literal::

       - type
         free text
       - definition
         The material that is targeted by the IMS instrument
       - example value
         {"accession": "IMS:1000202",
          "name": "target material","ref": "IMS",
          "value": "Glas"}

  `Universally unique identifier <http://www.maldi-msi.org/index.php?option=com_content&view=article&id=191&Itemid=65#uuid>`__
    .. highlight:: none

    .. parsed-literal::

       - type
         cv term w/ value
       - definition
         The UUID of the IBD binary file
       - example value
         {"accession": "IMS:1000080",
          "name": "universally unique identifier","ref": "IMS",
          "value": "{6E2F1092-F43A-4169-94CB-61DD5A61047E}"}


.. warning::
   The following items are being extracted with a **redundant cv term**, which we'll probably get rid
   of in the future:

   .. hlist::
      :columns: 4

      * :term:`Target material`
      * :term:`Solvent`
      * :term:`Solvent flowrate`
      * :term:`Max dimension x`
      * :term:`Max dimension y`
      * :term:`Max count of pixel x`
      * :term:`Max count of pixel y`
      * :term:`Max dimension x`
      * :term:`Max dimension y`

