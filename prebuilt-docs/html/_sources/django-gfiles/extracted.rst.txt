:tocdepth: 1


Extracted Terms list
====================


.. glossary::

  1r Data File
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The path to the 1r Data File (relative to folder containing the .nmrML being parsed)
       - example value:
         {'value': 'ADG10003u_007/10/pdata/1/1r'}

  1r Data Format
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The format of the 1r Data file (subclass of NMR:1001459)
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1400320",
          "name": "Bruker UXNMR/XWIN-NMR format", "ref": "NMRCV"}

  1r Data Type
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The type of the 1r Data (subclass of NMR:1000317)
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1000319",
          "name": "1R file","ref": "NMRCV"}

  Acquisition Nucleus
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The Nucleus which was used for the acquisition (reference to CHEBI is prefered)
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/CHEBI_49637",
          "name": "hydrogen atom", "ref": "CHEBI"}

  Acquisition Parameter Data File
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The path to the Acquisition Parameter Data File
       - example value:
         {"value": "ADG10003u_007/10/acqus"}

  Acquisition Parameter Data Format
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The format of the Acquisition Parameter Data File
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1400320",
          "name": "Bruker UXNMR/XWIN-NMR format", "ref": "NMRCV"}

  Baseline Correction Method
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The algorithm used for baseline correction
       - example value:
         {"accession": "http://nmrML.org/nmrCV#NMR:1000225",
          "name": "baseline correction using polynomial function", "ref": "NMRCV"}

  Calibration Reference Shift
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The shift used for calibration
       - example value:
         {}

  Data Transformation Name
    .. highlight:: none

    .. parsed-literal::

       - type:
         list of cv terms
       - definition:
         The successive transformation process the NMR data underwent
         (all being subclasses of NMR:1400042)
       - example value:
         {"entry_list": [
            {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1000071",
             "name": "phase correction", "ref": "NMRCV"},
            {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1400044",
             "name": "fourier transformation", "ref": "NMRCV"}
         ]}

  Data Transformation software
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The software used for the data transformation (subclass of NMR:1400213)
       - example value:
         {"accession": "http://nmrML.org/nmrCV#NMR:1000352",
          "name":"Bruker XWIN-NMR software", "ref":"NMRCV"}

  Data Transformation software version
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The version of the data transformation software
       - example value:
         {"value": "Version 3.5"}

  Decoupling Nucleus:
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The atom used for decoupling (if any) (reference to CHEBI is prefered)
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/CHEBI_49637",
          "name": "hydrogen atom", "ref": "CHEBI"}

  Derived Spectral Data File
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The file containing the Derived Spectral Data (the nmrML file itself)
       - example value:
         {"value": "MMBBI_10M12-CE01-1a.nmrML"}

  First Order Phase Correction
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The value of the parameter used to correct the phase.
       - example value:
         {"value": "-9.745789",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000185",
                   "name": "degree", "ref": "UO"} }

  Free Induction Decay Data File
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The file containing the FID data
       - example value:
         {"value": "ADG10003u_007/10/fid"}

  Free Induction Decay Data Format
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The format of the Free Induction Decay Data file (subclass of NMR:1000767)
       - example value:
         {"accession": "http://nmrML.org/nmrCV#NMR:1002003",
          "name": "Varian FID format", "ref": "NMRCV"}

  Instrument
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The NMR instrument that was used (subclass of NMR:1000031)
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1400236",
          "name": "INOVA", "ref": "NMRCV"}

  Instrument manufacturer
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The manufacturer of the instrument (subclass of NMR:1400255)
       - example value:
         {"accession": "http://nmrml.org/nmrCV.owl#NMR:1400257",
          "name": "Varian", "ref": "NMRCV"}

  Instrument software
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The software used by the NMR instrument (subclass of NMR:1400213)
       - example value:
         {"accession": "http://nmrML.org/nmrCV#NMR:1000352",
          "name": "Bruker XWIN-NMR software", "ref": "NMRCV"}

  Instrument software version
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The version of the instrument software
       - example value:
         {"value": "Version 3.5"}

  Irradiation Frequency
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The irradiation frequency
       - example value:
         {"value": "699.873291",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000325",
                   "name": "megaHertz","ref": "UO"} }

  Magnetic field strength
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The strength of the magnetic field (a.k.a Effective Excitation Field strength)
       - example value:
         {"value": "16.43813416009019",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000228",
                   "name": "tesla","ref": "UO"} }

    .. note::
       If the nmrML file also references an Acquisition Nucleus, and
       that this acquisition nucleus is among known ones (1H, 2H, 13C,
       14N, 15N, 17O, 31P), then the Magnetic field strength will be
       converted from mHz to Tesla for the output to be SI-compliant.

  NMR Assay Name
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The name of the NMR Assay (default is nmrML file name w/o extension)
       - example value:
         {"value": "ADG10003u_007"}

  NMR Probe
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term or free text
       - definition:
         The NMR probe used for the scans.
       - example value:
         {"name": "5 mm PATXI 1H-13C/15N XYZ-GRD Z561501/0002"
          "ref": "", "accession": ""}             # No CV term
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1000236",
         "name": "5mm HCN probe", "ref": "NMRCV"} # CV term

    .. note::
       If the nmrML file contains both a controlled vocabulary referenced
       probe and an UserParam with a free text probe reference, only the
       controlled vocabulary term will be extracted.

  NMR tube type
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The sample tube used in the NMR instrument (subclass of NMR:1400132)
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1400132",
          "name": "Sample-tube", "ref": "NMRCV"}

  Number of data points
    .. highlight:: none

    .. parsed-literal::

       - type:
         int
       - definition:
         The number of data points measured
       - example value:
         {"value": 65536}

  Number of steady state scans
    .. highlight:: none

    .. parsed-literal::

       - type:
         int
       - definition:
         The number of steady state scans performed
       - example value:
         {"value": 8}

  Number of transients
    .. highlight:: none

    .. parsed-literal::

       - type:
         int
       - definition:
         The number of scans performed
       - example value:
         {"value": 128}

  Processing Parameter Data File
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The file containing the Processing Parameter data
       - example value:
         {"value": "ADG10003u_007/10/pdata/1/procs"}

  Processing Parameter Data Format
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The format of the Processing Parameter Data file
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1400320",
          "name": "Bruker UXNMR/XWIN-NMR format", "ref": "NMRCV"}

  Pulse Sequence Data File
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The file containing the Pulse sequence data
       - example value:
         {"value": "ADG10003u_007/10/pulseprogram"}

  Pulse Sequence Data Format
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The format of the Pulse Sequence Data file
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1400320",
          "name": "Bruker UXNMR/XWIN-NMR format", "ref": "NMRCV"}

  Pulse Width
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The pulse width of the scan
       - example value:
         {"value": "7.750000",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000029",
                   "name": "microsecond","ref": "UO"} }

  Pulse sequence
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term or free text
       - definition:
         The pulse sequence used for the scans (subclass of NMR:1400037)
       - example value:
         {"name": "noesypr1d"
          "ref": "", "accession": ""}                                        # No CV term
         {"name": "1D carr purcell meiboom gill pulse sequence",
          "accession": "http://nmrML.org/nmrCV#NMR:1400167", "ref": "NMRCV"} # CV term

    .. note::
       If the nmrML file contains both a controlled vocabulary referenced
       pulse sequence and an UserParam with a free text pulse sequence
       defined, only the controlled vocabulary term will be extracted.

  Relaxation Delay
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The relaxation delay
       - example value:
         {"value": "3.000000",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000010",
                   "name": "secon","ref": "UO"} }

  Sample Name
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text
       - definition:
         The name of the sample (default is nmrML file w/o extension)
       - example value:
         {"value": "ADG10003u_007"}

  Sampling Strategy
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The sampling strategy used during the NMR scan (subclass of NMR:1000348)
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1000349",
          "name": "uniform sampling", "ref": "NMRCV"}

  Spectral Denoising Method
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The method used for spectral denoising

  Spinning Rate
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The spinning rate (if any)
       - example value:
         {"value": "0",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000169",
                   "name": "dimensionless","ref": "UO"} }

  Sweep Width
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The sweep width of the scan
       - example value:
         {"value": "14005.602241",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000106",
                   "name": "hertz", "ref": "UO"} }

  Study_contacts
    .. highlight:: none

    .. parsed-literal::

       - type:
         list
       - definition:
         A list of contacts references found in the nmrML file
       - example value:
         [{"first_name": "Lutger", "mid": "A.", "last_name": "Wessjohann",
           "mail": "Ludger.Wessjohann [a] ipb-halle.de"},
          {"first_name": "Mohamed", "mid": "A.", "last_name": "Farag",
           "mail": "mfarag73 [a] yahoo.com"}]

  Temperature
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The temperature of the sample
       - example value:
         {"value": "300.0000",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000012",
                   "name": "kelvin", "ref": "UO"} }

  Window Function Method
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The format of the window function method that was used (subclass of NMR:1400068)
       - example value:
         {"accession": "http://nmrml.org/cv/v1.0.rc1/nmrCV.owl#NMR:1400069",
          "name": "exponential multiplication window function", "ref": "NMRCV"}

  X axis range
    .. highlight:: none

    .. parsed-literal::

       - type:
         free text w/ unit
       - definition:
         The range of the X axis
       - example value:
         {"value": "2-25",
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000169",
                   "name": "parts per million", "ref": "UO"} }

  Y axis type
    .. highlight:: none

    .. parsed-literal::

       - type:
         cv term
       - definition:
         The unit of the Y axis of the spectrum
       - example value:
         {"accession": "http://purl.obolibrary.org/obo/UO_0000169",
          "name": "dimensionless","ref": "UO"}

  Zero Value Phase Correction
    .. highlight:: none

    .. parsed-literal::

       - type:
         float w/ unit
       - definition:
         The parameter used for the Zero Value Phase Correction
       - example value:
         {"value": "-37.977290"
          "unit": {"accession": "http://purl.obolibrary.org/obo/UO_0000185",
                   "name": "degree","ref": "UO"} }


